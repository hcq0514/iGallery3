// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
// import '../css/loading-bar.css';

Vue.use(VueAxios,axios);
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//自动给同一个vue项目的所有请求添加请求头
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('Bearer');
  if (token) {
    config.headers['Bearer'] = token;
  }
  return config;
})
