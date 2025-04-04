<script setup>
import { likeStore } from "@/stores/like";
</script>

<template>
  <div>
    <h3>{{ counter.like }}</h3>
    <button @click="five">좋아요x5</button>
  </div>
</template>
