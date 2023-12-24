<template>
  <div
    ref="scrollBtn"
    class="scroll-top fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center bg-[#7f977b] p-3 text-zinc-50 shadow-xl hover:bg-[#ff725e]"
    title="回到上方"
    @click="scrollTop"
  >
    <heroicons-outline-chevron-up class="text-3xl" />
  </div>
</template>

<script>
export default {
  setup() {
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return { scrollTop };
  },
};
</script>
<style scope>
.scroll-top {
  border-radius: 999rem;
}
</style>
