<template>
  <select
    class="rounded-md border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b]"
    @change="changeFn"
  >
    selectArr
    <option v-for="item in selectArr" :key="item" :value="item" :selected="item === defaultSelect">
      {{ item }}
    </option>
  </select>
  <input
    type="text"
    class="w-full rounded-md border-[#e5e5e5] bg-[#f9f9f9] pl-[30px] focus:border-[#7f977b] focus:bg-white focus:ring-[#7f977b]"
    placeholder="你想去哪裡？請輸入關鍵字"
    @keyup.enter="submitSearch"
    v-model.trim="scenicStr"
  />
  <button
    type="button"
    @click="submitSearch"
    class="flex items-center justify-center rounded-md bg-[#7f977b] text-white hover:bg-[#647a60] active:ring-4 active:ring-[#647a6060]"
  >
    <heroiconsOutlineSearch class="mr-5 mt-[3px]" /><span>搜&emsp;&emsp;尋</span>
  </button>
</template>
<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import heroiconsOutlineSearch from '~icons/heroicons-outline/search';

export default {
  components: {
    heroiconsOutlineSearch,
  },
  setup() {
    const router = useRouter();

    const selectArr = ref(['探索景點', '節慶活動', '品嚐美食']);
    const defaultSelect = ref('探索景點');

    const scenicStr = ref('');

    const changeFn = (e) => {
      defaultSelect.value = e.target.value;
    };

    const submitSearch = () => {
      const val = defaultSelect.value;

      const linkOption = {
        探索景點: 'scenicSpotSearch',
        節慶活動: 'activitySearch',
        品嚐美食: 'restaurantSearch',
      };

      router.push({
        name: linkOption[val],
        params: {
          str: scenicStr.value,
        },
      });
    };

    return {
      defaultSelect,
      selectArr,
      scenicStr,
      changeFn,
      submitSearch,
    };
  },
};
</script>
