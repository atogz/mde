<template>
    <div class="w-full mt-6 pl-6 pr-6">
        <h3 class="text-2xl">Контакты</h3>
        <div class="mt-4 flex w-full flex-col">
            <div class="w-full flex mt-8">
                <div class="w-full pb-12 flex flex-col">
                    <a href="tel:+7957488531">
                        <font-awesome-icon :icon="['fa', 'phone-alt']" class="text-accentColor ml-2 text-xl"/>
                        <span class="text-2xl ml-2 text-mainColor font-bold">8(495)748-8531</span>
                    </a>
                    <a href="mailto:md.engineering@mail.ru">
                        <font-awesome-icon :icon="['fa', 'envelope']" class="text-accentColor ml-2 text-xl"/>
                        <span class="text-2xl ml-2 text-mainColor font-bold">md.engineering@mail.ru</span>
                    </a>
                </div>
            </div>
            <div class="w-full">
                <ContactForm/>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactForm from "../components/ContactForm";
  export default {
    name: "Contacts",
    components: {
      ContactForm
    },
    mounted() {
      window.scrollTo(0,0);
    }
  }
</script>

<style scoped>

</style>
