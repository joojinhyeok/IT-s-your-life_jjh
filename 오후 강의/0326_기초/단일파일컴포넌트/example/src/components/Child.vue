<script setup>
import GrandChild from "./GrandChild.vue";

// setup은 컴포지션 API
</script>

<template>
  <div style="border: 2px solid blue">
    <h1>나는 자식</h1>
    <GrandChild />
    <GrandChild />
    <GrandChild />
  </div>
</template>

<style scoped></style>
