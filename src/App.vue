<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      {{ resource.id }}
    </li>
  </ul>
</template>

<script>
  export default {
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
          }
        ]
      };
    },
  }
</script>
