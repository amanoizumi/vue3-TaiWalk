<template>
  <div class="text-sm text-[#646464]">
    <ul class="flex flex-wrap">
      <li class="mx-1 mb-2 h-8 w-8 rounded overflow-hidden border bg-[#e5e5e5] border-[#e5e5e5]  text-white">
        <button
          @click="changePage(pageNow - 1)"
          class="flex h-full w-full items-center justify-center rounded"
          type="button"
          :class="{ 'cursor-not-allowed bg-[#e5e5e5] text-[#65895F]': pageNow === 1, 'bg-[#7F977B]': pageNow !== 1 }"
          :disabled="pageNow === 1 ? true : false"
        >
          <heroicons-outline-chevron-left />
        </button>
      </li>

      <li
        v-for="page in totalPage"
        :key="page"
        :class="{ 'border-[#65895F] text-[#65895F]': pageNow === page }"
        class="mx-1 mb-2 h-8 w-8 rounded border border-[#e5e5e5]"
      >
        <button
          class="flex h-full w-full items-center justify-center rounded hover:bg-[#f9f9f9]"
          type="button"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </li>

      <li class="mx-1 mb-2 h-8 w-8 rounded border border-[#e5e5e5] bg-[#e5e5e5] text-white">
        <button
          @click="changePage(pageNow + 1)"
          class="flex h-full w-full items-center justify-center rounded"
          type="button"
          :class="{ 'cursor-not-allowed bg-[#e5e5e5] text-[#65895F]': pageNow === totalPage , 'bg-[#7F977B]': pageNow !== totalPage }"
          :disabled="pageNow === totalPage ? true : false"
        >
          <heroicons-outline-chevron-right />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pageNow: {
      type: Number,
    },
    totalPage: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const changePage = (num) => {
      emit('change-page', num);

    };
    return {

      changePage,
    };
  },
};
</script>
