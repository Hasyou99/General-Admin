import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';
import store from './store/store'

import 'babel-polyfill' // 编译ES6API
import 'normalize.css/normalize.css' // 样式初始化

import ElementUI from 'element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
