import './bootstrap';

import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { createI18n } from './i18n';

const app = createApp(App);

app.use(createPinia());
app.use(createI18n());
app.use(router);

app.mount('#app');
