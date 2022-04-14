import axios from 'axios';
import jsSHA from 'jsSHA';

const id = import.meta.env.VITE_API_ID;
const key = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_API_URL;

// API 驗證
const getAuthorizationHeader = () => {
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(key, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${id}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return {
    Authorization: Authorization,
    'X-Date': GMTString,
  };
};

/* === 觀光景點 API ===*/
export const getScenicSpotApi = () => {
  const apiUrl = `${url}/ScenicSpot?$filter=Picture/PictureUrl1 ne null`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};

// 取得指定縣市的觀光景點資料('縣市英文名稱', 前 1 筆)
export const getScenicSpotByCountyApi = (county, num) => {
  const apiUrl = `${url}/ScenicSpot/${county}?$filter=Picture/PictureUrl1 ne null&$top=${num}`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};
export const getActivityByCountyApi = (county, num) => {
  const apiUrl = `${url}/Activity/${county}?$filter=Picture/PictureUrl1 ne null&$top=${num}`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};

export const getRestaurantByCountyApi = (county, num) => {
  const apiUrl = `${url}/Restaurant/${county}?$filter=Picture/PictureUrl1 ne null&$top=${num}`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};

export const getActivityApi = (top = 0, pictureFilter = true) => {
  // 預設有圖片過濾
  let apiUrl = `${url}/Activity?`;

  if (pictureFilter) apiUrl += '$filter=Picture/PictureUrl1 ne null';
  if (top !== 0) apiUrl += `&$top=${top}`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};

// 取得所有餐飲資料
// 預設有圖片過濾
export const getRestaurantApi = (top = 0, pictureFilter = true) => {
  let apiUrl = `${url}/Restaurant?`;
  if (pictureFilter) apiUrl += '$filter=Picture/PictureUrl1 ne null';
  if (top !== 0) apiUrl += `&$top=${top}`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};

// 取得單一資料細節
export const getDetailByIDApi = (id, categoryStr) => {
  const apiUrl = `${url}/${categoryStr}?$filter=${categoryStr}ID eq '${id}'`;
  return axios.get(apiUrl, {
    headers: getAuthorizationHeader(),
  });
};
