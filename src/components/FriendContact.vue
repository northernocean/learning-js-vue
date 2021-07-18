<template>
  <li>
    <header>
      <h1>{{ name }}</h1>
    </header>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>{{ name }}</li>
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
