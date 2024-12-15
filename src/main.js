import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Initialize WebSocket
const socket = new WebSocket('ws://localhost:8080/ws');

// Set up WebSocket event handlers
socket.onopen = () => console.log('WebSocket connected');
socket.onerror = (error) => console.error('WebSocket error:', error);
socket.onmessage = (message) => console.log('Message received:', message.data);

// Create the Vue application
const app = createApp(App);

// Make WebSocket globally accessible
app.config.globalProperties.$socket = socket;

app.use(router);
app.mount('#app');