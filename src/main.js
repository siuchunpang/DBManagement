import Vue from 'vue'
import App from './App'
import router from './router'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import 'styles/reset.css'

Vue.config.productionTip = false
Vue.prototype.$layer = layer(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
