<template>
  <div id="app">
  </div>
</template>

<script>
import BookingsService from '@/services/BookingsService.js'

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
