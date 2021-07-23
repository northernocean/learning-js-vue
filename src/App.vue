<template>
  <the-header></the-header>
  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <!-- the way we have learned so far ... 
  <active-goals v-if="selectedComponent == 'active-goals'">active-goals</active-goals>
  <manage-goals v-if="selectedComponent == 'manage-goals'">manage-goals</manage-goals> -->
  <component :is="selectedComponent">

  </component>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    // "badge-list": BadgeList,
    // "user-info": UserInfo,
    "active-goals": ActiveGoals,
    "manage-goals": ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>