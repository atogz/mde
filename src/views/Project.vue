<template>
    <div class="w-full mt-6"> Проект №{{ projectId }}</div>
</template>

<script>
  export default {
    name: "Project",
    data() {
      return {
        projectId: this.$route.params.id
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
