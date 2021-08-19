import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


const store = createStore({
  modules: {},
  mutations,
  actions,
  getters,
});

export default store;