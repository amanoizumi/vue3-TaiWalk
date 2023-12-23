import { createStore } from 'vuex'
import scenicSpotModules from './modules/scenicSpotModules'
import activityModules from './modules/activityModules'
import restaurantModules from './modules/restaurantModules'

export default createStore({
  modules: {
    scenicSpotModules,
    activityModules,
    restaurantModules
  }
})