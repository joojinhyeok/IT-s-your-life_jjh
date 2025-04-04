<script setup>
import { onMounted } from "vue";
import { useStudent } from "@/api/Students";
import StudentCard from "@/components/StudentCard.vue";

// 컴포저블 함수 사용
const { students, error, fetchAllStudents } = useStudent();

// 마운트 되는 순간 fetchAllStudents 함수 실행
onMounted(() => {
  fetchAllStudents();
});
</script>

<template>
  <div>
    <h2>KB-19기 학생들</h2>
    <div>
      <div v-for="student in students" :key="student.id">
        <!-- StudentCard에게 props로 student를 넘겨줌 -->
        <StudentCard :student="student"></StudentCard>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
