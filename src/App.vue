<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style>
#app {
    font-family: 'PT Sans Caption', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

<style src="./assets/css/tailwind.css"></style>
<link href="https://fonts.googleapis.com/css?family=PT+Sans+Caption&display=swap" rel="stylesheet">
