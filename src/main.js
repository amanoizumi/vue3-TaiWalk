import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import OpenLayersMap from 'vue3-openlayers';
import './styles/index.css';

import noImg from '@/assets/img/no_image.png';

import store from './store'

const app = createApp(App);

app.use(router);
app.use(OpenLayersMap);
app.use(store);

// 加入全域自訂指令，替代尚未載入的遠端圖片
app.directive('real-img', async (el, binding) => {
  const defaultImg = noImg; //預設圖片
  const newLoadImg = binding.value; //欲載入的新圖片

  if (newLoadImg) {
    // 取資料前先插入預設圖片
    // el.setAttribute('src', defaultImg);
    //await : 等待判斷結果回傳
    const exist = await imageIsExist(newLoadImg);
    if (exist) {
      el.setAttribute('src', newLoadImg);
    } else {
      
      el.setAttribute('src', defaultImg);
    }
  }
});

//檢測圖片是否存在
const imageIsExist = (url) => {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = function () {
      if (this.complete === true) {
        resolve(true);
        img = null;
      }
    };
    img.onerror = () => {
      resolve(false);
      img = null;
    };
    img.src = url;
  });
};

app.mount('#app');
