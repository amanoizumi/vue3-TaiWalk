<template>
  <NewTitle :titleContent="'首頁'" />
  <Layout>
    <div class="mx-auto max-w-[1200px] px-[20px] lg:px-[45px]">
      <header class="mt-14 flex flex-col pb-[60px] md:mt-[82px] md:px-[95px] lg:grid lg:grid-cols-3">
        <div class="col-span-2">
          <h2
            class="mb-4 text-center text-3xl font-light tracking-widest text-[#1e1e1e] lg:text-left lg:text-5xl"
          >
            探索
            <span
              class="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:rounded after:bg-[#e0da48] after:content-['']"
              >台灣之美</span
            >
            <br />讓我們更親近這片土地
          </h2>

          <div class="mb-10 flex items-center justify-center lg:mb-0 lg:justify-start">
            <p class="flex items-center text-sm text-[#646464] md:text-xl">
              <heroIconsLocation class="text-[#e0da48]" />台灣旅遊景點導覽
            </p>
            <p class="ml-2 font-serif text-xs font-bold text-[#646464] md:text-lg">Taiwan Travel Guide</p>
          </div>
        </div>

        <div
          class="grid-rowshttps://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E8%88%87%E9%81%A0%E7%AB%AF%E5%8D%94%E5%90%8C%E5%B7%A5%E4%BD%9C-3 grid h-[164px] gap-y-[7px] lg:mt-5"
        >
          <SearchAttraction />
        </div>
      </header>

      <!-- Swiper -->
      <section class="mb-9">
        <div class="h-[400px] overflow-hidden rounded-3xl">
          <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
              delay: 6000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="h-[400px]"
          >
            <swiper-slide
              v-for="item in swiperData"
              :key="item.ScenicSpotID"
              :style="`backgroundImage: url(${item.Picture.PictureUrl1}); backgroundSize: cover; backgroundPosition: center center;`"
              class="bg-gradient-to-r from-[#6E7D60] to-blue-500"
            >
              <div class="flex h-full items-center justify-center text-3xl text-white">
                <RouterLink :to="`/detailPage/${item.ScenicSpotID}`"
                  >{{ item.City }} | {{ item.ScenicSpotName }}
                </RouterLink>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <!-- 近期活動 -->
      <section class="mb-9">
        <div class="flex items-center">
          <h3 class="ml-[15px] mb-3 text-2xl font-light text-[#1e1e1e] md:text-4xl">近期活動</h3>
          <RouterLink
            to="/activitySearch"
            class="ml-auto flex items-center text-[#ff725e] hover:text-[#ed1d00]"
          >
            查看更多活動
            <heroIconsChevronRight class="mt-1" />
          </RouterLink>
        </div>
        <div class="flex flex-col md:grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-3">
          <EventsCard
            class="mb-4 md:mb-0"
            v-for="item in activityData"
            :key="item.ActivityID"
            :id="item.ActivityID"
            :title="item.ActivityName"
            :start-time="item.StartTime"
            :end-time="item.EndTime"
            :location="item.Location"
            :picture="item.Picture?.PictureUrl1"
          />
        </div>
      </section>

      <!-- 熱門打卡景點 -->
      <section class="mb-9">
        <div class="flex items-center">
          <h3 class="ml-[15px] mb-3 text-2xl font-light text-[#1e1e1e] md:text-4xl">熱門打卡景點</h3>
          <RouterLink
            to="/ScenicSpotSearch"
            class="ml-auto flex items-center text-[#ff725e] hover:text-[#ed1d00]"
          >
            查看更多景點
            <heroIconsChevronRight class="mt-1" />
          </RouterLink>
        </div>
        <ul class="md:grid md:grid-cols-4 md:gap-x-[30px]">
          <PopCard
            v-for="item in swiperData"
            :key="item.ScenicSpotID"
            :id="item.ScenicSpotID"
            :title="item.ScenicSpotName"
            :imageUrl="item.Picture.PictureUrl1"
            :address="item.Address"
          />
        </ul>
      </section>

      <!-- 一再回訪美食 -->
      <section class="mb-[120px]">
        <div class="flex items-center">
          <h3 class="ml-[15px] mb-3 text-2xl font-light text-[#1e1e1e] md:text-4xl">一再回訪美食</h3>
          <RouterLink
            to="/restaurantSearch"
            class="ml-auto flex items-center text-[#ff725e] hover:text-[#ed1d00]"
          >
            查看更多美食
            <heroIconsChevronRight class="mt-1" />
          </RouterLink>
        </div>

        <ul class="md:grid md:grid-cols-4 md:gap-x-[30px]">
          <!-- <template v-if="restaurantData.length"> -->
          <PopCard
            v-for="item in restaurantData"
            :key="item.RestaurantID"
            :id="item.RestaurantID"
            :title="item.RestaurantName"
            :imageUrl="item.Picture.PictureUrl1"
            :address="item.Address"
          />
          <!-- </template> -->
        </ul>
      </section>
    </div>
  </Layout>
  <ScrollTop />
</template>

<script>
import { ref, onMounted, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';

import heroIconsOutlineLocation from '~icons/heroicons-outline/location-marker';
import heroIconsLocation from '~icons/heroicons-solid/location-marker';
import heroIconsChevronRight from '~icons/heroicons-outline/chevron-right';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';

export default {
  components: {
    heroIconsOutlineLocation,
    heroIconsLocation,
    heroIconsChevronRight,
    Swiper,
    SwiperSlide,
  },
  setup(props, { emit }) {
    const store = useStore();

    const callScenicSpot = () => store.dispatch('scenicSpotModules/getScenicSpot');
    const callRestaurantByCounty = () => store.dispatch('restaurantModules/getRestaurantByCounty');
    const callActivity = () => store.dispatch('activityModules/getActivity');
    const callRestaurant = () => store.dispatch('restaurantModules/getRestaurant');


    const hotSpotData = computed(() => store.getters['scenicSpotModules/scenicSpot']);
    const swiperData = computed(() => store.getters['scenicSpotModules/scenicForSwiper']);
    const activityData = computed(() => store.getters['activityModules/activityIndexPageData']);
    const restaurantData = computed(() => store.getters['restaurantModules/restaurantsIndexPageData']);

    watchEffect(() => {
      if (hotSpotData.value?.length && activityData.value?.length && restaurantData.value?.length) {
        store.dispatch('loadingModules/updatePageLoading', false);
      }
    });

    onMounted(() => {
      try {
        store.dispatch('loadingModules/updatePageLoading', true);

        callScenicSpot();
        callActivity();
        callRestaurant();
        callRestaurantByCounty()
      } catch (err) {
        console.dir(err);
      }
    });

    return {
      swiperData,
      hotSpotData,
      activityData,
      restaurantData,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
  border-radius: 999rem;
  border: 1px solid white;
  background-color: transparent;
  width: 40px;
  height: 40px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: 16px;
  letter-spacing: 0;
  text-transform: none;
  font-variant: initial;
  line-height: 1;
}

.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  background: white;
}

.swiper-pagination-bullet-active {
  width: 20px;
  height: 20px;
  position: relative;
  top: 2px;
}
</style>
