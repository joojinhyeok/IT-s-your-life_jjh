import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Pinia Store 정의
// defineStore: 스토어 생성하는 함수
// 첫번째이니자가 스토어의 고유 ID가 된다.

// 다른곳에서도 사용할 것이기 때문에 export 사용
export const useCounterStore = defineStore("counter", () => {
  // state
  const count = ref(0); // 카운터 값을 저장하는 상태 변수

  // getter

  // action
  //   1씩 증가시키는 메서드
  const increase = () => {
    count.value++;
  };
  //   0으로 초기화 하는 메서드
  const reset = () => {
    count.value = 0;
  };
  // 객체 형태로 전달
  return { count, increase, reset };
});
