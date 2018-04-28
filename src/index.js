import Vue from 'vue';
import VueHead from 'vue-head';
import App from './components/App.vue';

Vue.use(VueHead);
new Vue({
  el: '#app',
  template: "<App/>",
  components: { 
    'App': App 
  }
})