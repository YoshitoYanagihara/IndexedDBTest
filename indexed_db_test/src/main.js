import Vue from 'vue';
import App from './App.vue';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', required);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
