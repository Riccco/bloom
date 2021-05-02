import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory, createRouter} from 'vue-router';
import NavTop from './components/TopNav.vue'

const history = createWebHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:NavTop}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
