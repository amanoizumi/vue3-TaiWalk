<template>
  <li class="cursor-pointer" @click="searchClass(title)">
    <div
      class="mb-[12px] h-[124px] overflow-hidden rounded-3xl"
      :class="{ 'border border-[#e5e5e5]': img === noImg }"
    >
      <div
        class="flex h-[124px] items-center justify-center bg-cover bg-center text-2xl text-white duration-300 ease-out hover:scale-110"
        :style="{ 'background-image': `url(${img})` }"
      >
        {{ title }}
      </div>
    </div>
  </li>
</template>

//
<script>
import { ref, onMounted } from 'vue';
import noImg from '@/assets/img/no_image.png'

export default {
  props: {
    title: String,
    img: String,
  },

  setup(props, { emit }) {
    const imageUrl = ref('');

    const searchClass = (className) => {
      emit('emit-class-data', className);
    };

    return { searchClass, noImg };
  },
};
</script>
