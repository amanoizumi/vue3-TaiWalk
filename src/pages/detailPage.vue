<template>
  <NewTitle :titleContent="title" />
  <Layout>
    <main class="mx-auto mt-[60px] mb-[120px] min-h-[80vh] max-w-[1110px] px-[15px]">
      <!-- 麵包屑 -->
      <Breadcrumb
        class="mb-[30px]"
        v-if="breadcrumbItem.length > 0"
        :breadcrumb-li="breadcrumbItem"
        :last-item="breadcrumbLastStr"
      />
      <section class="mb-[30px]">
        <div class="flex h-[250px] justify-center overflow-hidden rounded-3xl bg-[#CCD5CA] md:h-[400px]">
          <img
            class="w-30 object-cover"
            :class="{
              'w-full': showDetailData.Picture?.split('/').pop() !== 'no_image.png',
            }"
            v-real-img="showDetailData.Picture"
            :src="showDetailData.Picture"
            :alt="showDetailData.Picture"
            :title="showDetailData.Name"
          />
        </div>
      </section>

      <section class="mb-[60px]">
        <h2 class="mb-4 text-4xl font-thin text-[#1E1E1E]">{{ showDetailData.Name }}</h2>
        <ul v-if="showDetailData.Class?.length !== 0" class="mb-8 flex">
          <li
            v-for="item in showDetailData.Class"
            :key="item"
            class="mr-2 rounded-full border py-1 pl-2 pr-[10px] text-[#BEA363]"
          >
            {{ item }}
          </li>
        </ul>

        <h3 class="mb-[10px] text-xl font-bold">
          {{
            categoryStr === 'Activity'
              ? '活動介紹：'
              : categoryStr === 'Restaurant'
              ? '餐廳介紹'
              : categoryStr === 'ScenicSpot'
              ? '景點介紹'
              : '介紹'
          }}
        </h3>
        <article class="text-lg font-thin">
          {{ showDetailData.Description }}
        </article>
      </section>

      <section class="mb-[100px] grid grid-cols-1 gap-x-[30px] break-words md:grid-cols-2">
        <div class="mb-4 rounded-xl bg-[#f9f9f9] p-[30px] text-[#2f2f2f] md:mb-0">
          <div v-if="categoryStr === 'Activity'">
            <p class="mb-[14px]">
              <span class="font-bold">活動時間：</span
              >{{ `${showDetailData.StartTime} - ${showDetailData.EndTime}` }}
            </p>
            <p class="mb-[14px]"><span class="font-bold">聯絡電話：</span>{{ showDetailData.Phone }}</p>
            <p class="mb-[14px]"><span class="font-bold">主辦單位：</span>{{ showDetailData.Organizer }}</p>
            <p class="mb-[14px]"><span class="font-bold">活動地點：</span>{{ showDetailData.Address }}</p>
            <p class="mb-[14px]">
              <span class="font-bold">官方網站：</span
              ><a
                class="hover:text-orange-600"
                v-if="showDetailData.WebsiteUrl !== '尚無提供網站'"
                :href="showDetailData.WebsiteUrl"
              >
                {{ showDetailData.WebsiteUrl }}
              </a>
              <span v-else>尚無提供網站</span>
            </p>
            <p class="mb-[14px]"><span class="font-bold">活動費用：</span>{{ showDetailData.Charge }}</p>
            <p class="mb-[14px]"><span class="font-bold">注意事項：</span>{{ showDetailData.Remarks }}</p>
          </div>

          <div v-else-if="categoryStr === 'Restaurant'">
            <p class="mb-[14px]"><span class="font-bold">營業時間：</span>{{ showDetailData.OpenTime }}</p>
            <p class="mb-[14px]"><span class="font-bold">餐廳電話：</span>{{ showDetailData.Phone }}</p>
            <p class="mb-[14px]"><span class="font-bold">餐廳地址：</span>{{ showDetailData.Address }}</p>
            <p class="mb-[14px]">
              <span class="font-bold">官方網站：</span>
              <a
                class="hover:text-orange-600"
                v-if="showDetailData.WebsiteUrl !== '尚無提供網站'"
                :href="showDetailData.WebsiteUrl"
                >{{ showDetailData.WebsiteUrl }}</a
              >
              <span v-else>尚無提供網站</span>
            </p>
          </div>
          <div v-else-if="categoryStr === 'ScenicSpot'">
            <p class="mb-[14px]">
              <span class="font-bold">開放時間：</span>{{ `${showDetailData.OpenTime}` }}
            </p>
            <p class="mb-[14px]"><span class="font-bold">服務電話：</span>{{ showDetailData.Phone }}</p>
            <p class="mb-[14px]"><span class="font-bold">景點地址：</span>{{ showDetailData.Address }}</p>
            <p class="mb-[14px]">
              <span class="font-bold">官方網站：</span>
              <a
                class="hover:text-orange-600"
                v-if="showDetailData.WebsiteUrl !== '尚無提供網站'"
                :href="showDetailData.WebsiteUrl"
                >{{ showDetailData.WebsiteUrl }}</a
              >
              <span v-else>尚無提供網站</span>
            </p>
            <p class="mb-[14px]"><span class="font-bold">票價資訊：</span>{{ showDetailData.TicketInfo }}</p>
            <p class="mb-[14px]"><span class="font-bold">注意事項：</span>{{ showDetailData.Remarks }}</p>
          </div>
        </div>

        <div>
          <div class="overflow-hidden rounded-xl">
            <ol-map
              :loadTilesWhileAnimating="true"
              :loadTilesWhileInteracting="true"
              style="height: 250px; width: 540px"
            >
              <ol-view
                ref="view"
                :center="center"
                :rotation="rotation"
                :zoom="zoom"
                :projection="projection"
                :coordinate="coordinate"
              />
              <ol-zoom-control />

              <ol-tile-layer>
                <ol-source-osm />
              </ol-tile-layer>

              <template>
                <ol-vector-layer>
                  <ol-source-vector>
                    <ol-feature>
                      <ol-geom-point :coordinates="coordinate"></ol-geom-point>
                      <ol-style>
                        <ol-style-icon :src="icon" :scale="1"></ol-style-icon>
                      </ol-style>
                    </ol-feature>
                  </ol-source-vector>
                </ol-vector-layer>
              </template>
            </ol-map>
          </div>
        </div>
      </section>
      <section v-if="popCardData?.length !== 0">
        <h2 v-if="categoryStr === 'ScenicSpot'" class="mb-4 text-2xl font-thin text-[#1E1E1E] md:text-4xl">
          還有這些不能錯過的景點
        </h2>
        <h2 v-else-if="categoryStr === 'Activity'" class="mb-4 text-2xl font-thin text-[#1E1E1E] md:text-4xl">
          還有這些不能錯過的活動
        </h2>
        <h2
          v-else-if="categoryStr === 'Restaurant'"
          class="mb-4 text-2xl font-thin text-[#1E1E1E] md:text-4xl"
        >
          還有這些不能錯過的美食
        </h2>

        <ul class="grid grid-cols-2 gap-x-[30px] md:grid-cols-4">
          <PopCard
            v-for="item in popCardData"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :imageUrl="item.imageUrl"
            :address="item.address"
            @emit-update-detail-page="callDetailByIDApi"
          />
        </ul>
      </section>
    </main>
  </Layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

