<script setup>
import Child from "./Child.vue";
import GrandChild from "./GrandChild.vue";

// setup은 컴포지션 API
</script>

<template>
  <div style="border: 2px solid red">
    <h1>나는 부모</h1>
    <Child />
    <Child />
    <Child />
  </div>
</template>

<style scoped></style>
