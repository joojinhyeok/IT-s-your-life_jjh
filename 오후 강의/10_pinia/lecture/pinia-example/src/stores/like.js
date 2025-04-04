export const likeStore = defineStore("like", () => {
  const like = ref(0);

  const fivetime = computed(() => like.value * 5);

  const increase = () => {
    like.value++;
  };
  return { like, increase, fivetime };
});
