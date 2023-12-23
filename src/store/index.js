import { createStore } from 'vuex'
import scenicSpotModules from './modules/scenicSpotModules'
import activityModules from './modules/activityModules'
import restaurantModules from './modules/restaurantModules'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    indexLoading: false
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    updateIndexLoading(context, status) {
      context.commit('INDEX_LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    INDEX_LOADING(state, status) {
      state.indexLoading = status;
    },
  },
  getters: {
    isLoading: state => state.isLoading,
    indexLoading: state => state.indexLoading,
  },

  modules: {
    scenicSpotModules,
    activityModules,
    restaurantModules,
  }
})