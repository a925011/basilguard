import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevManage from '../components/post.vue'
import Yuzhi from '../components/yuzhi.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // home
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // about
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/excel1',
    name: 'excel',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DataView.vue')
  },
  {
    path: '/excel2',
    name: 'excel2',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShiduView.vue')
  },
  {
    path: '/echart',
    name: 'ehart',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EchartsView.vue')
  },
  {
    path: '/app1',
    name: 'app',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/connect1.vue')
  },
  {
    path: '/zhiwu',
    name: 'zhiwu',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ZhiwuView.vue')
  },
  {
    path: '/guanyuwomen',
    name: 'guanyuwomen',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Guanyuwomen.vue')
  },
  {
    path: '/bangzhu',
    name: 'bangzhu',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bangzhu.vue')
  },
  {
    path: '/post',
    name: 'post',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DevManage
  },
  {
    path: '/yuzhi',
    name: 'yuzhi',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Yuzhi
  },
  {
    path: '/erweima',
    name: 'QrCodeComponent',
    // help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/eee.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
