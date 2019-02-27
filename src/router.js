import Vue from 'vue'
import Router from 'vue-router'
import underscore from 'vue-underscore'
import Base from './App.vue'

Vue.use(Router)
Vue.use(underscore)

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      name: 'home',
      component: Base
    }
  ]
})