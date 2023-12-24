import { createStore } from 'vuex'
import scenicSpotModules from './modules/scenicSpotModules'
import activityModules from './modules/activityModules'
import restaurantModules from './modules/restaurantModules'
import loadingModules from './modules/loadingModules'

export default createStore({
  strict: true,
  
  modules: {
    scenicSpotModules,
    activityModules,
    restaurantModules,
    loadingModules
  }
})