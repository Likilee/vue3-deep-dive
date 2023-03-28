<template>
  <header class="w-full flex flex-row justify-between text-xl">
  <RouterLink to="/ref">
    <div class="border p-4 rounded-md">Ref</div>
  </RouterLink>
    <div>Reactivity</div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
