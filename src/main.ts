import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
createApp(App)
// 蚂蚁UI
.use(Antd)
.use(store)
.mount('#app')
