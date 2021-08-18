<template>
  <h3>{{ counter }}</h3>
  <h3>More From Favorite Value Component</h3>
</template>

<script>
export default {
  computed: {
    // this is also bad ... state is being read directly...
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>