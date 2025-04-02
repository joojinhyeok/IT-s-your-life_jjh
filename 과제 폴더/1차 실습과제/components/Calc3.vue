<template>
  <div>
    X : <input type="text" v-model.number="state.x" /> <br />
    Y : <input type="text" v-model.number="state.y" /> <br />
    <button @click="calcAdd">계산</button> <br />
    <div>결과 : {{ state.result }}</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
// 객체나 배열에서는 reactive를 사용
// ref는 .value를 써주면 작동 -> 주소값을 가져온다
const state = ref({ x: 10, y: 20, result: 30 });

const calcAdd = () => {
  state.value.result = state.value.x + state.value.y;
};
</script>
