import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import index from '@/views/index'
const changeCity = () => import('@/views/changeCity')
const goodsList = () => import('@/views/goodsList')
const login = () => import('@/views/login')
const register = () => import('@/views/register')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/s/:name',
          name: 'goodsList',
          component: goodsList
        },
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }
  ]
})
