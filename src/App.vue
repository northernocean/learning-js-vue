<template>
  <main-header title="RememberMe"></main-header>
  <the-resources></the-resources>
</template>

<script>
import MainHeader from './components/layouts/MainHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    'main-header': MainHeader,
    'the-resources': TheResources,
  },
};
</script>

<style scoped>
li {
  margin: 0.5rem;
  list-style-type: none;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
</style>