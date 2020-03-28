<template>
    <main>
        <!-- Slider -->
        <div class="w-full hidden lg:block">
            <Slider/>
        </div>
        <!-- End Slider -->

        <!-- Welcome -->
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
                <div class="w-full flex items-center mt-12 xxl:w-2/3">
                    <router-link to="/about" class="p-3 w-1/3 bg-mainColor text-white no-underline text-center rounded-full font-bold">
                        О Компании
                    </router-link>
                    <router-link to="/projects" class="p-3 ml-2 w-1/3 bg-accentColor text-white no-underline text-center rounded-full font-bold">
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
        <!-- End Welcome -->

        <!-- Partners -->
        <div class="w-full pl-6 pr-6 pt-12 pb-12 flex flex-wrap bg-gray-200 flex xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">
            <div class="w-1/2 m-auto text-center text-mainColor">
               <h3 class="text-3xl font-bold">Наши партнеры</h3>
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
            </div>
            <div class="w-full pb-12 pt-12 pl-12 pr-12 flex justify-between items-center">
                <router-link to="/partners">
                    <img src="../assets/img/client_logo_1.png" />
                </router-link>
                <router-link to="/partners">
                    <img src="../assets/img/client_logo_2.png" />
                </router-link>
                <router-link to="/partners">
                    <img src="../assets/img/client_logo_3.png" />
                </router-link>
                <router-link to="/partners">
                    <img src="../assets/img/client_logo_4.png" />
                </router-link>
                <router-link to="/partners">
                    <img src="../assets/img/client_logo_5.png" />
                </router-link>
            </div>
        </div>
        <!-- End Clients -->

        <!-- Services -->
        <div class="home-services w-full pl-6 pr-6 pt-12 pb-12 flex flex-wrap bg-gray-200 flex xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">
            <div class="w-1/2 m-auto text-center text-mainColor">
                <h3 class="text-3xl font-bold">Виды работ</h3>
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div class="w-full mt-8 flex flex-wrap justify-between xxl:w-4/5 xxl:mx-auto">
                <div class="relative">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
                        <img class="w-full home-services__category-image" src="../assets/img/services_cat-1.jpg">
                        <div class="px-6 pt-6 pb-12">
                            <div class="font-bold text-xl mb-2 text-mainColor text-center">Строительные работы</div>
                            <p class="text-gray-700 text-base mt-6 pb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div class="w-full flex justify-center home-gallery-link">
                        <router-link to="/gallery" class="px-8 py-4  bg-mainColor text-white no-underline font-bold flex justify-between items-center rounded">
                            <span>Портфолио</span>
                            <font-awesome-icon :icon="['fa', 'angle-right']" class="text-white ml-2 text-xl"/>
                        </router-link>
                    </div>
                </div>

                <div class="relative">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
                        <img class="w-full home-services__category-image" src="../assets/img/services_cat-2.jpg">
                        <div class="px-6 pt-6 pb-12">
                            <div class="font-bold text-xl mb-2 text-mainColor text-center">Дизайн</div>
                            <p class="text-gray-700 text-base mt-6 pb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div class="w-full flex justify-center home-gallery-link">
                        <router-link to="/gallery" class="px-8 py-4 bg-accentColor text-white no-underline font-bold flex justify-between items-center rounded">
                            <span>Портфолио</span>
                        </router-link>
                    </div>
                </div>

                <div class="relative">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
                        <img class="w-full home-services__category-image" src="../assets/img/services_cat-3.jpg">
                        <div class="px-6 pt-6 pb-12">
                            <div class="font-bold text-xl mb-2 text-mainColor text-center">Проектирование</div>
                            <p class="text-gray-700 text-base mt-6 pb-2">>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>

                    </div>
                    <div class="w-full flex justify-center home-gallery-link">
                        <router-link to="/gallery" class="px-8 py-4 bg-accentColor text-white no-underline font-bold flex justify-between rounded items-center">
                            <span>Портфолио</span>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Services -->
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

<style scoped>
    .home-services {
        background: url("../assets/img/home-services_bg.png");
        background-size: cover;
    }

    .home-gallery-link {
        position: absolute;
        bottom: -6%;
    }

    .home-services__category-image {
        max-height: 250px;
    }
</style>
