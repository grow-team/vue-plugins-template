import Vue from 'vue'
import Demo from '../index'
import App from './App.vue';

Vue.use(Demo);
new Vue({
  render: h => h(App)
}).$mount('#app');