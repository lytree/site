import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto/routes'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'

// import './styles/main.scss'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(createHead())
app.use(router)
app.mount('#app')
