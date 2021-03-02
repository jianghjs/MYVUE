// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import {Input, Select, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(Input)
Vue.use(Select)
Vue.use(Button)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add: function(state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
