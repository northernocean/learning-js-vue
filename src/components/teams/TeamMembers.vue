<template>
  <section>
    <h2>{{ teamId }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  data() {
    return {
      teamId: null,
      members: [],
      team: null,
    };
  },
  created() {
    const teamId = this.$route.params.teamId;
    this.team = this.teams.find((team) => team.id == teamId);
    if (this.team) {
      const temp = this.team.members;
      this.members.length = 0;
      temp.forEach((item) => {
        const found = this.users.find(user => user.id == item);
        if (found) {
          this.members.push(found);
        }
      });
    }
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>