<template>
  <div class="flex flex-col justify-start gap-4">
    <p class="border-t-2  border-slate-700 text-2xl">Number Test</p>
    <div class="flex flex-row gap-4">
      <ref-child-number title="Number Ref" :value="numberRef" />
      <button class="w-32 border rounded-md bg-slate-200" @click="handleIncrease">+ IN PARENT</button>
    </div>

    <div class="flex flex-row gap-4">
      <ref-child-number-direct title="Number Ref Direct" :value="numberRef" />
      <button class="w-32 border rounded-md bg-slate-200" @click="handleIncrease">+ IN PARENT</button>
    </div>

    <div class="flex flex-row gap-4">
      <ref-child-number-to-ref title="Number Ref ToRef" :value="numberRef" />
      <button class="w-32 border rounded-md bg-slate-200" @click="handleIncrease">+ IN PARENT</button>
    </div>


    <p class="border-t-2  border-slate-700 text-2xl">String Test</p>
    <div class="flex flex-row gap-4">
      <ref-child-string title="String Ref" :value="stringRef" />
      <button class="w-32 border rounded-md bg-slate-200" @click="handleAppend">+o IN PARENT</button>
    </div>
    <div class="flex flex-row gap-4">
      <ref-child-string-direct title="String Ref" :value="stringRef" />
      <button class="w-32 border rounded-md bg-slate-200" @click="handleAppend">+o IN PARENT</button>
    </div>

    <p class="border-t-2  border-slate-700 text-2xl">Object Test</p>
    <ref-child-object title="Object Ref" :value="objectRef" />

    <p class="border-t-2  border-slate-700 text-2xl">Nested Object Test</p>
    <ref-child-nested-object title="Nested Object Ref" :value="nestedObject" />
  </div>
</template>

<script setup lang="ts">
import RefChildNestedObject from '@/components/RefPage/RefChildNestedObject.vue';
import RefChildNumber from '@/components/RefPage/RefChildNumber.vue';
import RefChildNumberDirect from '@/components/RefPage/RefChildNumberDirect.vue';
import RefChildNumberToRef from '@/components/RefPage/RefChildNumberToRef.vue';
import RefChildObject from '@/components/RefPage/RefChildObject.vue';
import RefChildString from '@/components/RefPage/RefChildString.vue';
import RefChildStringDirect from '@/components/RefPage/RefChildStringDirect.vue';
import { ref } from 'vue';

export interface Person {
  name: string;
  age: number
}

export interface Team {
  name: string;
  members: Person[]
}

const numberRef = ref<number>(1);
const stringRef = ref<string>('Hello');
const objectRef = ref<Person>({ name: 'kilee', age: 5 });
const nestedObject = ref<Team>({ name: 'Avengers', members: [{ name: 'kilee', age: 5 }, { name: 'gilee', age: 6 }] })

const handleIncrease = () => {
  numberRef.value += 1;
}

const handleAppend = () => {
  stringRef.value += 'o';
}
</script>

<style scoped lang="scss"></style>