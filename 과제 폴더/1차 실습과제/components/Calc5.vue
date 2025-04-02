<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const result = ref(0);
const x = ref(0);

watch(x, (newX, oldX) => {
  console.log("이전 값:", oldX);
  console.log("새로운 값:", newX);
  result.value = newX;
});
</script>
