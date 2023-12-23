import { getActivityApi } from '@/api/axios';
// import { afterDayActivity, getTodayDateStr } from '@/services/activity';

const state = {
  activity: [],
};

const getters = {
  activityIndexPageData: (state, getters, rootState) => {
    return state.activity.slice(0, 4);
  },
};

const actions = {
  async getActivity(context) {
    try {
      const activity = await getActivityApi();
      context.commit('ACTIVITY', activity.data);
    } catch (err) {
      console.dir(err);
    }
  },
};

const mutations = {
  ACTIVITY(state, payload) {
    state.activity = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
