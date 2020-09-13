<template>
    <main class="slider w-full bg-gray-300 relative" v-on:mouseover="slideIsHovered = true" v-on:mouseleave="slideIsHovered = false">
        <div class="w-full">
            <transition-group name="fade">
                <div class="w-full animated slider__item slider__item--1 flex items-center justify-center" v-if="activeSlide === 1" :key="1">
                        <div class="w-2/5 bg-opacity-75 bg-opacityColorBlack p-6 pb-8 text-accentColor text-center">
                            <h3 class="text-4xl w-full font-bold">Перинатальный центр</h3>
                            <p class="mt-6 text-white ">
                                Общая площадь: 27 600 м²<br/>
                                Заказчик: ООО РТ "Соцстрой", 2017г.<br/>
                                г. Ульяновск
                            </p>
                            <router-link :to="{ name: 'Project',  params: { id: 1 } }">
                                <button class="mt-5 p-3 w-1/3 bg-white text-mainColor rounded-full font-bold">Подробнее</button>
                            </router-link>
                        </div>
                </div>
                <div class="w-full animated slider__item slider__item--2 flex items-center justify-center" v-if="activeSlide === 2" :key="2">
                    <div class="w-2/5 bg-opacity-75 bg-opacityColorBlack p-6 pb-8 text-accentColor text-center">
                        <h3 class="text-4xl w-full font-bold">Проект 2</h3>
                        <p class="mt-6 text-white ">Описание проекта 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam ex mauris, imperdiet ac nisl quis, aliquam lacinia tortor.
                        </p>
                        <router-link :to="{ name: 'Project',  params: { id: 2 } }">
                            <button class="mt-5 p-3 w-1/3 bg-white text-mainColor rounded-full font-bold">Подробнее</button>
                        </router-link>
                    </div>
                </div>
                <div class="w-full animated slider__item slider__item--3 flex items-center justify-center" v-if="activeSlide === 3" :key="3">
                    <div class="w-2/5 bg-opacity-75 bg-opacityColorBlack p-6 pb-8 text-accentColor text-center">
                        <h3 class="text-4xl w-full font-bold">Проект 3</h3>
                        <p class="mt-6 text-white ">Описание проекта 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam ex mauris, imperdiet ac nisl quis, aliquam lacinia tortor.
                        </p>
                        <router-link :to="{ name: 'Project',  params: { id: 3 }}">
                            <button class="mt-5 p-3 w-1/3 bg-white text-mainColor rounded-full font-bold">Подробнее</button>
                        </router-link>
                    </div>
                </div>
                <div class="w-full animated slider__item slider__item--4 flex items-center justify-center" v-if="activeSlide === 4" :key="4">
                    <div class="w-2/5 bg-opacity-75 bg-opacityColorBlack p-6 pb-8 text-accentColor text-center">
                        <h3 class="text-4xl w-full font-bold">Проект 4</h3>
                        <p class="mt-6 text-white ">Описание проекта 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam ex mauris, imperdiet ac nisl quis, aliquam lacinia tortor.
                        </p>
                        <router-link :to="{ name: 'Project',  params: { id: 4 }}">
                            <button class="mt-5 p-3 w-1/3 bg-white text-mainColor rounded-full font-bold">Подробнее</button>
                        </router-link>

                    </div>
                </div>
            </transition-group>

            <div class="w-full flex justify-between slider__nav-buttons-container pl-6 pr-6 xxl:pl-32 xxl:pr-32">
                <div class="previous px-8 py-6 rounded-full bg-accentColor cursor-pointer" @click="previous()">
                    <font-awesome-icon :icon="['fa', 'angle-left']" class="text-white text-xl"/>
                </div>
                <div class="previous px-8 py-6 rounded-full bg-accentColor cursor-pointer" @click="next()">
                    <font-awesome-icon :icon="['fa', 'angle-right']" class="text-white text-xl"/>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        activeSlide: 1,
        slideIsHovered: false,
      }
    },
    methods: {
      next() {
        this.activeSlide++;
        if(this.activeSlide > 4) this.activeSlide = 1;
      },
      previous() {
        if(this.activeSlide === 1 ) {
          this.activeSlide = 4;
        } else {
          this.activeSlide--;
        }
      }
    },
    created() {
      setInterval( () => {
        if(!this.slideIsHovered) this.next();
      }, 7000);
      document.onkeydown = (e) => {
        switch (e.keyCode) {
          case 37:
            this.previous();
            break;
          case 39:
            this.next();
            break;
        }
      };

    }
  }
</script>

<style scoped>
    .slider {
        height: 570px;
    }
.slider__nav-buttons-container {
    position: absolute;
    top: 45%;
    left: 0;
}

    .slider__item {
        height: 570px;
    }


    .slider__item--1 {
        background-image: url("../assets/img/projects/p_1-1.jpg");
        background-size: cover;
    }
    .slider__item--2 {
        background-image: url("../assets/img/slider_2.jpg");
        background-size: cover;
    }
    .slider__item--3 {
        background-image: url("../assets/img/slider_3.jpg");
        background-size: cover;
    }
    .slider__item--4 {
        background-image: url("../assets/img/slider_4.jpg");
        background-size: cover;
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
