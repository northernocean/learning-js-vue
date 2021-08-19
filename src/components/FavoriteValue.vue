<template>
  <h3>{{ counter }}</h3>
  <h3>More From Favorite Value Component</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>