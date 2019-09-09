import Vue from 'vue'
import App from './App'
import router from './router'
import layer from 'vue-layer'
import { Table, TableColumn, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-layer/lib/vue-layer.css'
import 'styles/reset.css'

Vue.config.productionTip = false
Vue.prototype.$layer = layer(Vue);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
