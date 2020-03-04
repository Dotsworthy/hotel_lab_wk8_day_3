<template lang="html">
  <div class="">
    <h3>{{booking.name}}</h3>
    <p>email: {{booking.email}}</p>
    <p>Checked-in Status: {{booking.checkedInStatus}}</p>
    <button @click="deleteBooking" type="button" name="button">Delete</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import BookingsService from '@/services/BookingsService.js';
export default {
  name: "booking-item",
  props: ['booking'],
  methods: {
    deleteBooking() {
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
