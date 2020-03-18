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
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fadeHeight-enter-active,
.fadeHeight-leave-active {
    transition: all 0.2s;
    max-height: 360px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
    opacity: 0;
    max-height: 0;
}
</style>

<style src="./assets/css/tailwind.css"></style>
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
