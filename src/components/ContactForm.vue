<template>
    <div class="w-full flex">
        <div class="w-3/5 bg-gray-200 pl-6 pr-6 pb-8 xxl:pl-32 xxl:pr-32">
            <div class="mt-6 text-mainColor w-full">
                <h3 class="text-3xl font-bold">Получить консультацию</h3>
                <p class="mt-4">Vivamus ac ultrices diam, vitae accumsan tellus. Integer
                    sollicitudin vulputate lacus, congue vulputate nisl eleifend in.</p>
                <form class="w-full flex mt-6 flex-wrap">
                    <div class="w-full flex">
                        <div class="flex flex-col w-1/2">
                            <label class="text-gray-600" for="name">Ваше имя</label>
                            <input type="text" name="name" id="name" class="p-2"/>
                        </div>
                        <div class="flex flex-col w-1/2 ml-4">
                            <label class="text-gray-600" for="phone">Ваш телефон</label>
                            <input type="tel" name="phone" id="phone" class="p-2"/>
                        </div>
                    </div>
                    <div class="flex flex-col w-full mt-4">
                        <label class="text-gray-600" for="message">Ваше сообщение</label>
                        <textarea name="message" id="message" cols="50" rows="5">
                        </textarea>
                    </div>
                </form>
                <div class="w-full flex justify-center mt-6">
                    <button class="p-3 w-1/3 border-2 border-mainColor text-mainColor text-center rounded-full font-bold" @click="sendForm()">Отправить</button>
                </div>
            </div>
        </div>
        <div class="w-2/5 flex flex-col pt-16">
            <div class="w-4/5 flex bg-accentColor pl-6 pr-6 pt-12 pb-12 flex xxl:pr-32 xxl:pl-32">
                    <font-awesome-icon :icon="['fa', 'headphones-alt']" class="text-white opacity-50 ml-2 text-6xl"/>
                <div class="flex flex-col ml-5 mt-2">
                    <div class="text-white flex font-bold">Позвоните нам: <a href="tel:+7495111111" class="ml-2"> +7(495)111-11-11</a></div>
                    <p class="text-mainColor font-bold mt-1">Мы работаем с 9-00 до 18-00</p>
                </div>

            </div>
            <div class="w-full mt-2 bg-mainColor flex pl-6 pr-6 pt-12 pb-12 pl-10 pr-10 xxl:pl-32 xxl:pr-32">
                <div class="w-1/2">
                    <div class="flex flex-col text-white">
                        <p class="text-4xl opacity-50">256</p>
                        <p class="font-bold">Довольных <br/> Клиента</p>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="flex flex-col text-white">
                        <p class="text-4xl opacity-50">28</p>
                        <p class="font-bold">Реализованных <br/> Проектов</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ContactForm",
    data() {
      return {

      }
    },
    methods: {
      sendForm() {
        console.log('sent');
      }
    }
  }
</script>

<style scoped>

</style>
