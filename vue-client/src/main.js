import { createApp } from 'vue'
import App from './App.vue'

import { router } from '../router';  //라우터 추가

createApp(App).use(router).mount('#app');
