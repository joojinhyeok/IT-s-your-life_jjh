<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <!--
:메모: vue-router 핵심 개념 주석 정리 (복붙용)
1. useRoute()
- 현재 라우트 정보(경로, 쿼리, 파라미터 등)에 접근 가능
- 예: route.fullPath → '/about?id=3', route.query.id → '3'
- 예: route.params.id → '/user/:id' 형태일 때 id 값 가져오기
2. useRouter()
- 페이지 이동 제어하는 기능 제공
- 주요 메서드:
  - router.push('/about') → 페이지 이동 (뒤로가기 가능)
  - router.replace('/login') → 현재 페이지를 다른 페이지로 교체 (뒤로가기 불가)
  - router.go(-1) → history 스택 기준으로 뒤로가기
  - router.go(1) → 앞으로 가기
3. route.params
- 동적 라우트에서 사용하는 파라미터
- 예: `/user/:id` → `route.params.id`로 접근
- 주소: `/user/5` → id = 5
4. route.query
- URL 쿼리스트링에서 값 추출
- 예: `/about?lang=ko` → route.query.lang → 'ko'
5. history stack
- 사용자가 방문한 경로들이 기록으로 저장됨 (뒤로, 앞으로 이동 가능)
- router.go(-1): 이전 페이지로 이동
- router.go(0): 현재 페이지 새로고침
6. onMounted()
- 컴포넌트가 처음 화면에 보일 때 한 번 실행됨
- 예: onMounted(() => console.log(route)) → 라우트 정보 확인용
7. Lazy Loading (지연 로딩)
- 컴포넌트를 `() => import(...)` 형태로 작성하면 해당 경로에 들어갈 때만 불러옴
- 초기 로딩 속도 향상, 성능 최적화에 유리
- 예:
  component: () => import('@/pages/About.vue')
8. router-link
- 페이지 이동을 위한 링크 컴포넌트
- 예:
  <router-link to="/about">소개</router-link>
9. router-view
- 현재 경로에 맞는 컴포넌트를 화면에 출력하는 자리
- 모든 페이지는 router-view 안에 표시됨
10. Navigation Guard (라우터 가드)
- 페이지 이동 전/후에 특정 로직을 실행하고 싶을 때 사용
- 예:
  router.beforeEach((to, from, next) => {
    if (!로그인됨) next('/login')
    else next()
  })
-->
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style>
/* css에서 파일 import 하는 방식 */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.container {
  text-align: center;
  margin-top: 10px;
}
.fa {
  padding: 5px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>
