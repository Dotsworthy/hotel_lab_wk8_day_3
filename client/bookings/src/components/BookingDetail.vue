<template lang="html">
  <div id="booking-detail">

      <form @submit="updateBooking" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required>
        <br>
        <label for="status">Checked In Status</label>
        <select required id="status" v-model="checkedInStatus">
          <option selected disabled hidden></option>
          <option  value="Checked-In">Checked-In</option>
          <option value="Checked-Out">Checked-Out</option>
          <option value="Not-Arrived">Not-Arrived</option>
        </select>
        <br>
        <input type="submit" name="" value="Update" id="update">
      </form>

  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js'
import { eventBus } from '@/main.js'

export default {


  name: "booking-detail",
  data(){
    return {
        name: this.booking.name,
        email: this.booking.email,
        checkedInStatus: this.booking.checkedInStatus
    }
  },
  props: ["booking"],
  watch: {
    booking: function(newVal, oldVal) {
      this.name = newVal.name
      this.email = newVal.email
      this.checkedInStatus = newVal.checkedInStatus
    }
  },
  methods: {
    updateBooking(event){
      event.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        checkedInStatus: this.checkedInStatus
      }
      BookingsService.updateBooking(this.booking._id, booking)
      .then(res => eventBus.$emit('booking-changed'))

      }
    }
  }
</script>

<style lang="css" scoped>
</style>
