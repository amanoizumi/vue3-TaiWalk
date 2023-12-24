<template>
  <div class="flex flex-col">
    <!-- navbar -->
    <div class="bg-white z-40 fixed md:border-b md:border-[#e5e5e5] w-full shadow">
      <nav class="mx-auto flex h-20 max-w-[1200px] px-[20px] lg:px-[45px]">
        <div class="flex w-full items-center justify-center md:flex-1 md:justify-between">
          <!--Logo -->
          <h1>
            <RouterLink :to="'/'">
              <TaiWalkLogo class="w-40 sm:w-60"></TaiWalkLogo>
            </RouterLink>
          </h1>
          <!-- 漢堡 ICON -->
          <button type="button"
            class="absolute right-3 top-3 z-10 flex h-[50px] w-[50px] rounded-lg bg-[#A8B8A5] py-[15px] px-[10px] md:hidden"
            @click="toggleMenu"
          >
            <div class="h-full flex flex-col items-end justify-between">
              <div class="h-1 w-5 rounded bg-white"></div>
              <div class="h-1 w-[30px] rounded bg-white"></div>
              <div class="h-1 w-5 rounded bg-white"></div>
            </div>
          </button>
          <!--menu -->
          <ul class="hidden justify-center text-gray md:flex md:text-base">
            <li v-for="item in menuItems" :key="item.text" class="py-2 md:py-0">
              <RouterLink
                :to="item.to"
                class="hover:text-green-600 py-2 px-4"
                :class="{ 'text-green-600': item.to === active }"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
          <ul
            class="fixed inset-0 z-10 mt-[80px] bg-white flex flex-col text-gray md:hidden md:text-base pt-8"
            :class="menuState"
          >
            <li v-for="item in menuItems" :key="item.text" class="py-2 md:py-0">
              <RouterLink
                :to="item.to"
                class="hover:bg-[#e5e5e5] hover:text-green-600 block text-center text-3xl py-4"
                :class="{ 'text-green-600': item.to === active }"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- 內容區 -->
    <div class="relative pt-20">
      <slot></slot>
    </div>
    <!-- footer -->
    <footer class="w-full bg-[#65895f] text-sm md:text-base py-2 sm:py-5 text-center text-white">
      The F2E 3rd Week01 - UI Design: Breakfast, Front-end: Izumi
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const indexLink = {
      to: '/',
    };
    const menuItems = [
      { to: '/scenicSpotSearch', text: '探索景點' },
      { to: '/activitySearch', text: '節慶活動' },
      { to: '/restaurantSearch', text: '品嚐美食' },
    ];

    const active = ref(route.path);
    const menuState = ref('hidden');
    const toggleMenu = () => {
      if (menuState.value === 'hidden') {
        menuState.value = '';
      } else if (menuState.value === '') {
        menuState.value = 'hidden';
      }
    };

    return {
      active,
      menuItems,
      indexLink,
      menuState,
      toggleMenu,
    };
  },
};
</script>
