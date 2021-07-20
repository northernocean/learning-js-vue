<template>
  <h1>Hello from App</h1>
  <app-user :username="username" :age="age"></app-user>
  <app-user-data @user-updated="userUpdated"></app-user-data>
</template>


<script>
import AppUser from './components/AppUser.vue';
  export default {
  components: { AppUser },
    emits: [
    ],
    data() {
      return {
        username:'David',
        age: '42'
      };
    },
    methods: {
      userUpdated(username, age) {
        this.username = username;
        this.age = age;
      },
    }
  }
</script>

<style scoped>
</style>