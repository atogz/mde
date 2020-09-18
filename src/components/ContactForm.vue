<template>
    <div class="w-full flex flex-wrap md:flex-no-wrap">
        <div class="w-full bg-gray-200 pl-6 pr-6 pb-8 order-2 md:order-1 md:w-3/5 xxl:pl-32 xxl:pr-32">
            <div class="mt-6 text-mainColor w-full">
                <h3 class="text-3xl font-bold">Получить консультацию</h3>
                <p class="mt-4">Мы всегда внимательно относимся к пожеланиям заказчика и будем рады ответить на все Ваши вопросы</p>
                <form class="w-full flex mt-6 flex-wrap">
                    <div class="w-full flex">
                        <div class="flex flex-col w-1/2">
                            <label class="text-gray-600" for="name">Ваше имя</label>
                            <input type="text" name="name" id="name" class="p-2" v-model="customerName" :class="{'has-error': errors.includes('name')}"/>
                        </div>
                        <div class="flex flex-col w-1/2 ml-4">
                            <label class="text-gray-600" for="phone">Ваш телефон</label>
                            <input type="tel" name="phone" id="phone" class="p-2" v-model="customerPhoneNumber" :class="{'has-error': errors.includes('phone')}"/>
                        </div>
                    </div>
                    <div class="flex flex-col w-full mt-4">
                        <label class="text-gray-600" for="message">Ваше сообщение</label>
                        <textarea name="message" id="message" cols="50" rows="5" v-model="customerMessage" :class="{'has-error': errors.includes('message')}">
                        </textarea>
                    </div>
                    <div v-if="errors.length" class="mt-4 w-full">
                        <div class="text-red-600 text-center">Пожалуйста, исправьте ошибка в форме</div>
                    </div>
                    <div v-if="responseMessage" class="mt-4 w-full">
                        <div class="text-green-600 text-center">{{ responseMessage }}</div>
                    </div>
                    <div v-if="errorMessage" class="mt-4 w-full">
                        <div class="text-red-600 text-center">{{ errorMessage }}</div>
                    </div>
                </form>
                <div class="w-full flex justify-center mt-6">
                    <button class="p-3 w-2/3 border-2 border-mainColor text-mainColor text-center rounded-full font-bold md:w-1/3" @click="sendForm()">Отправить</button>
                </div>
            </div>
        </div>
        <div class="w-full md:w-2/5 flex order-1 flex-col md:order-2 md:pt-16">
            <div class="w-full md:w-4/5 flex bg-accentColor pl-6 pr-6 pt-12 pb-12 flex xxl:pr-32 xxl:pl-32">
                    <font-awesome-icon :icon="['fa', 'headphones-alt']" class="text-white opacity-50 ml-2 text-6xl"/>
                <div class="flex flex-col ml-12 mt-2 md:ml-5">
                    <div class="text-white flex font-bold flex w-full flex-wrap md:flex-no-wrap"><span class="w-full md:w-1/2">Позвоните нам: </span><a href="tel:+74957488531" class="md:ml-2 w-full md:w-1/2"> 8(495)748-8531</a></div>
                    <p class="text-mainColor font-bold mt-4 md:mt-1">Мы работаем с <span class="block md:inline md:mt-0">9-00 до 18-00</span></p>
                </div>

            </div>
            <div class="w-full bg-mainColor flex pl-6 pr-6 pt-12 pb-12 pl-10 pr-10 md:mt-2 xxl:pl-32 xxl:pr-32">
                <div class="w-1/2">
                    <div class="flex flex-col text-white">
                        <p class="text-4xl opacity-50">256</p>
                        <p class="font-bold">Довольных <br/> Клиента</p>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="flex flex-col text-white">
                        <p class="text-4xl opacity-50">38</p>
                        <p class="font-bold">Реализованных <br/> Проектов</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ContactForm",
    data() {
      return {
        customerName: "",
        customerPhoneNumber: "",
        customerMessage: "",
        errors: [],
        loading: false,
        responseMessage: "",
        errorMessage: ""
      }
    },
    methods: {
      validateForm() {
        this.errors = [];
        if(!this.customerName.length) {
          this.errors.push('name');
        }
        if(!this.customerPhoneNumber.length) {
          this.errors.push('phone');
        }
        if(!this.customerMessage.length) {
          this.errors.push('message');
        }
        if(this.errors.length) return false;
        return true;
      },
      sendForm() {
        if(this.validateForm()) {
          this.loading = true;
          return axios.post('/api/sendForm.php', {
            customerName: this.customerName,
            phoneNumber: this.customerPhoneNumber,
            message: this.customerMessage
          })
            .then( (response) => {
              console.log(response);
              this.responseMessage = response.data.message;
              this.loading = false;
            })
            .catch( (error) => {
              console.log(error);
              this.errorMessage = error;
              this.loading = false;
            })
        }
      }
    }
  }
</script>

<style scoped>
    .has-error {
        border: 2px solid red;
    }
</style>
