import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function load(component) {
  return resolve => require([`./views/${component}/index`], resolve)
}

export default new Router({
  mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'login',
        component: load('Login'),
      }
    ]
})