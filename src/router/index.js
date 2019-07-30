import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import Reset from '@/pages/reset/Reset'

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
    }
  ]
})
