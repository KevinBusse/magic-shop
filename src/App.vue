<template>
  <div id="app">
    <router-link class="home" to="/">Bigbys Magische Dinge</router-link>
    <router-view/>
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
a.home {
  font-weight: bold;
  height: 44px;
  display: block;
  margin: 10px 0 0 0;
  text-decoration: none;
  font-size: 36px;
}
a.home, a.home:hover, a.home:visited, a.home:focus {
  color: black;
}
</style>
