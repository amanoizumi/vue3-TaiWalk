# THE F2E 台灣旅遊景點導覽-vue3-TaiWalk

![image](https://github.com/amanoizumi/vue3-TaiWalk/blob/feature/vuex/public/images/readmeImg.png?raw=true)

**[DEMO](https://amanoizumi.github.io/vue3-TaiWalk/#/)**

## 功能
目標使用者：欲查詢台灣觀光景點、觀光活動、觀光餐飲的資料之使用者
- 可搜尋台灣的觀光景點、觀光活動、觀光餐飲
- 可依照地區來搜尋，例如：搜尋「花蓮所有觀光餐飲資訊」
- 可搜尋特定日期的觀光活動，目前設定為搜尋當前時間之後的觀光活動
- 地圖功能：搜尋台灣的觀光景點、觀光活動、觀光餐飲時，點擊項目後，顯示其細節以及地圖位置

## 安裝專案

```
## 安裝專案
npm install

## 啟動專案
npm run dev

## 編譯專案
npm run build
```

## 使用技術

- Vue 3
- Vite 專案建置
- Tailwind CSS 切版
- Vuex 狀態管理
- Vue 3 Datepicker
- Axios

## 第三方服務

- TDX api v2
- Vue3 OpenLayers Map 串接地圖介面

## 資料夾說明

- assets # 靜態資源放置處
- api # api 請求函式放置處
- components # 元件放置處
- pages # 頁面元件放置處
- router # 路由放置處
- services # 工具與自訂 js 檔案放置處
- styles # 樣式管理
- .env # 環境變數
- main.js # 核心原始碼
