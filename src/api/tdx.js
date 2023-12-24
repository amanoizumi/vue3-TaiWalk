import axios from 'axios';

const id = import.meta.env.VITE_API_ID;
const key = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_API_URL;

// API 驗證

// 取得 token
const getAuthorizationHeader = async () => {
  const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';

  const parameters = {
    grant_type: 'client_credentials',
    client_id: id,
    client_secret: key,
  };

  try {
    const response = await axios.post(authUrl, parameters, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.dir('Error in getting authorization:', error);
    return null;
  }
};
/* === 觀光景點 API ===*/
// 取得所有觀光景點資料
export const getScenicSpotApi = async () => {
  try {
    const token = await getAuthorizationHeader();
    const apiUrl = `${url}/ScenicSpot?$filter=Picture/PictureUrl1 ne null`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getScenicSpotApi request:', error);
    return null;
  }
};

// 取得指定縣市的觀光景點資料('縣市英文名稱', 前 1 筆)
export const getScenicSpotByCountyApi = async (county, num) => {
  try {
    const token = await getAuthorizationHeader();
    const apiUrl = `${url}/ScenicSpot/${county}?$filter=Picture/PictureUrl1 ne null&$top=${num}`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getScenicSpotByCountyApi request:', error);
    return null;
  }
};
export const getActivityByCountyApi = async (county, num) => {
  try {
    const token = await getAuthorizationHeader();
    const apiUrl = `${url}/Activity/${county}?$filter=Picture/PictureUrl1 ne null&$top=${num}`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getActivityByCountyApi request:', error);
    return null;
  }
};

export const getRestaurantByCountyApi = async (county, num) => {
  try {
    const token = await getAuthorizationHeader();
    const apiUrl = `${url}/Restaurant/${county}?$filter=Picture/PictureUrl1 ne null&$top=${num}`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getRestaurantByCountyApi request:', error);
    return null;
  }
};

export const getActivityApi = async (top = 0, pictureFilter = true) => {
  try {
    const token = await getAuthorizationHeader();
    let apiUrl = `${url}/Activity?`;
    // 預設有圖片過濾
    if (pictureFilter) apiUrl += '$filter=Picture/PictureUrl1 ne null';
    if (top !== 0) apiUrl += `&$top=${top}`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getActivityApi request:', error);
    return null;
  }
};

// 取得所有餐飲資料
// 預設有圖片過濾
export const getRestaurantApi = async (top = 0, pictureFilter = true) => {
  try {
    const token = await getAuthorizationHeader();

    let apiUrl = `${url}/Restaurant?`;
    if (pictureFilter) apiUrl += '$filter=Picture/PictureUrl1 ne null';
    if (top !== 0) apiUrl += `&$top=${top}`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getRestaurantApi request:', error);
    return null;
  }
};

// 取得單一資料細節
export const getDetailByIDApi = async (id, categoryStr) => {
  try {
    const token = await getAuthorizationHeader();
    const apiUrl = `${url}/${categoryStr}?$filter=${categoryStr}ID eq '${id}'`;

    return await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error in API getDetailByIDApi request:', error);
    return null;
  }
};
