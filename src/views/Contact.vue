<template>
<div class="flex flex-col items-center justify-center">
  <div class="">
  <img src="https://i.postimg.cc/fRKXZtHJ/contact-banner.png" alt="" class="object-cover banner">
  </div>
  <div class="absolute flex items-center pb-20 justify bottom-96">
    <div class="flex flex-col items-center justify-center">
      <h1 class="font-bold text-white uppercase text-7xl">Contact Us</h1>
       <!-- <h3 class="text-xl font-semibold text-white">Lets Your Hair Do The Talking...</h3> -->
    </div>
  </div>
</div>
<h1 class="text-3xl font-semibold mt-14">Chat with us</h1>
<p class="mt-5 text-base font-normal">For any enquiries, additional information or special booking requests, feel free to get in touch with us by filling in the form below.</p>
<div class="flex flex-col w-full h-full mx-auto mt-10 md:grid md:grid-cols-2 maxWidth">
    <div class="w-full mt-10" id="contact">
          <form @submit.prevent="handleSubmit" id="contact-form" name="myForm" class="flex flex-col w-full gap-6 px-4 md:w-4/5 form"  role="form">
                <div class="w-full">
                    <input type="text" class="w-full p-2 py-4 border-none rounded bgLightGrey" id="name" name="name" placeholder="Your Name" tabindex=""  required v-model="name">
                </div>
                <div class="w-full">
                    <input type="email" class="w-full p-2 py-4 border-none rounded bgLightGrey" id="email" name="email" placeholder="Your Email" tabindex="" required v-model="email">
                </div>
                <div class="w-full">
                    <input type="text" class="w-full p-2 py-4 border-none rounded bgLightGrey" id="phone" name="phone" placeholder="Your Phone Number" tabindex=""  required v-model="phone">
                </div>
                <div class="w-full">
                    <textarea rows="6" cols="60" name="message" class="w-full p-2 py-5 border-none rounded bgLightGrey" id="message" placeholder="Your Message" tabindex="" v-model="message"></textarea >
                </div>
                <div class="">
                    <button type="submit" class="w-full py-3 text-white border-none rounded bgBlack">Send Message</button>
                    <!-- <button type="reset" value="Reset" class="btn btn-mod btn-border btn-large">reset</button> -->
                </div>
            </form>
    </div>
<div class="hidden w-full mt-10 md:block">
        <div>
          <img src="https://i.postimg.cc/pLHSZ1kq/Rectangle-10.png" alt="" class="w-96">
        </div>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      name:"",
      email: "",
      message: "",

    }
  },
  methods:{
    handleSubmit(){
    console.log(this.name, this.email, this.message)
    let contact = {
    name: this.name,
    email: this.email,
    message: this.message,
  }
    // fetch('https://barber-shopbackend.herokuapp.com/contact', {
    fetch('http://localhost:3000/contact', {
  method: 'POST',
  body: JSON.stringify(contact),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert(json.msg))
  .catch((e) => alert(e.msg));
    }
  }
}
</script>

<style scoped>

.formWidth{
  width: 80%;
}


</style>