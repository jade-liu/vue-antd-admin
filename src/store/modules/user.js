const state = {
    username: ''
}

const mutations = {
  update: (state, username) => {
    state.username = username;
  },
};

const actions = {
  update: ({ commit }, username) => {
    commit("update", username);
  },
};

export default {
  state,
  mutations,
  actions,
};