<script setup>
import Child3 from "./Child3.vue";
import { ref } from "vue";

// slotName의 기본값이 header이기 때문에 초기 화면에서 header출력
const slotName = ref("default");

const changeFooter = () => {
  slotName.value = "footer";
};
const changeDefault = () => {
  slotName.value = "default";
};
const changeHeader = () => {
  slotName.value = "header";
};
</script>

<template>
  <!-- 
  dynamic slot
  - 부모가 자식 컴포넌트의 슬롯에 동적으로 콘텐츠 할당 가능
  (슬롯 이름을 동적으로 변경 가능. 바꿔줄 수 있다는 것을 의미)
  -->
  <div style="border: 1px solid blue">
    <Child3 :slot-name="slotName">
      <template #header>
        <p>헤더입니다</p>
      </template>
      <template #default>
        <p>기본슬롯입니다.</p>
      </template>
      <template #footer>
        <p>푸터입니다.</p>
      </template>
    </Child3>
  </div>
  <button @click="changeFooter">슬롯 이름 footer로 변경</button>
  <button @click="changeDefault">슬롯 이름 default로 변경</button>
  <button @click="changeHeader">슬롯 이름 header로 변경</button>
</template>

<style scoped></style>
