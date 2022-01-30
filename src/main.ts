import {createApp} from 'vue';
import App from './App.vue';
import VueFeather from 'vue-feather'
import './index.css';

const vueApp = createApp(App)
vueApp.component(VueFeather.name as string, VueFeather)
vueApp.mount('#app')
