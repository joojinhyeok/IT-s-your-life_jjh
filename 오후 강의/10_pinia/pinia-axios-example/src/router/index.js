import { createRouter, createWebHistory } from "vue-router";
import StudentListView from "@/views/StudentListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // redirect는 기본값 설정
      path: "/",
      redirect: "/students",
    },
    {
      path: "/students",
      name: "students",
      component: StudentListView,
    },
  ],
});

export default router;
