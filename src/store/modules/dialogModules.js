const state = {
  show: false,
  styleObj: {}
};

const getters = {
  showDialog: (state) => state.show,
};

const actions = {
  updateDialog(context, status) {
    context.commit('SHOW_DIALOG', status);
  },
};

const mutations = {
   SHOW_DIALOG(state, payload) {
    state.show = payload;
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
