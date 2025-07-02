export default {
  state: {
    currentTheme: 'light',
  },
  mutations: {
    SET_THEME(state, theme) {
      state.currentTheme = theme;
    },
  },
  actions: {
    initTheme({ commit }) {
      let theme = uni.getStorageSync('theme') || 'light';
      uni.setStorageSync('theme', theme);
      commit('SET_THEME', theme);
    },
    toggleTheme({ commit }) {
      let theme = uni.getStorageSync('theme') || 'light';
      let curTheme = theme === 'light' ? 'dark' : 'light';
      uni.setStorageSync('theme', curTheme);
      commit('SET_THEME', curTheme);
    },
  },
};
