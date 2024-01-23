<template>
  <h1 class="head" style="font-weight: bold;color:#b18044">DASHBOARD</h1>
  <div class="border"></div>
  <div class="container">
    <div class="content d-flex" style="width:100%; ">

      <div class="employees" style="width:50%;">
        <h1>Barbers</h1>
        <div v-for="barber in barbers" :key="barber.id">
          <div class="barberName" > 
            <div class="name" style="color:#b18044;font-size:20px;">
              {{barber.barberName}}
              <button @click="changeBarberToEdit(barber.barberName)" class="btn" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><i class="fas fa-edit" style="font-size:20px;"></i></button>
              <button @click="changeBarberToEdit(barber.barberName)" class="btn" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fas fa-trash-alt" style="font-size:20px;"></i></button>
            </div>

          </div>
        </div>
      </div>

      <div class="clients" style="width:50%;">
          <h1>Registered Users</h1>
          <div v-for="customer in customers" :key="customer.id">
            <div class="client" > 
              <div class="client_content" style="font-weight: 400;color:#b18044">
                <div class="cname"> <h6 style="font-weight: bold;color:#b18044"> Name:</h6> {{customer.customername}}</div>
                <div class="email"> <h6 style="font-weight: bold;color:#b18044"> Email:</h6> {{customer.email}}</div>
                <div class="crole"> <h6 style="font-weight: bold;color:#b18044"> Role:</h6> {{customer.role}}</div>
                <!-- <i class="fas fa-edit" style="font-size:20px;color:white;"></i>
                <i class="fas fa-trash" style="font-size:20px;color:white;"></i> -->
              </div>
            </div>
        </div>
    </div>

    </div>
  </div>


 <!-- edit barber -->
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="this.currentUser" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit your Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form >
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Barber Name:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="updatedBarber.barberName" >
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary" @click.prevent="updateBarber()" >SAVE</button>
      </div>
    </div>
  </div>
</div>


<!-- delete modal barber -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  v-if="this.currentUser">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       Are you sure you want to delete this employee?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-danger"  @click.prevent="deleteBarber()" >YES</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
   data(){
            return {
                customers:[],
                barbers:[],
                updatedBarber:{
                  barberName:"",
                },
                barberToEdit: ''
                
            }
        },
        mounted(){
            // fetch("https://barber-shopbackend.herokuapp.com/customers")
            fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(data => this.customers = data)
            .catch(err => console.log(err.message))

            // fetch("https://barber-shopbackend.herokuapp.com/barbers")
            fetch("http://localhost:3000/barbers")
            .then(res => res.json())
            .then(data => this.barbers = data)
            .catch(err => console.log(err.message))

        },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  },
  created() {
    if (this.currentUser.role !== "admin") {
      this.$router.push("/Profile")  
    }
  },
  methods:{
      changeBarberToEdit(barber){
        this.barberToEdit = barber
      },
      async updateBarber() {
       try {
      // fetch(`https://barber-shopbackend.herokuapp.com/barbers/${this.barberToEdit}`,{
      fetch(`http://localhost:3000/barbers/${this.barberToEdit}`,{
        method: "PUT",
        body: JSON.stringify({
          barberName: this.updatedBarber.barberName,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("customer")).accessToken
          }`,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.message) return alert(data.message)
        alert("Barber Name Updated!");
        this.$store.dispatch("auth/logout");
        this.$router.go()
        this.$router.push("/AdminDashboard")
      });
    } catch (err) {
      console.error(err)
      }
    },
      async deleteBarber(){
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("customer")).accessToken
          }`,
          },
      };
      // const new_url ="https://barber-shopbackend.herokuapp.com/barbers/";
      const new_url ="http://localhost:3000/barbers/";
      try {
        await axios.delete(new_url + this.barberToEdit, headers, this.currentUser).then(() => {
          alert("Barber has been deleted successfully");
          this.$store.dispatch("auth/logout");
          this.$router.go()
        this.$router.push("/AdminDashboard")
        });
      } catch(err) {
        console.error(err);
      }
    },
  }
}
</script>

<style scoped>
.fas{
  background: transparent;
  /* padding-right: 30px; */
}
.fas:hover{
  color: #b18044;
}
.head{
    padding-top:100px;
    
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}
/* .container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.name{
   display: block;
  width: 150px;
  height:100px;
    border: solid 1.5px white;
  border-radius: 5px;
  padding: 1em;
  background:white;
  color:black;
  font-size: 1.5em;
  font-weight: bold;
}

.barberName{
  margin: 15px;
}

table,tr,td,th{
  border: solid 1.5px white;
  width: 100%;
  padding: 0.5em;
  height: 100;
} */


@media only screen and (max-width: 600px) {
 .content{
   display:flex;
   flex-direction: column;
   align-items: center;
 }
}
/* table,tr,td,th{
  border: solid 1.5px white;
  width: 100%;
  padding: 0.5em;
  height: 100;
}  */

.barberName{
  /* border: solid 1.5px white; */
  padding: 0.5em;
  margin-bottom: 20px;
  border:1px solid white;
  border-radius:7px;
  margin-right: 5px;
}
.client{
  /* border: solid 1.5px white; */
  padding: 0.5em;
  margin-bottom: 20px;
  border:1px solid #b68345;
  border-radius:7px;
  margin-right: 5px;
  height: auto;
}
.name{
  background: transparent;
  padding: 0.5em;
  
}
.client_content{
  background: transparent;
  padding: 0.5em;
  
}
.cname, h6{
  background: transparent;
}
.email{
   background: transparent;
}

.crole{
  background: transparent;
}
</style>