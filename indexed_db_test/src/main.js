import Vue from 'vue';
import App from './App.vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
extend('required', required);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
