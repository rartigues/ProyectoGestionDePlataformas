import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';


import createRouter from './pages/routes.js'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const store = createPinia()
const router = createRouter(createWebHistory())
const app = createApp(App)

app.use(store)
app.use(router)
app.use(BootstrapVue3)
app.component('vue-navigation-bar', VueNavigationBar);

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";