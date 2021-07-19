<template>
  <li>
    <header>
      <h1>{{ name + (isFavorite ? ' (favorite)' : '') }}</h1>
    </header>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>{{ name }}</li>
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true},
    phoneNumber: {
      type: String,
      required: true},
    emailAddress: {
      type: String,
      required: true},
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: [
    'toggle-favorite',
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
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>