import { getDetailByIDApi } from '@/api/tdx';
import { getScenicSpotByCountyApi, getActivityByCountyApi, getRestaurantByCountyApi } from '@/api/tdx';
import cityData from '@/services/cityData';
import noImg from '@/assets/img/no_image.png';
import icon from '@/assets/icon/pin.svg';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const breadcrumbItem = ref([
      {
        path: '/',
        text: '首頁',
      },
    ]);

    const title = ref('介紹');
    const breadcrumbLastStr = ref('');

    const detailData = ref({});
    const showDetailData = ref({});
    const categoryStr = ref('');

    const popCardData = ref([]);

    // 地圖資訊
    let location = [120.2816791, 22.624677];
    const projection = ref('EPSG:4326');
    const zoom = ref(15);
    const rotation = ref(0);
    const coordinate = ref(location);
    const center = ref(location);

    const createPopData = async (city) => {
      if (city !== undefined) {
        const cityArr = cityData.filter((item) => {
          return item.cityTW === city;
        });
        const arr = [];

        city = cityArr[0].cityEN;
        let resultData = [];

        if (categoryStr.value === 'ScenicSpot') {
          const { data } = await getScenicSpotByCountyApi(city, 4);
          resultData = data;
        } else if (categoryStr.value === 'Activity') {
          const { data } = await getActivityByCountyApi(city, 4);
          resultData = data;
        } else if (categoryStr.value === 'Restaurant') {
          const { data } = await getRestaurantByCountyApi(city, 4);
          resultData = data;
        }
        resultData.forEach((item) => {
          const obj = {
            id: item[categoryStr.value + 'ID'],
            title: item[categoryStr.value + 'Name'],
            imageUrl: item.Picture?.PictureUrl1 || noImg,
            address: item.Address,
          };
          arr.push(obj);
        });
        popCardData.value = arr;
      }
    };

    const callDetailByIDApi = async (id) => {
      breadcrumbItem.value = [
        {
          path: '/',
          text: '首頁',
        },
      ];

      try {
        const res = await getDetailByIDApi(id, categoryStr.value);
        detailData.value = res.data[0];

        let city = detailData.value.City;
        createPopData(city);

        breadcrumbLastStr.value = detailData.value[categoryStr.value + 'Name'];

        location = [
          Number(detailData.value.Position.PositionLon.toFixed(7)),
          Number(detailData.value.Position.PositionLat.toFixed(6)),
        ];

        coordinate.value = location;
        center.value = location;

        const obj = {
          Name: detailData.value[categoryStr.value + 'Name'],
          Picture: detailData.value.Picture?.PictureUrl1 || noImg,
          Description: detailData.value.Description || '尚無描述',
          Phone: detailData.value.Phone || '尚無電話資訊',
          WebsiteUrl: detailData.value.WebsiteUrl || '尚無提供網站',
          Class: createClassArr(),
        };

        // 整理資訊
        if (categoryStr.value === 'Activity') {
          obj.StartTime = detailData.value.StartTime?.slice(0, 10) || '尚無活動開始時間資訊';
          obj.EndTime = detailData.value.EndTime?.slice(0, 10) || '尚無活動結束時間資訊';
          obj.Organizer = detailData.value.Organizer || '尚無主辦單位資訊';
          obj.Address = detailData.value.Address || '尚無活動地點資訊';
          obj.Charge = detailData.value.Charge || '尚無票價資訊';
          obj.Remarks = detailData.value.Remarks || '無注意事項';
        } else if (categoryStr.value === 'ScenicSpot') {
          obj.OpenTime = detailData.value.OpenTime || '尚無開放時間資訊';
          obj.Address = detailData.value.Address || '尚無景點地址資訊';
          obj.TicketInfo = detailData.value.TicketInfo || '尚無票價資訊';
          obj.Remarks = detailData.value.Remarks || '無注意事項';
        } else if (categoryStr.value === 'Restaurant') {
          obj.OpenTime = detailData.value.OpenTime || '尚無營業時間資訊';
          obj.Address = detailData.value.Address || '尚無餐廳地址資訊';
        }
        showDetailData.value = obj;
        createBreadcrumbObj(id);
      } catch (err) {
        router.push('/');
      }
    };

    const createClassArr = () => {
      // 整理出類別
      return Object.keys(detailData.value)
        .filter((item) => item.match('Class'))
        .map((item) => detailData.value[item]);
    };

    const createBreadcrumbObj = (id) => {
      const obj = {};
      if (categoryStr.value === 'ScenicSpot') {
        obj.path = '/scenicSpotSearch';
        obj.text = '探索景點';
      } else if (categoryStr.value === 'Activity') {
        obj.path = '/activitySearch';
        obj.text = '節慶活動';
      } else if (categoryStr.value === 'Restaurant') {
        obj.path = '/restaurantSearch';
        obj.text = '品嚐美食';
      }
      breadcrumbItem.value.push(obj);

      const detailKeyName = categoryStr.value + 'Name';
      const detailNameStr = detailData.value[detailKeyName];

      breadcrumbItem.value.push({
        text: detailNameStr,
        path: `/DetailPage/${id}`,
      });
    };
    onMounted(async () => {
      let id = route.params.id;
      let categoryID = id.slice(0, 2);

      if (categoryID === 'C1') {
        categoryStr.value = 'ScenicSpot';
      } else if (categoryID === 'C2') {
        categoryStr.value = 'Activity';
      } else if (categoryID === 'C3') {
        categoryStr.value = 'Restaurant';
      }

      try {
        store.dispatch('loadingModules/updatePageLoading', true);
        await callDetailByIDApi(id, categoryStr.value);
        store.dispatch('loadingModules/updatePageLoading', false);
      } catch (error) {
        store.dispatch('dialogModules/updateDialog', true);
        console.error(error);
      }
    });

    return {
      title,
      callDetailByIDApi,
      breadcrumbItem,
      showDetailData,
      categoryStr,
      breadcrumbLastStr,
      center,
      rotation,
      zoom,
      projection,
      coordinate,
      popCardData,
      noImg,
      icon,
    };
  },
};
</script>
