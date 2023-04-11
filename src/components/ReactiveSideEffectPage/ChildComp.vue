<template>
  <div :style="{ border: '2px solid red' }">
    <h1 :style="{ fontSize: '24px' }">Child</h1>
    <pre>{{ def }}</pre>
    <button :style="{ backgroundColor: 'gray' }" @click="handleChange">CHANGE</button>
  </div>
  <div>is Prop Reactive?</div>
  <div>props['__v_isReadonly']: {{ props['__v_isReadonly'] }}</div>
  <div>props['__v_isShallow']: {{ props['__v_isShallow'] }}</div>
  <div>props['__v_skip']: {{ props['__v_skip'] }}</div>
  <div>props['__v_raw']: {{ props['__v_raw'] }}</div>
</template>

<script setup lang="ts">
import type { WidgetDefinition } from '@/components/ReactiveSideEffectPage/ParentComp.vue'
import { reactive, toRaw } from 'vue'

export interface Props {
  definition: WidgetDefinition
}
const props = defineProps<Props>()

// const def = props.definition;
// const def = reactive(toRaw(props.definition))
// const def = reactive({ ...props.definition })
const def = reactive({ ...props.definition, styles: { ...props.definition.styles } })

const handleChange = () => {
  def.type = 'timeseries'
  def.styles.color = 'red'
}
</script>
