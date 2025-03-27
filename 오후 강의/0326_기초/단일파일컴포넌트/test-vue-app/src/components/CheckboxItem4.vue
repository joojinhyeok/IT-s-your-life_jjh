<script setup>
// defineProps
// 부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수 -> 부모에서 바인딩(:name="idol.name")형식으로 보내준 name 데이터를 받아옴
defineProps({
  idol: {
    type: Object,
    required: true,
    // validator는 vue에서 제공하는 공식 기능
    // 부모가 props를 전달할때마다 함수가 호출됨
    validator: (value) => {
      return (
        (typeof value.id === "number" || typeof value.id === "string") &&
        typeof value.name === "string" &&
        typeof value.checked === "boolean"
      );
    },
  },
});
</script>

<template>
  <div>
    <li><input type="checkbox" :idol="idol.checked" />{{ idol.name }}</li>
  </div>
</template>

<style scoped></style>
