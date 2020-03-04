<template>
  <div  id="app">
    <booking-form/>
    <booking-grid :bookings="bookings"/>
    <booking-detail v-if="selectedBooking" :booking="selectedBooking"/>
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js';
import BookingsGrid from '@/components/BookingsGrid';
import BookingForm from '@/components/BookingForm';
import BookingDetail from '@/components/BookingDetail'
import {eventBus} from '@/main.js'

export default {
  data(){
    return{
      bookings: [],
      selectedBooking: null
    };
  },
  name: 'App',
  mounted() {
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('selected-booking', (booking) => {
        this.selectedBooking = booking
    })

    eventBus.$on('booking-changed', () => {
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id);
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);;
    })
  },
  components: {
    'booking-grid': BookingsGrid,
    'booking-form': BookingForm,
    'booking-detail': BookingDetail
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
