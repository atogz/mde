<template>
    <footer class="w-full mt-16">
        <div class="pl-6 pr-6 p-3 navbar bg-mainColor w-full flex items-center xxl:pl-32 xxl:pr-32">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <div class="w-auto">
                    <router-link to="/">
                        <img src="../assets/img/logo.png"/>
                    </router-link>
                </div>
                <div class="w-full hidden justify-between font-bold text-white uppercase lg:w-4/6 lg:flex">
                    <router-link to="/" class="text-white no-underline">Главная</router-link>
                    <router-link to="/about" class="text-white no-underline">О компании</router-link>
                    <router-link to="/projects" class="text-white no-underline">Проекты </router-link>
                    <router-link to="/gallery" class="text-white no-underline">Портфолио </router-link>
                    <router-link to="/partners" class="text-white no-underline">Партнеры </router-link>
                    <router-link to="/contacts" class="text-white no-underline">Контакты </router-link>
                </div>

                <div class="w-auto lg:hidden flex justify-end">
                    <font-awesome-icon :icon="['fa', 'bars']" class="text-white text-xl md:text-2xl" @click="showMobileMenu = !showMobileMenu"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
