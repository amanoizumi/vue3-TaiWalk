import { getScenicSpotApi } from '@/api/axios';

const state = {
  scenicSpot: [],
};

const getters = {
  scenicForSwiper: (state) => {
    const hasCityData = state.scenicSpot.filter((item) => {
      return item.hasOwnProperty('City');
    });

    let obj = {
      新北市: 0,
      高雄市: 0,
      花蓮縣: 0,
      桃園市: 0,
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
    context.commit('LOADING', true, { root: true });
    try {
      const { data } = await getScenicSpotApi();
      context.commit('SCENIC_SPOT', data);
    } catch (err) {
      console.dir(err);
    } finally {
      context.commit('LOADING', false, { root: true });
      
    }
  },
};

const mutations = {
  SCENIC_SPOT(state, payload) {
    state.scenicSpot = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
