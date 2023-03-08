import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import './assets/main.css'

import AOS from "aos"
import "aos/dist/aos.css"

new Vue({
    created() {
        AOS.init();
    }
})

const app = createApp(App)

app.use(router)

app.mount('#app')