<template>
  <div class="flex flex-col">
    <!-- navbar -->
    <div class="md:border-b md:border-[#e5e5e5]">
      <nav class="mx-auto flex h-20 max-w-[1200px] px-[20px] lg:px-[45px]">
        <div class="flex w-full items-center justify-center md:flex-1 md:justify-between">
          <!--Logo -->
          <h1 class="">
            <RouterLink :to="'/'">
              <TaiWalkLogo :w="241" :h="32"></TaiWalkLogo>
            </RouterLink>
          </h1>
          <!-- 漢堡 ICON -->
          <div
            class="absolute right-3 top-3 z-10 flex h-[50px] w-[50px] rounded-lg bg-[#A8B8A5] py-[15px] px-[10px] md:hidden"
            @click="toggleMenu"
          >
            <div class="flex flex-col items-end justify-between">
              <div class="h-1 w-5 rounded bg-white"></div>
              <div class="h-1 w-[30px] rounded bg-white"></div>
              <div class="h-1 w-5 rounded bg-white"></div>
            </div>
          </div>
          <!--menu -->
          <ul class="hidden justify-center text-gray md:flex md:text-base">
            <li v-for="item in menuItems" :key="item.text" class="ml-5 py-2 md:py-0">
              <RouterLink
                :to="item.to"
                class="hover:text-green-600"
                :class="{ 'text-green-600': item.to === active }"
              >
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>

          <ul
            class="absolute z-10 mt-[100px] flex justify-center text-gray md:hidden md:text-base"
            :class="menuState"
          >
            <li v-for="item in menuItems" :key="item.text" class="ml-5 py-2 md:py-0">
              <RouterLink
                :to="item.to"
                class="hover:text-green-600"
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
    <div class="relative">
      <slot></slot>
    </div>

    <!-- footer -->
    <footer class="w-full bg-[#65895f] py-5 text-center text-white">
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
      console.log(menuState.value);
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
