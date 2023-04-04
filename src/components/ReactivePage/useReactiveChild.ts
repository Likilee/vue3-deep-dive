import { reactive } from 'vue';

type Person = {
  name: string;
  age:number;
  friends: Person[]
}

const kilee: Person = {
  name: 'kilee',
  age: 33,
  friends: [],
}

const mykang: Person = {
  name: 'mykang',
  age: 31,
  friends: [kilee],
}

const jiwlee: Person = {
  name: 'jiwlee',
  age: 27,
  friends: [kilee, mykang]
}

export const useReactiveChild = () => {
  return reactive(jiwlee);
}