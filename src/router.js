import Vue from 'vue'
import Router from 'vue-router'
import Base from './App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      name: 'home',
      component: Base
    }
  ]
})