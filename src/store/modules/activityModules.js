import { getActivityApi } from '@/api/tdx';
import { afterDayActivity, getTodayDateStr, targetDayActivity } from '@/services/activity';

const state = {
  activity: [],
};

const getters = {
  activityIndexPageData: (state, getters, rootState) => {
    const hasCityData = state.activity.filter((item) => {
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
  activityData: (state, getters, rootState) => {
    return state.activity;
  },
};

const actions = {
  async getActivity(context) {
    try {
      const { data } = await getActivityApi(0, false);
      context.commit('ACTIVITY', data);
    } catch (err) {
      console.error(err);
    }
  },
};

const mutations = {
  ACTIVITY(state, payload) {
    state.activity = payload;
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
