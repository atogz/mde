<template>
    <main>
        <Slider/>
        <div class="w-full pl-6 pr-6 pt-12 flex flex-wrap xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">
            <div class="w-full">
                <h3>Компания MD Engineering</h3>
            </div>
            <div class="w-1/2">
                <h3 class="text-3xl text-mainColor">Лидер на мировом рынке<span class="text-accentColor"> с 1995 года</span></h3>
                <p class="mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.Morbi vitae bibendum mi.
                    Phasellus commodo est ut magna tristique, ut mattis felis eleifend.
                    Nulla viverra quam eget risus rutrum, non bibendum turpis sagittis.</p>
                <p class="mt-3">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Proin cursus sem at rhoncus convallis.
                </p>
                <p class="mt-3">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Proin cursus sem at rhoncus convallis.
                </p>
                <div class="w-full flex items-center mt-12">
                    <router-link to="/about" class="p-3 w-1/3 bg-mainColor text-white text-center rounded-full font-bold">
                        О Компании
                    </router-link>
                    <router-link to="/projects" class="p-3 ml-2 w-1/3 bg-accentColor text-white text-center rounded-full font-bold">
                        Проекты
                    </router-link>
                </div>
            </div>
            <div class="w-1/2 pl-12">
                <div class="w-full flex">
                    <div class="w-3/5 mr-2">
                        <img class="xxl:hidden" src="../assets/img/welcome_lg.jpg" />
                        <img class="hidden xxl:block" src="../assets/img/welcome_lg_desktop.jpg">
                    </div>
                    <div class="w-2/5 flex">
                        <img class="pt-12 xxl:hidden" src="../assets/img/welcome_sm.jpg" />
                        <img class="pt-12 hidden xxl:block" src="../assets/img/welcome_sm_desktop.jpg" />
                    </div>
                </div>

            </div>
        </div>
        <div class="w-full pl-6 pr-6 pt-12 pb-12 flex flex-wrap bg-gray-200 flex xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">
            <div class="w-1/2 m-auto text-center text-mainColor">
               <h3 class="text-3xl font-bold">Наши заказчики</h3>
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.Morbi vitae bibendum mi.
                    Phasellus commodo est ut magna tristique, ut mattis felis eleifend</p>
            </div>
            <div class="w-full pb-12 pt-12 pl-12 pr-12 flex justify-between items-center">
                <img src="../assets/img/client_logo_1.png" />
                <img src="../assets/img/client_logo_2.png" />
                <img src="../assets/img/client_logo_3.png" />
                <img src="../assets/img/client_logo_4.png" />
                <img src="../assets/img/client_logo_5.png" />
            </div>
        </div>
    </main>
</template>

<script>
import Slider from "@/components/Slider.vue";

export default {
  name: 'Home',
  components: {
    Slider,
  }
}
</script>
