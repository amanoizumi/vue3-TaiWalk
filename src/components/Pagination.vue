<template>
  <div class="text-sm text-[#646464]">
    <div class="flex flex-wrap gap-2">
      <div class="h-12 w-12 overflow-hidden rounded border border-[#e5e5e5] bg-[#e5e5e5] text-white">
        <button
          @click="changePage(pageNow - 1)"
          class="flex h-full w-full items-center justify-center rounded text-lg"
          type="button"
          :class="{
            'cursor-not-allowed bg-[#e5e5e5] text-[#65895F]': pageNow === 1,
            'bg-[#7F977B]': pageNow !== 1,
          }"
          :disabled="pageNow === 1 ? true : false"
        >
          <heroicons-outline-chevron-left />
        </button>
      </div>
      <select
        class="rounded border-[#e5e5e5] shadow-sm focus:border-[#65895F] focus:ring focus:ring-[#65895F] focus:ring-opacity-50 w-20"
        ref="selectDOM"
        @change="selectChangePage"
      >
        <option :value="page" v-for="page in totalPage">{{ page }}</option>
      </select>
      <div class="h-12 w-12 rounded border border-[#e5e5e5] bg-[#e5e5e5] text-white">
        <button
          @click="changePage(pageNow + 1)"
          class="flex h-full w-full items-center justify-center rounded text-lg"
          type="button"
          :class="{
            'cursor-not-allowed bg-[#e5e5e5] text-[#65895F]': pageNow === totalPage,
            'bg-[#7F977B]': pageNow !== totalPage,
          }"
          :disabled="pageNow === totalPage ? true : false"
        >
          <heroicons-outline-chevron-right />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

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
    const selectDOM = ref(null);

    const changePage = (num) => {
      emit('change-page', num);
      selectDOM.value.value = num;
    };
    const selectChangePage = () => {
      emit('change-page', parseInt(selectDOM.value.value, 10));
    };

    return {
      selectDOM,
      changePage,
      selectChangePage,
    };
  },
};
</script>
