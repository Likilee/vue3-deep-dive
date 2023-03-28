<template>
  <div class="flex flex-row gap-2">
    <h2 class="font-semibold text-lg">{{ title }}</h2>
    <div>{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Team } from '@/components/RefPage/RefParent.vue';
import { onMounted } from 'vue';

export interface Props {
  title: string,
  value: Team
}
const props = defineProps<Props>();

onMounted(() => {
  console.log(`ON MOUNT: ${props.title}`)
  console.log("value", props.value)
})
</script>

<style scoped lang="scss"></style>