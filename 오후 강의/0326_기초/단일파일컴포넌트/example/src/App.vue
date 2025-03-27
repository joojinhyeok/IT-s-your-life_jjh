<script setup>
import Parent from "./components/Parent.vue";
</script>

<!-- 
컴포넌트 분리 이유
1. 유지보수
2. 협업
3. 가독성

부모 -> 자식 : props
자식 -> 부모 : emit
-->
<template>
  <h1>나는 루트</h1>
  <Parent />
</template>

<style scoped></style>
