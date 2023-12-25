<template>
  <NewTitle :titleContent="'探索景點'" />
  <Layout>
    <main class="mx-auto mt-[60px] mb-[120px] min-h-[80vh] max-w-[1110px] px-[15px]">
      <!-- 麵包屑 -->
      <Breadcrumb class="mb-8" v-if="breadcrumbItem.length > 0" :breadcrumb-li="breadcrumbItem" />
      <!-- 選縣市 -->
      <section class="mb-[60px] flex flex-col md:flex-row">
        <select
          class="mb-2 cursor-pointer rounded-md border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b] md:mr-[15px] md:mb-0 md:w-60"
          v-model="citySelectModel"
        >
          <option
            v-for="item in countyArr"
            :key="item.cityTW"
            :value="item.cityTW"
            :selected="item.cityTW === '全部縣市'"
          >
            {{ item.cityTW }}
          </option>
        </select>
        <!-- 選主題類別 -->
        <select
          class="mb-2 rounded-md border-[#e5e5e5] pl-[30px] text-[#6e7d60] focus:border-[#7f977b] focus:ring-[#7f977b] md:mr-[15px] md:mb-0 md:w-60"
          v-model="classSelectModel"
        >
          <option value="請選擇主題" selected>請選擇主題</option>
          <option v-for="item in listItem" :key="item.title" :value="item.title">
            {{ item.title }}
          </option>
        </select>
        <!-- 輸入框 -->
        <input
          type="text"
          class="mb-2 flex-1 rounded-md border-[#e5e5e5] bg-[#f9f9f9] pl-[30px] focus:border-[#7f977b] focus:bg-white focus:ring-[#7f977b] md:mr-[15px] md:mb-0"
          placeholder="你想去哪裡？請輸入關鍵字"
          v-model="inputStr"
          @keyup.enter="submitDataFilter"
        />
        <button
          type="button"
          class="flex h-[50px] items-center justify-center rounded-md bg-[#7f977b] text-white hover:bg-[#647a60] active:ring-4 active:ring-[#647a6060] md:w-[210px]"
          @click="submitDataFilter"
        >
          <heroiconsOutlineSearch class="mr-5 mt-[3px]" /><span class="">搜&emsp;&emsp;尋</span>
        </button>
      </section>
      <section>
        <div v-if="showPopCardData?.length === 0">
          <div class="mb-5 flex items-center justify-center text-lg text-[#61795d]">
            <heroicons-outline-information-circle
              class="mt-[2px] mr-2"
            ></heroicons-outline-information-circle>
            <p>目前沒有資料</p>
          </div>
          <!-- 熱門主題 -->
          <h2 class="mb-3 text-4xl font-thin">熱門主題</h2>
          <ul class="mb-3 grid grid-cols-2 gap-x-[15px] md:grid-cols-4">
            <!-- 主題卡片 -->
            <SearchPageCard
              @emit-class-data="classDataFilter"
              v-for="item in listItem"
              :title="item.title"
              :img="item.img"
              :key="item"
            />
          </ul>
        </div>
        <!-- 搜尋結果 -->
        <div v-else>
          <h2 class="mb-3 flex items-center text-4xl font-thin">
            搜尋結果
            <p class="ml-4 text-lg">
              共 <span class="text-orange-500">{{ dataLen }}</span> 筆
            </p>
          </h2>
          <ul class="grid grid-cols-1 gap-x-[30px] md:grid-cols-4">
            <!-- PopCard -->
            <PopCard
              v-for="item in showPopCardData"
              :key="item.ScenicSpotID"
              :id="item.ScenicSpotID"
              :title="item.ScenicSpotName"
              :imageUrl="item.Picture.PictureUrl1"
              :address="item.Address"
            />
          </ul>
          <div class="mt-10 flex justify-center">
            <!-- Pagination -->
            <Pagination
              :page-now="pageNow"
              :total-page="totalPage"
              @change-page="changePage"
              class="mx-auto mt-20"
              :key="paginationKey"
            />
          </div>
        </div>
      </section>
    </main>
    <ScrollTop />
  </Layout>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import chunk from 'lodash/chunk';
import cityData from '@/services/cityData';

import img01 from '@/assets/img/spot_01.png';
import img02 from '@/assets/img/spot_02.png';
import img03 from '@/assets/img/spot_03.png';
import img04 from '@/assets/img/spot_04.png';
import img05 from '@/assets/img/spot_05.png';
import img06 from '@/assets/img/spot_06.png';
import img07 from '@/assets/img/spot_07.png';

