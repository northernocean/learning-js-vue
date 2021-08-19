import { createApp } from 'vue';

import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      user: '',
    };
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    login(state, payload) {
      state.user = payload.user;
    },
    logout(state) {
      state.user = '';
    }
  },
  actions: {
    login(context, payload) {
      context.commit('login', payload);
    },
    logout(context) {
      context.commit('logout');
    },
    increment(context) {
      // using setTimeout to imitate some asynchronous operation
      setTimeout(function () {
        context.commit('increment');
      }, 1000);
    },
    increase(context, payload) {
      setTimeout(function () {
        context.commit('increase', payload);
      }, 1000);
    },
  },
  getters: {
    isAuthenticated(state) {
      if (state.user)
        return true;
      return false;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0)
        return 0;
      if (finalCounter > 100)
        return 100;
      return finalCounter;
    }
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
