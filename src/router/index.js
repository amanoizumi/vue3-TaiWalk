import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/scenicSpotSearch',
    name: 'scenicSpotSearch',
    component: () => import('../pages/scenicSpotSearch.vue'),
  },
  {
    path: '/activitySearch',
    name: 'activitySearch',
    component: () => import('../pages/activitySearch.vue'),
  },
  {
    path: '/restaurantSearch',
    name: 'restaurantSearch',
    component: () => import('../pages/restaurantSearch.vue'),
  },
  {
    path: '/detailPage/:id',
    name: 'detailPage/:id',
    component: () => import('../pages/detailPage.vue'),
  },
  {
    // 輸入亂碼網址時重新導向到首頁
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  // {
  //   // 輸入亂碼網址時重新導向 404
  //   path: '/:pathMatch(.*)*',
  //   component: 你的 404 頁面元件
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes,
});

export default router;
