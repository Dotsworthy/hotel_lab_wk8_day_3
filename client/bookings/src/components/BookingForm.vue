<template lang="html">
  <div>
    <form @submit="addBooking" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required>

      <label for="status">Checked In Status</label>
      <select required id="status" v-model="checkedInStatus">
        <option value="" selected disabled hidden>Please select!</option>
        <option  value="Checked-In">Checked-In</option>
        <option value="Checked-Out">Checked-Out</option>
        <option value="Not-Arrived">Not-Arrived</option>
      </select>

      <input type="submit" name="" value="Save" id="save">
    </form>
  </div>

</template>

<script>
import {eventBus} from '@/main.js';
import BookingsService from '@/services/BookingsService.js'

export default {
  name: 'booking-form',
  data() {
    return {
      name: '',
      email: '',
      checkedInStatus: ''
    }
  },
  methods: {
    addBooking(event){
      event.preventDefault()
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(this.email.match(mailformat)) {
        const booking = {
          name: this.name,
          email: this.email,
          checkedInStatus: this.checkedInStatus
        }
        BookingsService.postBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))
        this.name = this.email = this.checkedInStatus = ''
      }
      else {
        alert("You have entered an invalid email address!");
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
