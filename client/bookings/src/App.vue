<template>
  <div id="app">
    <booking-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js';
import BookingsGrid from '@/components/BookingsGrid';

export default {
  data(){
    return{
      bookings: []
    };
  },
  name: 'App',
  mounted() {
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);
  },
  components: {
    'booking-grid': BookingsGrid
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
