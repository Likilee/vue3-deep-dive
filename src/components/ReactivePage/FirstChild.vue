<template>
  <div>
    <span>{{ child.name }}</span>
    <span>{{ child.age }}</span>
  </div>
  <button class="w-32 border rounded-md bg-slate-200" @click="addAge">Getting old...</button>
</template>

<script setup lang="ts">
  import { useReactiveChild } from "@/components/ReactivePage/useReactiveChild";

  const child = useReactiveChild();

  const addAge = () => {
    child.age += 10;
  }
</script>