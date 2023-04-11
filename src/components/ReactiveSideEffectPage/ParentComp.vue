<template>
  <div :style="{ border: '2px solid blue' }">
    <h1 :style="{ fontSize: '24px' }">Parent</h1>
    <pre>{{ widgetReactive }}</pre>
    <button :style="{ backgroundColor: 'gray' }" @click="handleChange">CHANGE</button>
  </div>
  <child-comp :definition="definition" />
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import ChildComp from './ChildComp.vue'

export type WidgetDefinition = {
  type: 'text' | 'pie' | 'timeseries'
  styles: {
    color: string
  }
}

export type Widget = {
  category: 'annotation' | 'chart'
  definition: WidgetDefinition
}
const widget: Widget = {
  category: 'chart',
  definition: { type: 'pie', styles: { color: 'blue' } }
}

const widgetReactive = reactive<Widget>(widget)
// const widgetReactive2 = reactive<Widget>(widget);

const definition = widgetReactive.definition
// const definition = reactive(widgetReactive.definition)

const handleChange = () => {
  widgetReactive.category = 'annotation'
  definition.type = 'text'
}

watch(widgetReactive, () => {
  console.log(widgetReactive)
})
</script>

<style scoped>
.wrapper {
  border: solid 2px gray;
}
</style>
