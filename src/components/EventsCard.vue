<template>
  <RouterLink class="hover:opacity-90" :to="`/detailPage/${id}`">
    <div class="flex h-40 overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#f9f9f9]">
      <div class="w-40">
        <img class="h-40 w-full object-cover" v-real-img="picture" :src="picture" alt="活動圖片" />
      </div>
      <div class="flex flex-1 flex-col px-[30px] py-4">
        <p class="mb-1 text-gray">{{ startTimeStr }} - {{ endTimeStr }}</p>
        <h4 class="overflow-ellipsis font-bold text-[#2f2f2f] md:text-lg lg:text-xl">{{ title }}</h4>
        <div class="mt-auto flex justify-between">
          <span class="flex items-center text-gray">
            <heroIconsOutlineLocation />{{ location === 'to see the official site' ? '詳見官網' : location }}
          </span>
          <a href="#" class="text-[#7f977b]">
            詳細介紹
            <heroIconsChevronRight class="mb-[3px] inline" />
          </a>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import { ref } from 'vue';
import heroIconsOutlineLocation from '~icons/heroicons-outline/location-marker';
import heroIconsChevronRight from '~icons/heroicons-outline/chevron-right';
import noImg from '@/assets/img/no_image.png';

export default {
  components: {
    heroIconsOutlineLocation,
    heroIconsChevronRight,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    startTime: {
      type: String,
      default: '',
    },
    endTime: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    picture: {
      type: String,
      default: noImg,
    },
    id: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    // 轉換格式
    const startTimeStr = props.startTime.slice(0, 10).split('-').join('/');
    const endTimeStr = props.endTime.slice(0, 10).split('-').join('/');
    const location = props.location.slice(0, 3);

    const title = ref('');

    if (props.title.length > 16) {
      title.value = props.title.slice(0, 12) + '...';
    } else {
      title.value = props.title;
    }

    return {
      startTimeStr,
      endTimeStr,
      location,
      title,
      noImg,
    };
  },
};
</script>
