<template>
  <header class="w-full">
      <div class="pl-6 pr-6 p-3 topbar bg-accentColor items-center hidden lg:flex">
          <div class="container mx-auto flex w-full flex-wrap">
              <div class="w-full flex lg:w-1/2">
                  <div class="w-1/2 flex items-center">
                      <font-awesome-icon :icon="['fa', 'map-marker-alt']" class="text-mainColor" />
                      <span class="ml-2">Моска, Казань, Санкт-Петербург</span>
                  </div>
                  <div class="w-1/2 flex items-center">
                      <font-awesome-icon :icon="['fa', 'envelope']" class="text-mainColor" />
                      <span class="ml-2">info@md-engineering.com</span>
                  </div>
              </div>

              <div class="w-full flex lg:w-1/2">
                  <div class="w-full flex items-center mt-2 md:mt-0 lg:justify-end">
                      <span>Телефон для связи: </span>
                      <span class="ml-2 text-xl">1800 123 4567</span>
                  </div>
              </div>

          </div>
      </div>
      <div class="pl-6 pr-6 p-3 navbar bg-mainColor w-full flex items-center">
          <div class="w-full lg:w-3/6">
              <img src="../assets/img/logo.png"/>
          </div>
          <div class="w-full hidden justify-between font-bold text-white uppercase lg:flex">
              <div>Главная</div>
              <div>О Компании</div>
              <div>Проекты</div>
              <div>Портфолио</div>
              <div>Партнеры</div>
              <div>Контакты</div>
          </div>

          <div class="w-full lg:hidden flex justify-end">
              <font-awesome-icon :icon="['fa', 'bars']" class="text-white text-xl md:text-2xl" @click="showMobileMenu = !showMobileMenu"/>
          </div>
      </div>
    <transition name="fadeHeight">
        <div class="flex flex-col bg-mainColor opacity-75 pt-3 pb-3 text-white text-lg uppercase" v-if="showMobileMenu">
            <div class="pl-6 pr-6 p-3">Главная</div>
            <div class="pl-6 pr-6 p-3">О Компании</div>
            <div class="pl-6 pr-6 p-3">Проекты</div>
            <div class="pl-6 pr-6 p-3">Портфолио</div>
            <div class="pl-6 pr-6 p-3">Партнеры</div>
            <div class="pl-6 pr-6 p-3">Контакты</div>
        </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style scoped>
    .topbar {
        color: #f5f5f5;
    }
    .navbar {
        min-height: 83px;
    }
</style>
