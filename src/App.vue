<template>
  <div id="app">
    <Header/>
      <div class="hidden lg:block">
          <Slider/>
      </div>

  </div>
</template>

<script>

import Header from './components/Header.vue'
import Slider from "./components/Slider.vue";

export default {
  name: 'App',
  components: {
    Header,
    Slider
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

/*vue transitions*/
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.fade-leave-active {
    position: absolute;
}

.animated {
    transition: all 0.5s;
    /*display: flex;*/
    width: 100%;
}
</style>

<style src="./assets/css/tailwind.css"></style>
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
