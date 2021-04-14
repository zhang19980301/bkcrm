import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import Md5s from './assets/js/crypto'
import axios from './assets/js/http'

const app = createApp(App)
app.config.globalProperties.$Md5s = Md5s
app.config.globalProperties.$HTTP = axios.request
installElementPlus(app)
app.use(store).use(router).mount('#app')