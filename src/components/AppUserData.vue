<template>
  <form @submit.prevent="submitData">
    <div>
      <input type="text" v-model="username" />
    </div>
    <div>
      <input type="text" v-model="age" />
    </div>
    <button>Submit</button>
  </form>
</template>


<script>
export default {
  emits: ["user-updated"],
  data() {
    return {
      username: '',
      age: '',
    };
  },
  methods: {
    submitData() {
      this.$emit("user-updated", this.username, +this.age);
    },
  },
};
</script>

<style scoped>
</style>