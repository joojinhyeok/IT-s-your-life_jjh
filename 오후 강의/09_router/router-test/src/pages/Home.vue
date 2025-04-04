<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// useRoute: 현재 활성화된 라우트 객체에 접근할 수 있게 해줌
const route = useRoute();

// useRouter: push, replace, go 등의 메서드를 통해 페이지 이동을 제어 가능
const router = useRouter();

// 스택에 저장된 기록이 있기 때문에 뒤로가기 기능이 가능함
const goBack = () => {
  router.go(-1);
};

// route 객체 출력
onMounted(() => {
  console.log(route);
});
</script>

<template>
  <div class="card card -body">
    <h2>Home</h2>
    <p>요청경로: {{ route.fullPath }}</p>
    <button class="btn btn-secondary mt-2" @click="goBack">뒤로가기</button>
  </div>
</template>
