<template>
  <select
    class="text-[#6e7d60] border-[#e5e5e5] rounded-md focus:ring-[#7f977b] focus:border-[#7f977b] pl-[30px]"
    @change="changeFn"
  >
    selectArr
    <option v-for="item in selectArr" :key="item" :value="item" :selected="item === defaultSelect">
      {{ item }}
    </option>
  </select>
  <input
    type="text"
    class="border-[#e5e5e5] bg-[#f9f9f9] rounded-md focus:ring-[#7f977b] focus:border-[#7f977b] focus:bg-white pl-[30px]"
    placeholder="你想去哪裡？請輸入關鍵字"
    @keyup.enter="submit"
    v-model.trim="scenicStr"
  />
  <button
    type="button"
    @click="submit"
    class="flex justify-center items-center bg-[#7f977b] text-white rounded-md hover:bg-[#647a60]"
  >
    <heroiconsOutlineSearch class="mr-5 mt-[3px]" /><span>搜&emsp;&emsp;尋</span>
  </button>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

import heroiconsOutlineSearch from '~icons/heroicons-outline/search';

export default {
  components: {
    heroiconsOutlineSearch,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const selectArr = ref(['探索景點', '節慶活動', '品嚐美食']);
    const defaultSelect = ref('探索景點');

    const scenicStr = ref('');

    const changeFn = (e) => {
      defaultSelect.value = e.target.value;
    };

    const submit = () => {
      const val = defaultSelect.value;

      const linkOption = {
        '探索景點' : 'scenicSpotSearch',
        '節慶活動' : 'activitySearch',
        '品嚐美食': 'restaurantSearch'
      }
      console.log(val);
      console.log(linkOption[val]);

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
      submit,
    };
  },
};
</script>
