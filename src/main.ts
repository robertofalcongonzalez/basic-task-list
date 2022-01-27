import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import VueFeather from 'vue-feather'

const vueApp = createApp(App)
vueApp.component(VueFeather.name as string, VueFeather)
vueApp.mount('#app')
