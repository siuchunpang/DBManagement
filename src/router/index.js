import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import Reset from '@/pages/reset/Reset'
import Index from '@/pages/index/Index'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
