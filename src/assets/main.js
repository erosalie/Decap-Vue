// src/main.js
import Vue from 'vue';
import App from './App.vue';
import './assets/global.css'; // Import your global stylesheet here

new Vue({
  render: h => h(App),
}).$mount('#app');
