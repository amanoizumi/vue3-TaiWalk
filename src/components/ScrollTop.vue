<template>
  <div
    ref="scrollBtn"
    class="scroll-top w-12 h-12 fixed bottom-8 right-8 flex cursor-pointer items-center justify-center bg-[#7f977b] p-3 text-zinc-50 shadow-lg hover:bg-[#ff725e]"
    title="回到上方"
    @click="scrollTop"
  >
    <heroicons-outline-chevron-up class="text-3xl" />
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { useScroll } from '@vueuse/core';

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
