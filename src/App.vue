<template>
  <base-container v-if="isAuthenticated" title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
    <hr>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>