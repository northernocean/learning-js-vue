import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import cart from './modules/cart.js';
import product from './modules/product.js';

const store = createStore({
  modules: {
    cart,
    product,
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations,
  actions,
  getters,
});

export default store;