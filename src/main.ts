import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:uno.css'
import 'element-plus/theme-chalk/src/message.scss'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(createPinia())
app.use(createHead())
app.use(router)
app.mount('#app')
