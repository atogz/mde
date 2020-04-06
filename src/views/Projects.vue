<template>
    <div class="w-full mt-6 pl-6 pr-6">
        <h3>Страница Проекты</h3>
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
    }
  }
</script>

<style scoped>

</style>
