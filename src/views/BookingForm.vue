<template>
   <h1 class="head" style="font-weight: bold;color:#b18044">BOOKING</h1>
   <div class="border"></div>
          <div class="container" v-for="service of services" :key="service.title">
            <div class="row" v-if="service.showForm">
                <div class="title" style="font-size:30px"><span style="color:#b68345">{{service.title}}</span> | R{{service.price}}</div>
                <div class="discription">{{service.discription}}</div>
                     <form @submit.prevent="handleSubmit(service.title)" id="contact-form" name="myForm" class="form"  role="form">

                <div class="form-group col">
                    <label for="barbers" ><span style="font-size:20px;color:#b68345">Choose your Barber:</span> </label>
                        <select id="barbers" name="barbers" required v-model="barberName">>
                        <option value="yaaseen">Yaaseen</option>
                        <option value="muneeb">Muneeb</option>
                        <option value="naaim">Naaim</option>
                        <option value="nadeem">Nadeem</option>
                    </select>
                </div>
                    <div class="form-group col">
                    <label for="sessions" > <span style="font-size:20px;color:#b68345">Choose a session:</span> </label>
                      <select id="sessions" name="sessions" required v-model="sessionNumber">>
                          <option value="session1">Session 1 - 9:00am-10:00am</option>
                          <option value="session2">Session 2 - 10:00am-11:00am</option>
                          <option value="session3">Session 3 - 11:00am-12:00am</option>
                          <option value="session4">Session 4 - 12:00am-1:00pm</option>
                          <option value="session5">Session 5 - 1:00pm-2:00pm</option>
                          <option value="session6">Session 6 - 2:00pm-3:00pm</option>
                          <option value="session7">Session 7 - 3:00pm-4:00pm</option>
                          <option value="session8">Session 8 - 4:00pm-5:00pm</option>
                          <option value="session9">Session 9 - 5:00pm-6:00pm</option>
                      </select>
                </div>
                <button class="btn">submit</button>
            </form>
            </div>
          </div>
              <div class="container" v-for="beard of beards" :key="beard.title">
            <div class="row" v-if="beard.showForm">
                <div class="title" style="font-size:30px"><span style="color:#b68345">{{beard.title}}</span> | R{{beard.price}}</div>
                <div class="discription">{{beard.discription}}</div>
                     <form @submit.prevent="handleSubmit(beard.title)" id="contact-form" name="myForm" class="form"  role="form">

                <div class="form-group col">
                    <label for="barbers" ><span style="font-size:20px;color:#b68345">Choose your Barber:</span> </label>
                        <select id="barbers" name="barbers" required v-model="barberName">>
                        <option value="yaaseen">Yaaseen</option>
                        <option value="muneeb">Muneeb</option>
                        <option value="naaim">Naaim</option>
                        <option value="nadeem">Nadeem</option>
                    </select>
                </div>
                    <div class="form-group col">
                    <label for="sessions" > <span style="font-size:20px;color:#b68345">Choose a session:</span> </label>
                      <select id="sessions" name="sessions" required v-model="sessionNumber">>
                          <option value="session1">Session 1 - 9:00am-10:00am</option>
                          <option value="session2">Session 2 - 10:00am-11:00am</option>
                          <option value="session3">Session 3 - 11:00am-12:00am</option>
                          <option value="session4">Session 4 - 12:00am-1:00pm</option>
                          <option value="session5">Session 5 - 1:00pm-2:00pm</option>
                          <option value="session6">Session 6 - 2:00pm-3:00pm</option>
                          <option value="session7">Session 7 - 3:00pm-4:00pm</option>
                          <option value="session8">Session 8 - 4:00pm-5:00pm</option>
                          <option value="session9">Session 9 - 5:00pm-6:00pm</option>
                      </select>
                </div>
                <button class="btn">submit</button>

            </form>
            </div>
          </div>
                <div class="container" v-for="treatment of treatments" :key="treatment.title">
            <div class="row" v-if="treatment.showForm">
                <div class="title" style="font-size:30px"><span style="color:#b68345">{{treatment.title}}</span> | R{{treatment.price}}</div>
                <div class="discription">{{treatment.discription}}</div>
                     <form @submit.prevent="handleSubmit(treatment.title)" id="contact-form" name="myForm" class="form"  role="form">

                <div class="form-group col">
                    <label for="barbers" ><span style="font-size:20px;color:#b68345">Choose your Barber:</span> </label>
                        <select id="barbers" name="barbers" required v-model="barberName">>
                        <option value="yaaseen">Yaaseen</option>
                        <option value="muneeb">Muneeb</option>
                        <option value="naaim">Naaim</option>
                        <option value="nadeem">Nadeem</option>
                    </select>
                </div>
                    <div class="form-group col">
                    <label for="sessions" > <span style="font-size:20px;color:#b68345">Choose a session:</span> </label>
                      <select id="sessions" name="sessions" required v-model="sessionNumber">>
                          <option value="session1">Session 1 - 9:00am-10:00am</option>
                          <option value="session2">Session 2 - 10:00am-11:00am</option>
                          <option value="session3">Session 3 - 11:00am-12:00am</option>
                          <option value="session4">Session 4 - 12:00am-1:00pm</option>
                          <option value="session5">Session 5 - 1:00pm-2:00pm</option>
                          <option value="session6">Session 6 - 2:00pm-3:00pm</option>
                          <option value="session7">Session 7 - 3:00pm-4:00pm</option>
                          <option value="session8">Session 8 - 4:00pm-5:00pm</option>
                          <option value="session9">Session 9 - 5:00pm-6:00pm</option>
                          <!-- <option value="session10">Session 10 6:00am-6:00pm</option> -->
                      </select>
                </div>
                <button class="btn">submit</button>

            </form>
            </div>
   
          </div>
   
      
       
</template>

<script>

export default {
  data() {
    return {
      barberName:'',
      sessionNumber:'',
    }
  },
  props:[
    "services",
    "beards",
    "treatments"
  ],
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
   created() {
    if (!this.loggedIn) {
      this.$router.push("/Login");
    }
  },
   methods:{
    handleSubmit(style){
    // fetch(`https://barber-shopbackend.herokuapp.com/barbers/${this.barberName}/bookings`, {
    fetch(`http://localhost:3000/barbers/${this.barberName}/bookings`, {
  method: 'POST',
  body: JSON.stringify({
    sessionNumber: this.sessionNumber, 
    style:style,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization' : `Bearer ${JSON.parse(localStorage.getItem("customer")).accessToken}`
  },
})
  .then((response) => response.json())
  .then((json) => alert( "Thanks your booking has been processed"))
  this.$router.push("/Login") 
  .catch((error) => alert(error.msg));
    }
  }


}
</script>

<style scoped>
.head{
    padding-top:100px;
}
.container{
  display:flex;
  justify-content: center;
}
.form-group{
  display:grid;
  padding-top:10px;
}
.title{
  margin-top:70px;
}
.discription{
  margin-top:30px;
}
.form{
  margin-top:40px;
}
.btn{
  margin-top:30px;
}
.border{
    border-top: 1px solid;
    width: 100px;
    display:inline-flex;
    justify-content: center;
}

</style>