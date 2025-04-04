import { ref, computed } from "vue";
import { defineStore } from "pinia";

// counter라는 스토어 정의
export const useCounterStore = defineStore("counter", () => {
  // 상태(state)
  const count = ref(0);
  // getters 정의
  const doubleCount = computed(() => count.value * 2);
  // actions 정의
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
