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
  //emits: ['toggle-favorite',], // a more simple way of documenting what custom events are emitted
  // below is a more complex way which can also validate the event...
  emits: {
    'toggle-favorite': function(id) {
      // this is a validation function for the toggle-favorite event
      if(id) {
        return true;
      }
      else {
        console.log('Id is missing');
        return false;
      }
    },
    },
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
