<template>
  <Carousel :items="items"/>
</template>

<script>
import Carousel from '../components/Carousel'

import { healing } from '../data'

export default {
  name: 'Healing',
  data() {
    return {
      items: healing
    }
  },
  components: {
    Carousel
  }
}
</script>
