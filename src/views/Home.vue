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
            <div class="w-full md:w-1/2">
                <h3 class="text-3xl text-mainColor">Лидер на мировом рынке<span class="text-accentColor"> с 1995 года</span></h3>
                <p class="mt-6">Общество с ограниченной ответственностью «МД Инжениринг» более десяти лет представлено на строительном рынке и имеет многолетний опыт работы в сфере строительства и проектирования.Общество с ограниченной ответственностью «МД Инжениринг» более десяти лет представлено на строительном рынке и имеет многолетний опыт работы в сфере строительства и проектирования.</p>
                <p class="mt-3">
                    Команда профессиональных строителей и высоквалифицированных специалистов из года в год успешно реализует проекты любой сложности. 000 «МД Инжениринг» гарантирует качество выполненных работ с учетом требований законодательной и нормативной документации посредством реализации следующих намерений: <br/>
                    - управление качеством на всех стадиях жизненного цикла строительных процессов;<br/>
                    - внедрения прогрессивных технологий в производстве;<br/>
                    - формирований эффективных и взаимовыгодных отношений с заказчиками, с субподрядными организациями.<br/>
                    - постоянного повышения квалификации сотрудников посредством обучения.

                </p>
                <div class="w-full flex items-center mt-12 xxl:w-2/3">
                    <router-link to="/about" class="p-3 w-full md:w-1/3 bg-mainColor text-white no-underline text-center rounded-full font-bold">
                        О Компании
                    </router-link>
                    <router-link to="/projects" class="p-3 ml-2 w-full md:w-1/3 bg-accentColor text-white no-underline text-center rounded-full font-bold">
                        Проекты
                    </router-link>
                </div>
            </div>
            <div class="w-full mt-12 md:mt-0 md:w-1/2 md:pl-12">
                <div class="w-full flex">
                    <div class="w-full md:w-3/5 mr-2">
                        <img class="xxl:hidden welcome-image" src="../assets/img/welcome_lg.jpg" />
                        <img class="hidden xxl:block" src="../assets/img/welcome_lg_desktop.jpg">
                    </div>
                    <div class="w-full md:w-2/5 flex">
                        <img class="xxl:hidden welcome-image" src="../assets/img/welcome_sm.jpg" />
                        <img class="pt-12 hidden xxl:block" src="../assets/img/welcome_sm_desktop.jpg" />
                    </div>
                </div>

            </div>
        </div>
        <!-- End Welcome -->

        <!-- Partners -->
