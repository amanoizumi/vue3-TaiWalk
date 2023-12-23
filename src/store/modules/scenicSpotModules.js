import { getScenicSpotApi } from '@/api/axios';

const state = {
  scenicSpot: [],
};

const getters = {
  scenicForSwiper: (state, getters, rootState) => {
    const hasCityData = state.scenicSpot.filter((item) => {
      return item.hasOwnProperty('City');
    });

    let obj = {
      新北市: 0,
      高雄市: 0,
      花蓮縣: 0,
      雲林縣: 0,
    };

    const arr = [];

    hasCityData.forEach((item) => {
      if (obj.hasOwnProperty(item.City) && obj[item.City] < 1) {
        obj[item.City] += 1;
        arr.push(item);
      }
    });

    return arr;
  },

};

const actions = {
  async getScenicSpot(context) {
    try {
      const spotData = await getScenicSpotApi();
      context.commit('SCENIC_SPOT', spotData.data);
    } catch (err) {
      console.dir(err);
    }
    // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
    // context.commit('LOADING', true, { root: true });
    // axios.get(url).then((response) => {
    //   context.commit('PRODUCTS', response.data.products);
    //   context.commit('CATEGORIES', response.data.products);
    //   console.log('取得產品列表:', response);
    //   context.commit('LOADING', false, { root: true });
    // });
  },

};

const mutations = {
  SCENIC_SPOT(state, payload) {
    state.scenicSpot = payload;
  },
  // PRODUCTS(state, payload) {
  //   state.products = payload;
  // },
  // CATEGORIES(state, payload) {
  //   const categories = new Set();
  //   payload.forEach((item) => {
  //     categories.add(item.category);
  //   });
  //   state.categories = Array.from(categories);
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

// export default {
// state 屬於模組區域變數
// actions, mutations, getters 是屬於全域變數
// namespaced: true, // actions, mutations, getters 是屬於區域變數
// state: {
//   scenicSpot: [],
// },
// actions: {
//   async callScenicSpot(context) {
//     try {
//       console.log('callScenicSpot');
//       const spotData = await getScenicSpotApi();
//       console.log(spotData.data);
//       context.commit('SCENIC_SPOT', spotData.data);
//     } catch (err) {
//       console.dir(err);
//     }
//     // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
//     // context.commit('LOADING', true, { root: true });
//     // axios.get(url).then((response) => {
//     //   context.commit('PRODUCTS', response.data.products);
//     //   context.commit('CATEGORIES', response.data.products);
//     //   console.log('取得產品列表:', response);
//     //   context.commit('LOADING', false, { root: true });
//     // });
//   },
// },
// mutations: {
//   SCENIC_SPOT(state, payload) {
//     state.scenicSpot = payload;
//   },
//   // PRODUCTS(state, payload) {
//   //   state.products = payload;
//   // },
//   // CATEGORIES(state, payload) {
//   //   const categories = new Set();
//   //   payload.forEach((item) => {
//   //     categories.add(item.category);
//   //   });
//   //   state.categories = Array.from(categories);
//   // },
// },
// getters: {
// scenicSpot: (state) => state.scenicSpot,
// categories: state => state.categories,
// products: state => state.products,
// },
// };
