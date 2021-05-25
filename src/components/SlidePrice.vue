<template>
  <div class="slidePrice">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'SlidePrice',
  props: {
    value: String,
  }
}
</script>

<style scoped>
.slidePrice {
  /*background-color: rgba(0, 0, 255, 0.3);*/
  margin: 4% 25% 0 21%;
  height: 3%;
  font-weight: bold;
  text-align: center;
  overflow-y: scroll;
}
</style>

