<script setup>
// defineProps
// 부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수 -> 부모에서 바인딩(:name="idol.name")형식으로 보내준 name 데이터를 받아옴
defineProps({
  id: [Number, String], // 문자열과 숫자형만 가능
  name: String, // 문자열만 가능
  checked: {
    type: Boolean, // 불리언타입만 가능
    default: false,
    required: true, // 필수조건으로 true면 무조건 있어야 하고, false면 없어도 됨
  },
});
</script>

<template>
  <div>
    <li><input type="checkbox" :checked="checked" />{{ name }}</li>
  </div>
</template>

<style scoped></style>
