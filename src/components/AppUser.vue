<template>
  <h2>Name: {{ username }}</h2>
  <h2>Age: {{ age }}</h2>
</template>


<script>
export default {
  emits: [],
  props: {
    username: { type: String, required: true },
    age: { type: Number, required: true },
  },
  methods: {},
};
</script>

<style scoped>
</style>