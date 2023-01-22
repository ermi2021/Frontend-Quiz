import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/css/styles.css'

const app = createApp(App)

app.use(router)

app.use(createPinia()).mount('#app')
