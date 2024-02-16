import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './css/reset.css'
import './css/fonts.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')