export default {
  emits: {
    emitClassData: String,
  },
  setup(props, { emit }) {
    const store = useStore();
    const callScenicSpot = () => store.dispatch('scenicSpotModules/getScenicSpot');
    const hotSpotData = computed(() => store.getters['scenicSpotModules/scenicSpot']);
    const route = useRoute();
    const countyArr = cityData;

    // input Model
    const citySelectModel = ref('全部縣市');
    const classSelectModel = ref('請選擇主題');
    const inputStr = ref('');

    const dataLen = ref(0);
    const showPopCardData = ref([]);
    let paginationKey = 1;
    // 當前頁數
    const pageNow = ref(1);
    // 總共幾頁
    const totalPage = ref(0);
    const paginationArr = ref([]);

    const breadcrumbItem = ref([
      {
        path: '/',
        text: '首頁',
      },
      {
        path: '/scenicSpotSearch',
        text: '探索景點',
      },
    ]);

    // 主題資料
    const listItem = ref([
      {
        title: '自然風景類',
        img: img01,
      },
      {
        title: '觀光工廠類',
        img: img02,
      },
      {
        title: '遊憩類',
        img: img03,
      },
      {
        title: '休閒農業類',
        img: img04,
      },
      {
        title: '生態類',
        img: img05,
      },
      {
        title: '溫泉類',
        img: img06,
      },
      {
        title: '古蹟類',
        img: img07,
      },
    ]);

    // 使用 select 篩選資料

    const submitDataFilter = () => {
      showPopCardData.value = [];
      let citySelectVal = citySelectModel.value;
      let classSelectVal = classSelectModel.value;

      if (citySelectVal === '全部縣市') citySelectVal = '';
      if (classSelectVal === '請選擇主題') classSelectVal = '';

      showPopCardData.value = hotSpotData.value;

      if (citySelectVal !== '') showPopCardData.value = cityDataFilter(citySelectVal, showPopCardData.value);
      if (classSelectVal !== '')
        showPopCardData.value = classDataFilter(classSelectVal, showPopCardData.value);
      if (inputStr.value !== '')
        showPopCardData.value = inputStringFilter(inputStr.value, showPopCardData.value);

      createPagination(showPopCardData.value);
      inputStr.value = '';
    };

    const createPagination = (arr) => {
      if (arr.length === 0) {
        return;
      }
      paginationArr.value = chunk(arr, 20);
      dataLen.value = arr.length;
      totalPage.value = paginationArr.value.length;
      showPopCardData.value = paginationArr.value[pageNow.value - 1];
    };

    // 字串篩選
    const inputStringFilter = (inputStr, arr = hotSpotData.value) => {
      const result = arr.filter((item) => {
        return item.ScenicSpotName?.includes(inputStr) || item.Description?.includes(inputStr);
      });
      return result;
    };

    // 點選卡片篩選資料
    const classDataFilter = (classStr, arr = hotSpotData.value) => {
      const result = arr.filter((item) => {
        if (item.hasOwnProperty('Class1') && item.Class1 === classStr) {
          return item;
        } else if (item.hasOwnProperty('Class2') && item.Class2 === classStr) {
          return item;
        } else if (item.hasOwnProperty('Class3') && item.Class3 === classStr) {
          return item;
        }
      });
      showPopCardData.value = result;
      createPagination(showPopCardData.value);
      return result;
    };

    // 依縣市篩選資料
    const cityDataFilter = (city, arr = hotSpotData.value) => {
      const result = arr.filter((item) => {
        return item.Address?.includes(city) || item.City?.includes(city);
      });
      return result;
    };

    const changePage = (num) => {
      pageNow.value = num;
    };

    watch(pageNow, (n, o) => {
      pageNow.value = n;
      showPopCardData.value = paginationArr.value[n - 1];
    });

    onMounted(async () => {
      try {
        store.dispatch('loadingModules/updatePageLoading', true);
        await callScenicSpot();
        store.dispatch('loadingModules/updatePageLoading', false);

        if (route.params.str !== undefined) {
          inputStr.value = route.params.str;
        }
      } catch (error) {
        store.dispatch('dialogModules/updateDialog', true);
        console.error(error);
      }
    });

    return {
      citySelectModel,
      classSelectModel,
      dataLen,
      countyArr,
      inputStr,
      breadcrumbItem,
      listItem,
      showPopCardData,
      totalPage,
      pageNow,
      paginationKey,
      classDataFilter,
      submitDataFilter,
      changePage,
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
    };
  },
};
</script>