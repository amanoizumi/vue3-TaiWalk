const state = {
  indexLoading: false,
  pageLoading: false,
};

const getters = {
  indexLoading: (state) => state.indexLoading,
  pageLoading: (state) => {
    return state.pageLoading;
  },
};

const actions = {
  updateIndexLoading(context, status) {
    context.commit('INDEX_LOADING', status);
  },
  updatePageLoading(context, status) {
    context.commit('PAGE_LOADING', status);
  },
};

const mutations = {
  INDEX_LOADING(state, payload) {
    state.indexLoading = payload;
  },
  PAGE_LOADING(state, payload) {
    state.pageLoading = payload;
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
