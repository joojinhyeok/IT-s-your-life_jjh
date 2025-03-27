<script setup>
// defineProps
// 부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수 -> 부모에서 바인딩(:name="idol.name")형식으로 보내준 name 데이터를 받아옴
defineProps(["idol"]);
</script>

<template>
  <div>
    <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
  </div>
</template>

<style scoped></style>
