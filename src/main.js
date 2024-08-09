import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
import PrimeVue from 'primevue/config';
import { createHead } from '@vueuse/head';

import './assets/style.css'
import './assets/carousel.css'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App)
const head = createHead();

app.use(head)
app.use(router)
app.use(PrimeVue)
app.mount('#app');
