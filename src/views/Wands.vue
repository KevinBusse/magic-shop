<template>
  <Carousel :items="items" />
</template>

<script>
import Carousel from '../components/Carousel'

import { wands } from '../data'

export default {
  name: 'Wands',
  data() {
    return {
      items: wands
    }
  },
  components: {
    Carousel
  }
}
</script>
