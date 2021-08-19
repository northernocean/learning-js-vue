<template>
  <button @click="login" v-if="!isAuthenticated">Login</button>
  <button @click="logout" v-if="isAuthenticated">Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    // Not sure how to provide a default payload for logging in with a user name (yet)
    login() {
       this.$store.dispatch('login', { user: 'david' });
    },
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>
