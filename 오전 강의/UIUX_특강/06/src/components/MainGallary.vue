<script setup lang="ts">
import BaseButton from './UI/BaseButton.vue'
</script>

<template>
  <!-- 그리드 컨테이너 -->
  <main class="component-grid">
    <!-- 컴포넌트 그룹(그리드 아이템) -->
    <section class="component-card">
      <h2>버튼</h2>
      <BaseButton class="primary">Primary</BaseButton>
      <BaseButton class="outline">Outline</BaseButton>
      <BaseButton class="pill">Pill</BaseButton>
    </section>
  </main>
</template>
