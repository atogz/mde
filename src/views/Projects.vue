<template>
    <div class="w-full mt-6">
        <div class="w-full mt-12">
            <ProjectsGrid :amount="9"/>
        </div>
    </div>
</template>

<script>
    import ProjectsGrid from "../components/ProjectsGrid.vue";
  export default {
    name: "Projects",
    components: {
      ProjectsGrid
    },
    data() {
      return {

      }
    },
    mounted() {
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>

</style>
