import { createStore } from 'vuex'
import scenicSpotModules from './modules/scenicSpotModules'
import activityModules from './modules/activityModules'
import restaurantModules from './modules/restaurantModules'
// import loadingModules from './modules/loadingModules'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
  },
  actions: {
    // payload 載荷
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  },

  modules: {
    scenicSpotModules,
    activityModules,
    restaurantModules,
    // loadingModules
  }
})