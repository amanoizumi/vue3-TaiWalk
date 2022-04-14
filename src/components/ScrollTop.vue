<template>
  <div
    class="scroll-top fixed flex cursor-pointer shadow-lg justify-center items-center p-5 bottom-10 right-10 text-zinc-50 bg-[#7f977b] hover:bg-[#ff725e] w-18 h-18"
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
