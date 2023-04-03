import { reactive } from 'vue';

const child = {
  name: 'jiwlee',
  age: 27
}

export const useReactiveChild = () => {
  return reactive(child);
}