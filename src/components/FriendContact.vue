<template>
  <li>
    <header>
      <h1>{{ name + (favorite ? ' (favorite)' : '') }}</h1>
    </header>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>{{ name + (favorite ? ' (favorite)' : '')}}</li>
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
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
  data() {
    return {
      detailsAreVisible: false,
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.favorite = !this.favorite;
    },
  },
};
</script>
