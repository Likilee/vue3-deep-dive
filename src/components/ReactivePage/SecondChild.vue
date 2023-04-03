<template>
  <div>
    <span>{{ child.name }}</span>
    <span>{{ child.age }}</span>
  </div>
</template>

<script setup lang="ts">
import { useReactiveChild } from "@/components/ReactivePage/useReactiveChild";

const child = useReactiveChild();
</script>