<template lang="html">
  <div class="">
    <h3>{{booking.name}}</h3>
    <p>email: {{booking.email}}</p>
    <p>Checked-in Status: {{booking.checkedInStatus}}</p>
  </div>
</template>

<script>
export default {
  name: "booking-item",
  props: ['booking'],
}
</script>

<style lang="css" scoped>
</style>
