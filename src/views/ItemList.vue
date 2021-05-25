<template>
  <Carousel :items="items"/>
</template>

<script>
import Carousel from '../components/Carousel'

import { items, tags } from '../data'

export default {
  name: 'ItemList',
  props: ['tag'],
  computed: {
    items() {
      const tag = tags.find(({route}) => route === this.tag)
      if (!tag) {
        return []
      }

      return items.filter(({tags}) => tags.includes(tag.tag || tag.label))
    }
  },
  components: {
    Carousel
  }
}
</script>
