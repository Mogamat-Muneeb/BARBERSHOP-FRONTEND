<template>
  <div class="flex flex-col items-center justify-center">
    <div class="">
      <img
        src="https://i.postimg.cc/yYWwpJnQ/Logo-Banner.png"
        alt=""
        class="object-cover Logobanner"
      />
    </div>
    <!-- <div class="absolute flex items-center justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Contact Us</h1>
       <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3>
    </div>
  </div> -->
  </div>

  <h1 class="text-3xl font-semibold mt-14">Profile</h1>
  <h1 class="text-3xl font-semibold mt-14">Personal Information</h1>

  <div class="p-5 row">
    <div class="col">
      <!-- <h6>{{ currentUser.customername }}</h6>
      <h6>{{ currentUser.email}}</h6> -->
      <!-- <button class="btn" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">EDIT</button>
          <button class="btn" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal">DELETE</button> -->
    </div>
    <div class="grid items-center justify-center grid-cols-3 mx-auto maxWidth">
      <div class="text-left">
        <h1 class="text-3xl font-semibold">Email</h1>
        <span class="pro-detail">{{ currentUser.email }}</span>
      </div>
      <div class="">
        <h1 class="text-3xl font-semibold">Name</h1>
        <span class="pro-detail">{{ currentUser.customername }}</span>
      </div>
      <div class="text-right">
        <h1 class="text-3xl font-semibold">Phone</h1>
        <span class="pro-detail">{{ currentUser.phone_number }}</span>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="currentUser"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="color: #b18044">
            Edit your Profile
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Name:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="updatedUser.customername"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Email:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="updatedUser.email"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Phone:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="updatedUser.phone_number"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            CLOSE
          </button>
          <button type="button" class="btn" @click.prevent="updateUser()">
            SAVE
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- delete modal -->
  <!-- <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="this.currentUser"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="color: #b18044">
            Delete your profile?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete you account?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            CLOSE
          </button>
          <button type="button" class="btn" @click.prevent="deleteUser()">
            YES
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
// const url = "https://barber-shopbackend.herokuapp.com/customers/";
const url = "http://localhost:3000/customers/";
import axios from "axios";
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/Login");
    }
  },
  data() {
    return {
      updatedUser: {
        email: "",
        customername: "",
        phone_number: "",
      },
    };
  },
  methods: {
    async updateUser() {
      try {
        fetch(`${url}`, {
          method: "PATCH",
          body: JSON.stringify({
            email: this.updatedUser.email,
            customername: this.updatedUser.customername,
            phone_number: this.updatedUser.phone_number,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("customer")).accessToken
            }`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            alert("Your profile has been updated!");
            this.$store.dispatch("auth/logout");
            this.$router.push("/Login");
          });
      } catch (err) {
        console.error(err);
      }
    },
    async deleteUser() {
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("customer")).accessToken
          }`,
        },
      };
      const new_url = `${url}`;
      try {
        await axios.delete(new_url, headers, this.currentUser).then(() => {
          alert("Profile has been deleted successfully");
          this.$store.dispatch("auth/logout");
          this.$router.push("/Login");
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
/* .buttons{
  display: flex;
  padding-top: 20px;
}
.container {
    
    justify-content:center;
    text-align: center;
    padding-top: 100px;
   
}
.picInfo{
  padding-top:5px;
}
.name{
  color: #b68345;
  padding-right: 10px;
  font-size:20px;
}
.admin-profile{
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
.about-profile{
  padding-top: 10px;
 display:flex;
 justify-content: center;
 text-align: center;
}
.about-profile li{
    display: flex;
    justify-content:space-around;
    width:300px;
    padding-top: 20px;
    text-align: center;
}
.about-profile .pro-title {
    font-weight: 700;
    background: transparent;
    position: relative;
    width: 120px;
    display: inline-block;
    margin-bottom: 5px;
    text-align: center;
 
    
}


.about-profile .pro-title:after {
    position: absolute;
    content: ':';
    color: #b68345;
    font-size: 14px;
    left: 100px;
   text-align: center;
}

ul li, ol li {
    list-style: none;
    text-align: center;
}
.jumbotron{
  display: flex;
  justify-content:center;
}
h6{ 
  padding-right: 10px;
}
.jumbotron{
   padding-top:100px;
}
img{
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border: 4px solid #b68345;
}

.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}

@media only screen and (max-width: 500px) {
  .about-profile{
   padding-top: 50px;
   padding-left: 350px;
   padding-right: 100px;
  }
  .buttons{
     padding-left: 100px;
  }
  img{
    width: 150px;
    height: 0px;
  }
} */
</style>
