<template>
  <div id="app">
      <Header/>
      <transition name="component-fade" mode="out-in">
          <router-view/>
      </transition>
      <Footer/>
  </div>
</template>

<style>
    #app {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    button, a {
        outline: none !important;
    }


    <!-- transitons -->

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

    .component-fade-enter-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .list-fade-enter-active, .list-fade-leave-active {
        transition: opacity .3s ease;
    }

    .list-fade-enter-active {
        transition-delay: .3s;
    }

    .list-fade-enter, .list-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .list-fast-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-fast-enter-active, .list-fast-leave-active {
        transition: all 0.5s;
    }
    .list-fast-enter, .list-fast-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

    .slide-fade-enter-active {
        transition: all .5s ease;
        transition-delay: .3s;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
