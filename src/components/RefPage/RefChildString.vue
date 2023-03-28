<template>
  <div class="flex flex-row gap-2">
    <h2 class="font-semibold text-lg">{{ title }}</h2>
    <div>{{ value }}</div>
    <button class="w-32 border rounded-md bg-slate-200" @click="handleAppend">+o IN CHILD</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

export interface Props {
  title: string,
  value: string
}
const props = defineProps<Props>();

const handleAppend = () => {
  props.value += 'o';
}
onMounted(() => {
  console.log(`ON MOUNT: ${props.title}`)
  console.log("value", props.value)
})
</script>

<style scoped lang="scss"></style>