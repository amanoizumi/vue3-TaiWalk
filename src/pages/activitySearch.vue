<template>
  <NewTitle :titleContent="'節慶活動'" />
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
        <!-- 選擇日期 -->
        <div
          class="mb-2 flex items-center rounded-md border border-[#e5e5e5] focus:border-[#7f977b] focus:bg-white focus:ring-[#7f977b] md:mr-[15px] md:mb-0 md:w-60"
        >
          <DatepickerComponent @emit-time="setTime" class="md:w-60" />
        </div>
        <!-- 輸入框 -->
        <input
          type="text"
          class="mb-2 flex-1 rounded-md border-[#e5e5e5] bg-[#f9f9f9] pl-[30px] focus:border-[#7f977b] focus:bg-white focus:ring-[#7f977b] md:mr-[15px] md:mb-0"
          placeholder="想找有趣的？請輸入關鍵字"
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
              :key="item.ActivityID"
              :id="item.ActivityID"
              :title="item.ActivityName"
              :imageUrl="item.Picture.PictureUrl1"
              :address="item.Address"
            />
          </ul>
          <div class="flex">
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
import { targetDayActivity } from '@/services/activity';

import img01 from '@/assets/img/activity_01.png';
import img02 from '@/assets/img/activity_02.png';
import img03 from '@/assets/img/activity_03.png';
import img04 from '@/assets/img/activity_04.png';
import img05 from '@/assets/img/activity_05.png';
import img06 from '@/assets/img/activity_06.png';

export default {
  emits: {
    emitClassData: String,
  },
  setup() {
    const store = useStore();
    const callScenicSpot = () => store.dispatch('activityModules/getActivity');

    const activityData = computed(() => store.getters['activityModules/activityData']);

    const countyArr = cityData;
    const route = useRoute();

    const citySelectModel = ref('全部縣市');

    const dateInput = ref('');
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
        path: '/activitySearch',
        text: '節慶活動',
      },
    ]);

    // 主題資料
    const listItem = ref([
      {
        title: '節慶活動',
        img: img01,
      },
      {
        title: '自行車活動',
        img: img02,
      },
      {
        title: '遊憩活動',
        img: img03,
      },
      {
        title: '產業文化活動',
        img: img04,
      },
      {
        title: '年度活動',
        img: img05,
      },
      {
        title: '四季活動',
        img: img06,
      },
    ]);

    // 篩選資料
    const submitDataFilter = () => {
      showPopCardData.value = [];
      let citySelectVal = citySelectModel.value;

      if (citySelectVal === '全部縣市') {
        citySelectVal = '';
      }
      showPopCardData.value = activityData.value;

      if (citySelectVal !== '') {
        showPopCardData.value = cityDataFilter(citySelectVal, showPopCardData.value);
      }
      if (dateInput.value !== '') {
        showPopCardData.value = targetDayActivity(dateInput.value, showPopCardData.value);
      }
      if (inputStr.value !== '') {
        showPopCardData.value = inputStringFilter(inputStr.value, showPopCardData.value);
      }
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
    const inputStringFilter = (inputStr, arr = activityData.value) => {
      const result = arr.filter((item) => {
        return item.ActivityName?.includes(inputStr) || item.Description?.includes(inputStr);
      });
      return result;
    };

    // 點選卡片篩選資料
    const classDataFilter = (classStr, arr = activityData.value) => {
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
    const cityDataFilter = (city, arr = activityData.value) => {
      const result = arr.filter((item) => {
        return item.Address?.includes(city) || item.City?.includes(city);
      });
      return result;
    };

    const changePage = (num) => {
      pageNow.value = num;
    };

    const setTime = (time) => {
      if (time === '1970-01-01') {
        dateInput.value = '';
      } else {
        dateInput.value = time;
      }
    };

    watch(pageNow, (n, o) => {
      pageNow.value = n;
      showPopCardData.value = paginationArr.value[n - 1];
    });

    onMounted(async () => {
      if (route.params.str !== undefined) {
        inputStr.value = route.params.str;
      }
      callScenicSpot();
    });

    return {
      activityData,
      citySelectModel,
      dateInput,
      inputStr,

      dataLen,
      countyArr,

      breadcrumbItem,
      listItem,
      showPopCardData,
      totalPage,
      pageNow,
      paginationKey,

      classDataFilter,
      submitDataFilter,
      changePage,
      setTime,

      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
    };
  },
};
</script>
