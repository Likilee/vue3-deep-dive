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
  <div>
    <div>ReactiveFlags.IsReactive</div>
    <div>{{ child['__v_isReactive'] }}</div>
    <div>ReactiveFlags.IsReadonly</div>
    <div>{{ child['__v_isReadonly'] }}</div>
    <div>ReactiveFlags.IsShallow</div>
    <div>{{ child['__v_isShallow'] }}</div>
    <div>ReactiveFlags.IsRaw</div>
    <div>{{ child['__v_raw'] }}</div>
  </div>
  <button class="w-32 border rounded-md bg-slate-200" @click="addAge">Getting old...</button>
  <button class="w-32 border rounded-md bg-slate-200" @click="addFriendAge">Friend aging</button>
</template>

<script setup lang="ts">
import { useReactiveChild } from '@/components/ReactivePage/useReactiveChild'

const child = useReactiveChild()

const addAge = () => {
  child.age += 10
}
const addFriendAge = () => {
  child.friends[0].age += 10
}
</script>
