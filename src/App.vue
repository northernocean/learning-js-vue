<template>
  <main-header title="RememberMe"></main-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import MainHeader from './components/layouts/MainHeader.vue';

export default {
  components: {
    'stored-resources': StoredResources,
    'main-header': MainHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official VueJS Documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'learn to google...',
          link: 'https://www.google.com',
        },
      ],
    };
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