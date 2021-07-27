import { createApp } from 'vue';

// Global components
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

// Create the App
const app = createApp(App);

// Register Global Components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

// Mount the App
app.mount('#app');