<!--        <div class="w-full pl-6 pr-6 pt-12 pb-12 flex flex-wrap bg-gray-200 flex xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">-->
<!--            <div class="w-1/2 m-auto text-center text-mainColor">-->
<!--               <h3 class="text-3xl font-bold">Наши партнеры</h3>-->
<!--                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>-->
<!--            </div>-->
<!--            <div class="w-full pb-12 pt-12 pl-12 pr-12 flex justify-between items-center">-->
<!--                <router-link to="/partners">-->
<!--                    <img src="../assets/img/client_logo_1.png" />-->
<!--                </router-link>-->
<!--                <router-link to="/partners">-->
<!--                    <img src="../assets/img/client_logo_2.png" />-->
<!--                </router-link>-->
<!--                <router-link to="/partners">-->
<!--                    <img src="../assets/img/client_logo_3.png" />-->
<!--                </router-link>-->
<!--                <router-link to="/partners">-->
<!--                    <img src="../assets/img/client_logo_4.png" />-->
<!--                </router-link>-->
<!--                <router-link to="/partners">-->
<!--                    <img src="../assets/img/client_logo_5.png" />-->
<!--                </router-link>-->
<!--            </div>-->
<!--        </div>-->
        <!-- End Partners -->

        <!-- Services -->
        <div class="home-services w-full pl-6 pr-6 pt-12 pb-16 flex flex-wrap bg-gray-200 flex xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">
            <div class="w-full m-auto text-center text-mainColor md:w-1/2">
                <h3 class="text-3xl font-bold">Виды работ</h3>
                <p class="mt-4">Мы проводим полный цикл работы и всегда внимательно относимся к пожеланиям заказчика.</p>
            </div>

            <div class="w-full mt-8 flex flex-wrap justify-between xxl:w-4/5 xxl:mx-auto">
                <div class="relative">
                    <div class="max-w-sm overflow-hidden shadow-lg bg-white relative">
                        <img class="w-full home-services__category-image" src="../assets/img/services_cat-1.jpg">
                        <div class="px-6 pt-6 pb-12">
                            <div class="font-bold text-xl mb-2 text-mainColor text-center">Строительные работы</div>
                            <p class="text-gray-700 text-base mt-6 pb-2">
                                Строительные работы – одна из самых востребованных услуг, которые предлагает своим клиентам компания «MD Engineering», в то же время, это самый ответственный этап реализации проекта.
                            </p>
                        </div>

                    </div>
                    <div class="w-full flex justify-center home-gallery-link">
                        <router-link to="/projects" class="px-8 py-4  bg-mainColor text-white no-underline font-bold flex justify-between items-center">
                            <span>Проекты</span>
                            <font-awesome-icon :icon="['fa', 'angle-right']" class="text-white ml-2 text-xl"/>
                        </router-link>
                    </div>
                </div>

                <div class="relative mt-16 md:mt-0">
                    <div class="max-w-sm overflow-hidden shadow-lg bg-white relative">
                        <img class="w-full home-services__category-image" src="../assets/img/services_cat-3.jpg">
                        <div class="px-6 pt-6 pb-12">
                            <div class="font-bold text-xl mb-2 text-mainColor text-center">Проектирование</div>
                            <p class="text-gray-700 text-base mt-6 pb-2">
                                Основные принципы работы нашего проектного отдела — это индивидуальность каждого проекта и комплексный, аналитический подход ко всем этапам проектирования.
                            </p>
                        </div>

                    </div>
                    <div class="w-full flex justify-center home-gallery-link">
                        <router-link to="/projects" class="px-8 py-4 bg-accentColor text-white no-underline font-bold flex justify-between items-center">
                            <span>Проекты</span>
                        </router-link>
                    </div>
                </div>

                <div class="relative mt-16 md:mt-0">
                    <div class="max-w-sm overflow-hidden shadow-lg bg-white relative">
                        <img class="w-full home-services__category-image" src="../assets/img/services_cat-2.jpg">
                        <div class="px-6 pt-6 pb-12">
                            <div class="font-bold text-xl mb-2 text-mainColor text-center">Интерьеры и меблировка</div>
                            <p class="text-gray-700 text-base mt-6 pb-2">
                                Предлагаем комплексный спектр услуг: разработаем дизайн-проект, подберем мебель и отделочные материалы, выполним строительные работы, декорируем готовый интерьер.
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex justify-center home-gallery-link">
                        <router-link to="/projects" class="px-8 py-4 bg-accentColor text-white no-underline font-bold flex justify-between items-center">
                            <span>Проекты</span>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Services -->

        <!-- How We Work -->
        <div class="w-full pl-6 pr-6 pt-12 pb-12 flex flex-wrap flex xxl:pl-32 xxl:pr-32 xxl:pb-16 xxl:pt-16">
            <div class="w-full m-auto text-center text-mainColor md:w-1/2">
                <h3 class="text-3xl font-bold">Как мы работаем</h3>
                <p class="mt-4">В работе мы придерживаемся следующих принципов:</p>
            </div>
            <div class="w-full mt-8 md:flex md:justify-between">
                <div class="w-full border-2 border-gray-200  md:border-r-0 flex flex-wrap relative md:w-1/4">
                    <div class="w-full text-6xl text-gray-400 font-bold opacity-25 how-we-work__category-counter xxl:ml-8">01</div>
                    <div class="w-full flex pl-3 pr-3 flex-col md:flex-row">
                        <div class="w-full mt-8 md:w-1/4">
                            <img class="ml-4 mt-1" src="../assets/img/hww_icon-1.png"/>
                        </div>
                        <div class="w-full mt-8 font-bold md:w-3/4">
                            <h3 class="text-mainColor">Инновационный подход</h3>
                            <p class="text-gray-500 font-normal mt-4 pb-6">Мы используем новейшие технологии и достижения при исполнении всех наших проектов.</p>
                        </div>
                    </div>
                </div>

                <div class="w-full border-2 mt-4 md:mt-0 md:border-r-0 border-gray-200 flex flex-wrap relative md:w-1/4">
                    <div class="w-full text-6xl text-gray-400 font-bold opacity-25 how-we-work__category-counter xxl:ml-8">02</div>
                    <div class="w-full flex pl-3 pr-3 flex-col md:flex-row">
                        <div class="w-full mt-8 md:w-1/4">
                            <img class="ml-4 mt-1" src="../assets/img/hww_icon-2.png"/>
                        </div>
                        <div class="w-full mt-8 font-bold md:w-3/4">
                            <h3 class="text-mainColor">Грамотное проектирование</h3>
                            <p class="text-gray-500 font-normal mt-4 pb-6">Наши специалисты уделяют большое внимание этапу проектирования и имеют большую экспертизу.</p>
                        </div>
                    </div>
                </div>

                <div class="w-full border-2 border-gray-200 mt-4 md:mt-0 md:border-r-0 flex flex-wrap relative md:w-1/4">
                    <div class="w-full text-6xl text-gray-400 font-bold opacity-25 how-we-work__category-counter xxl:ml-8">03</div>
                    <div class="w-full flex pl-3 pr-3 flex-col md:flex-row">
                        <div class="w-full mt-8 md:w-1/4">
                            <img class="ml-4 mt-1" src="../assets/img/hww_icon-3.png"/>
                        </div>
                        <div class="w-full mt-8 font-bold md:w-3/4">
                            <h3 class="text-mainColor">Квалифицированный персонал</h3>
                            <p class="text-gray-500 font-normal mt-4 pb-6">Мы используем только лучших специалистов при реализации всех наших проектов.</p>
                        </div>
                    </div>
                </div>

                <div class="w-full border-2 border-gray-200 mt-4 md:mt-0 md:border-r-0 flex flex-wrap relative md:w-1/4">
                    <div class="w-full text-6xl text-gray-400 font-bold opacity-25 how-we-work__category-counter xxl:ml-8">04</div>
                    <div class="w-full flex pl-3 pr-3 flex-col md:flex-row">
                        <div class="w-full mt-8 md:w-1/4">
                            <img class="ml-4 mt-1" src="../assets/img/hww_icon-4.png"/>
                        </div>
                        <div class="w-full mt-8 font-bold md:w-3/4">
                            <h3 class="text-mainColor">Надежность и ответственность</h3>
                            <p class="text-gray-500 font-normal mt-4 pb-6">Для нас "срок сдачи" - не просто слова, мы уважаем время наших заказчиков!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End How We Work -->

        <!-- Featured Project -->
        <div class="w-full bg-gray-200 flex flex-wrap md:flex-no-wrap">
            <div class="w-full md:w-3/5 flex justify-center">
                <img class="featured-project__image" src="../assets/img/home_featured.jpg">
            </div>
            <div class="w-full p-8 md:p-0 md:w-2/5 flex flex-col items-center justify-center">
                <h4 class="text-gray-600">Наш проект</h4>
                <p class="text-center text-mainColor text-3xl md:text-left">
                    Пристройка к офисному зданию "Таиф"
                </p>
                <p class="text-gray-500 font-normal mt-4 pl-6 pr-6 text-center">Общая площадь: 13 400 м²<br/> Заказчик: ООО "Таиф", 2009г.</p>
                <router-link :to="{ name: 'Project',  params: { id: 6 } }" class="px-8 py-4 mt-6 bg-gray-200 border-2 border-accentColor text-accentColor no-underline font-bold flex justify-between items-center">
                    <span>Подробнее</span>
                    <font-awesome-icon :icon="['fa', 'angle-right']" class="text-accentColor ml-2 text-xl"/>
                </router-link>
            </div>
        </div>
        <!-- End Featured Project -->

        <!-- Projects Grid -->
        <div class="w-1/2 m-auto text-center text-mainColor mt-12">
            <h3 class="text-3xl font-bold">Последние проекты</h3>
            <p class="mt-4">Рады представить наши проекты в самых различных областях</p>
        </div>
        <ProjectsGrid :amount="6" class="mt-12 pb-12"/>
        <!-- End Projects Grid -->
        <!-- Contact Form -->
        <ContactForm />
        <!-- End Contact Form -->
    </main>
</template>

<script>
import Slider from "@/components/Slider.vue";
import ProjectsGrid from "@/components/ProjectsGrid.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: 'Home',
  components: {
    Slider,
    ProjectsGrid,
    ContactForm
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

    .how-we-work__category-counter {
        position: absolute;
        top: -10%;
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 660px) {
        .welcome-image {
            max-height: 215px !important;
        }
        .featured-project__image {
            max-height: 370px !important;
        }
    }
</style>
