<template lang="html">
  <div>
    <booking-item v-for="(booking,index) in bookings" :key="index" :booking="booking" />
  </div>

</template>

<script>
import BookingsService from '@/services/BookingsService.js'
import BookingItem from './BookingItem'

export default {
  name: 'booking-grid',
  props: ['bookings'],
  components: {
    'booking-item': BookingItem
  }
}

</script>

<style lang="css" scoped>
</style>
