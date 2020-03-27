<template>
    <div class="w-full mt-6 pl-6 pr-6">
        <h3>Проект №{{ projectId }}</h3>
    </div>
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
