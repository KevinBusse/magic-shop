<template>
  <carousel-3d
      :height="Math.min(windowHeight - 84, (windowWidth - 80) / 1113 * 1902)"
      :width="Math.min((windowHeight - 84) / 1902 * 1113, windowWidth - 80)"
      border="0"
  >
    <slide v-for="(item, idx) in items" :key="item.name" :index="idx" >
      <SlideTitle :title="item.name"/>
      <SlidePrice :value="item.price"/>
      <SlideContent>
        {{ item.description }}
      </SlideContent>
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import SlideContent from './SlideContent';
import SlideTitle from './SlideTitle';
import SlidePrice from "./SlidePrice"

export default {
  name: 'Carousel',
  components: {
    SlidePrice,
    Carousel3d,
    Slide,
    SlideTitle,
    SlideContent,
  },
  props: ['items'],
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>
.carousel-3d-slide {
  background-color: transparent;
  background-image: url('/assets/back.png');
  background-size: 100% 100%;
}
</style>

