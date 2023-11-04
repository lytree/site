import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import 'uno.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/css/index.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(createHead())
app.use(router)
app.mount('#app')
