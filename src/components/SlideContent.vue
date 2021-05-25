<template>
  <div class="slideContent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SlideContent',
}
</script>

<style scoped>
.slideContent {
  /*background-color: rgba(0, 255, 255, 0.3);*/
  margin: 0 11% 0 12%;
  height: 77.5%;
  overflow-y: scroll;
  white-space: pre-line;
}
</style>

