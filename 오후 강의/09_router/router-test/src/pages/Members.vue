<script setup>
import members from "@/members.json";
import { onMounted } from "vue";

onMounted(() => {
  console.log(members);
});
</script>

<template>
  <div class="card card -body">
    <h2>Members</h2>
    <div v-for="m in members" :key="m.id">
      <!-- router-link는 a태그
       to=[경로]
       경로 = /members/에다가 선택한 멤버의 id값을 뒤에 붙힌 곳으로 이동
        -->
      <router-link :to="'/members/' + m.id">
        <img
          class="img-thumbnail"
          style="width: 90px; height: 110px"
          :src="m.photo"
          :title="m.name"
        />
        <h6 class="display-7">{{ m.name }}</h6>
      </router-link>
    </div>
  </div>
</template>
