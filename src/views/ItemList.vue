<template>
  <Carousel :items="items"/>
</template>

<script>
import Carousel from '../components/Carousel'

import data from '../data'

export default {
  name: 'ItemList',
  props: ['tag'],
  computed: {
    items() {
      const tag = data.tags.find(({route}) => route === this.tag)
      if (!tag) {
        return []
      }

      return data.items.filter(({tags}) => tags.includes(tag.tag || tag.label))
    }
  },
  components: {
    Carousel
  }
}
</script>
