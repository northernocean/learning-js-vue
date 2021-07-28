<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
      :mode="selectedTab == 'stored-resources' ? null : 'flat'">
      Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      :mode="selectedTab == 'add-resource' ? null : 'flat'">
      Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    'stored-resources': StoredResources,
    'add-resource': AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
};
</script>
