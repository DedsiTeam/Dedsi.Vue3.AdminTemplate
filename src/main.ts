import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import router from './router';

const vue3App = createApp(App);

vue3App
.use(Antd)
.use(router)
.mount('#vue3-app');
