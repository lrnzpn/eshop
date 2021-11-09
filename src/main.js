import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(router) //router for link/view management
app.mount('#app')
