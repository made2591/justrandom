import Vue from 'vue';
import VueMaterial from 'vue-material';
import '../node_modules/vue-material/dist/vue-material.min.css';
import App from './App.vue';
import '../node_modules/materialize-css/sass/materialize.scss';
// eslint-disable-next-line
import '../node_modules/materialize-css/dist/js/materialize.min.js';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  render: h => h(App),
}).$mount('#app');
