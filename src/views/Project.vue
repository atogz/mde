<template>
    <div class="w-full mt-6 pl-6 pr-6">
        <h3 class="text-3xl pb-6">Проект №{{ projectId }}</h3>
        <img :src="project.imageLink" />
    </div>
</template>

<script>
  export default {
    name: "Project",
    props: ['project'],
    data() {
      return {
        projectId: this.$route.params.id
      }
    },
    mounted() {
        console.log('passed ', this.$route.params);
    }
  }
</script>

<style scoped>

</style>
