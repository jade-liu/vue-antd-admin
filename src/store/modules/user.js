const state = {
    username: ''
}

const mutations = {
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
};

const actions = {
    setUsername: ({commit}, username) => {
        commit("SET_USERNAME", username);
    }
}

export default {
  state,
  mutations,
  actions,
};