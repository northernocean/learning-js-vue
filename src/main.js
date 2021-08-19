import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {}
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
});


const app = createApp(App)

app.use(router);

app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
