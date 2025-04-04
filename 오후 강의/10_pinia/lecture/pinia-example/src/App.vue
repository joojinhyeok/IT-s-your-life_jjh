<script setup>
import Counter from "./components/Counter.vue";
import { useCounterStore } from "./stores/counter";

import Like from "./components/Like.vue";
import { likeStore } from "./stores/like";

const counter = likeStore();
</script>

<template>
  <div>
    <h1>Pinia 상태관리 예제</h1>
    <hr />
    <h2>좋아요 갯수:{{ like.like }}</h2>
    <h2>좋아요 갯수 5배:{{ like.fivetime }}</h2>
    <hr />
    <h2>App에서 보는 Counter: {{ counter.count }}</h2>
    <Counter />
  </div>
</template>

<style scoped></style>
