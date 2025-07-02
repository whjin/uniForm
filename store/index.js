import { createStore } from 'vuex';
import theme from './modules/theme';
import app from './modules/app';

export default createStore({
  namespaced: true,
  modules: { theme, app },
});
