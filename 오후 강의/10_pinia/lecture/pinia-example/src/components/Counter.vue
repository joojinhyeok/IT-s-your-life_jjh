<script setup>
import { useCounterStore } from "@/stores/counter";

// 구조분해할당 -> template에서 작성할 코드가 줄어듦
// const { count, increase, reset } = useCounterStore();
const { increase, reset } = useCounterStore();
const counter = useCounterStore();
</script>

<template>
  <div>
    <h3>{{ counter.count }}</h3>
    <button @click="increase">+ 증가</button>
    <button @click="reset">0 초기화</button>
  </div>
</template>
