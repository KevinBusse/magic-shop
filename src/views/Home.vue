<template>
  <div class="links">
    <router-link v-for="tag in tags" class="link" :key="tag.route" :to="`/${tag.route}`">
      <div class="icon">{{ tag.icon }}</div>
      <div class="text">{{ tag.label }}</div>
    </router-link>
  </div>
</template>

<script>
import { tags } from '../data'

export default {
  name: 'Home',
  data() {
    return {
      tags
    }
  }
}
</script>

<style scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  margin: 12px;
}

.link {
  height: 144px;
  width: 144px;
  margin: 12px;
  text-align: center;
  flex-shrink: 0;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  text-decoration: none;
  font-weight: bold;
  background-image: url('/assets/link.png');
  background-size: 100% 100%;
}

a.link, a.link:hover, a.link:visited, a.link:focus {
  color: black;
}

.icon {
  font-size: 64px;
  margin: 12px 0;
}

.text {
  font-size: 16px;
}
</style>
