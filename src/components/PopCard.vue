<template>
  <RouterLink :to="`/detailPage/${id}`" @click="emitData">
    <li class="mb-4 cursor-pointer">
      <div
        class="mb-[10px] h-[200px] overflow-hidden rounded-[20px]"
        :class="{ 'border border-[#e5e5e5]': imageUrl === noImg }"
      >
        <div class="relative h-[200px] bg-cover bg-center duration-300 ease-out hover:scale-110">
        
          <img class="h-full w-full object-cover" v-real-img="imageUrl" :src="imageUrl" :alt="imageUrl" :title="title" />
        </div>
      </div>
      <h4 class="mb-[10px] text-md md:text-xl font-bold text-[#2f2f2f]">{{ title }}</h4>
      <div class="flex text-gray">
        <heroIconsOutlineLocation class="mt-1" />
        {{ address || '暫無地址資料' }}
      </div>
    </li>
  </RouterLink>
</template>

//
<script>
import heroIconsOutlineLocation from '~icons/heroicons-outline/location-marker';
import noImg from '@/assets/img/no_image.png'

export default {
  components: {
    heroIconsOutlineLocation,
  },
  props: {
    title: String,
    imageUrl: {
      type: String,
      default: noImg,
    },
    address: String,
    id: String,
  },
  setup (props, { emit }) {
    const emitData = () => {
      // 重新觸發
      emit('emit-update-detail-page', props.id);
    }
    return {
      emitData,
      noImg
    }
  }
};
</script>
