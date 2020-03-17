<template>
  <header class="w-full">
      <div class="container mx-auto p-6 topbar bg-accentColor flex items-center">
          <font-awesome-icon :icon="['fa', 'map-marker-alt']" class="text-xl text-mainColor" />
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
    .topbar {
        height: 50px;
        color: #f5f5f5;
    }
</style>
