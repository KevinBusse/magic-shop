<template>
  <div class="slideTitle">
    <svg viewBox="0 0 300 70" width="100%">
      <path id="curve" fill="transparent" d="M 0 50 c 100 -20, 200 -20, 300 0" />
      <path id="curve1" fill="transparent" d="M 0 30 c 100 -20, 200 -20, 300 0" />
      <path id="curve2" fill="transparent" d="M 0 58 c 100 -20, 200 -20, 300 0" />
      <text v-if="title.includes('\n')" font-size="22px" width="300">
        <textPath xlink:href="#curve1">
          {{ title.split('\n')[0] }}
        </textPath>
        <textPath xlink:href="#curve2">
          {{ title.split('\n')[1] }}
        </textPath>
      </text>
      <text v-if="title.length <= 9" font-size="36px" width="300">
        <textPath xlink:href="#curve">
          {{ title }}
        </textPath>
      </text>
      <text v-if="title.length > 9 && !title.includes('\n')" font-size="22px" width="300">
        <textPath xlink:href="#curve">
          {{ title }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SlideTitle',
  props: {
    title: String,
  }
}
</script>

<style scoped>
.slideTitle {
  /*background-color: rgba(255, 20, 147, 0.3);*/
  height: 9%;
  margin: 3% 17%;
  text-align: center;
  font-weight: bold;
  overflow-y: hidden;
}
</style>

