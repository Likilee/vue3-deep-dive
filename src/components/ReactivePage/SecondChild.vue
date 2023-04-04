<template>
 <div>
    <span>Jiwlee: </span>
    <span>{{ child.name }}</span>
    <span>{{ child.age }}</span>
  </div>
  <div>
    <span>Jiwlee: </span>
    <span>{{ child.friends[0].name }}</span>
    <span>{{ child.friends[0].age }}</span>
  </div>
</template>

<script setup lang="ts">
import { useReactiveChild } from '@/components/ReactivePage/useReactiveChild'

const child = useReactiveChild()
</script>
