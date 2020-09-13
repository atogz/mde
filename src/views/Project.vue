<template>
    <main class="pl-6 pb-6 pr-6 xxl:pl-32 xxl:pr-32">
        <div class="w-full mt-6">
            <h3 class="text-3xl pb-6">{{ project.name }}</h3>
            <div class="text-xl" v-html="project.description"></div>
            <img class="mt-8" :src="project.mainImage" />
        </div>
        <div class="w-full mt-3 grid grid-cols-3 gap-3">
            <div v-for="(img,index) in project.images" :key="index">
                <img v-img:project.id :src="img">
            </div>

        </div>
    </main>

</template>

<script>
  export default {
    name: "Project",
    data() {
      return {
        project: {},
      }
    },
    mounted() {
        this.project = this.$store.getters.getProjectData(this.$route.params.id);
    }
  }
</script>

<style scoped>

</style>
