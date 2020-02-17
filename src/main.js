// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// element-ui
import './assets/blue_theme/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// momemt
import moment from 'vue-moment'
// v-region
import vRegion from 'v-region'
// live2d
import VueLive2d from 'vue-live2d-model'
// markdown mavon-editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// Axios
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(moment)
Vue.prototype.$Moment = moment
Vue.use(vRegion)
Vue.use(VueLive2d)
Vue.use(mavonEditor)
Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
