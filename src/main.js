import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components/global/index.js' 


createApp(App).mount('#app')
const app = createApp(App)
app.use(globalComponents)
app.mount('#app')