import { ref, computed } from "vue";
import { defineStore } from "pinia";

/* USAGE 
import { storeToRefs } from 'pinia'
import useCounterStore from '@/stores/couterStore'

const counterStore = useCounterStore()
const { increment } = storeToRefs(counterStore)

counterStore.increment()

counterStore.$patch({
  name: 'Jeff',
  age: counterStore.age + 1,
})

counterStore.$reset()
*/

const useCounterStore = defineStore("counterStore", () => {
  // state
  const count = ref(0);

  // getters | queries
  const doubledCount = computed(() => count.value * 2);

  // actions |  mutations
  function $reset() {
    count.value = 0;
  }
  function increment() {
    count.value++;
  }

  return { count, doubledCount, increment };
});

export default useCounterStore