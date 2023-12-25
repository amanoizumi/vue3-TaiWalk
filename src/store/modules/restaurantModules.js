import { getRestaurantApi, getRestaurantByCountyApi } from '@/api/tdx';

const state = {
  restaurants: [],
};

const getters = {
  restaurantsIndexPageData: (state, getters, rootState) => {
    const hasCityData = state.restaurants.filter((item) => {
      return item.hasOwnProperty('City');
    });

    const obj = {
      新北市: 0,
      高雄市: 0,
      花蓮縣: 0,
      桃園市: 0,
    };
    const arr = [];

    hasCityData.forEach((item) => {
      if (obj.hasOwnProperty(item.City) && obj[item.City] < 1) {
        arr.push(item);
        obj[item.City] += 1;
      }
    });

    return arr;
  },
  restaurantsData: (state) => {
    return state.restaurants;
  },
};

const actions = {
  async getRestaurant(context) {
    try {
      const { data } = await getRestaurantApi(0, false);
      context.commit('RESTAURANT', data);
    } catch (err) {
      console.dir(err);
    }
  },
};

const mutations = {
  RESTAURANT(state, payload) {
    state.restaurants = payload;
  },
};

export default {
  strict: true,
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
