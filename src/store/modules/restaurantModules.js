import { getRestaurantApi } from '@/api/tdx';

const state = {
  restaurants: [],
};

const getters = {
  restaurantsIndexPageData: (state, getters, rootState) => {
    return state.restaurants.slice(0, 4);
  },
  restaurantsData: (state) => {
    return state.restaurants
  }
};

const actions = {
  async getRestaurant(context) {
    // context.commit('LOADING', true, { root: true });
    try {
      const { data } = await getRestaurantApi();
      context.commit('RESTAURANT', data);
    } catch (err) {
      console.dir(err);
    } 
    // finally {
    //   context.commit('LOADING', false, { root: true });
    // }
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
