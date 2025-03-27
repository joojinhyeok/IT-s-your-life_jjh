<script setup>
import { ref } from "vue";
const emit = defineEmits([""]);

const childName = ref("");
</script>

<template>
  <div>
    이름: <input type="text" v-model="childName" />
    <!-- 이벤트 발신 하면 부모 컴포넌트가 재렌더링-->
    <!-- 'nameChange'는 부모 컴포넌트의 이벤트를 알아차리는 역할을 하기 때문에
    부모와 이벤트 이름이 달라서는 안됨 
    -->
    <button @click="emit('nameChange', { childName })">이벤트 발신</button>
  </div>
</template>

<style scoped></style>
