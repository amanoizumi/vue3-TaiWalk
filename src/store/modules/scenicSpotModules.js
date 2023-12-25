import { getScenicSpotApi } from '@/api/tdx';

const state = {
  scenicSpot: [],
};

const getters = {
  scenicSpot: (state) => state.scenicSpot,
  scenicForSwiper: (state) => {
    const hasCityData = state.scenicSpot.filter((item) => {
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
      const { data } = await getScenicSpotApi(0, false);
      context.commit('SCENIC_SPOT', data);
    } catch (err) {
      console.dir(err);
    }
  },
};

const mutations = {
  SCENIC_SPOT(state, payload) {
    state.scenicSpot = payload;
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
