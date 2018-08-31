// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader
// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Echarts from "echarts";
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
