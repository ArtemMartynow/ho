import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components/global/index.js' 

import './assets/fonts.css'
import './assets/text.css'
import './assets/btns.css'
import './assets/header.css'
import './assets/home-page.css'
import './assets/about.css'

const app = createApp(App)
app.use(globalComponents)
app.mount('#app')