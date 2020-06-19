import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Market from '../views/Market.vue'
import HotelManagement from '../views/HotelManagement.vue'
import SchoolManagement from '../views/SchoolManagement.vue'
import Ecommerce from '../views/Ecommerce'
import RealEstate from '../views/RealEstate'
import Hospital from '../views/Hospital'
import Inventory from '../views/Inventory'
import Contact from '../views/Contact'
import Affiliate from '../views/Affiliate'
import Register from '../views/Register'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Request from '../views/Request'
import Profile from '../views/Profile'
import Withdrawal from '../views/Withdrawal'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/marketplace',
    name: 'Market',
    component: Market
  },
  {
    path: '/hotel-management-solution',
    name: 'HotelManagement',
    component: HotelManagement
  },
  {
    path: '/school-management-solution',
    name: 'SchoolManagement',
    component: SchoolManagement
  },
  {
    path: '/ecommerce-solution',
    name: 'Ecommerce',
    component: Ecommerce
  },
  {
    path: '/real-estate-solution',
    name: 'RealEstate',
    component: RealEstate
  },
  {
    path: '/medical-solution',
    name: 'Hospital',
    component: Hospital
  },
  {
    path: '/inventory-solution',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/affiliate',
    name: 'Affiliate',
    component: Affiliate
  },
  {
    path: '/affiliate/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/affiliate/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard/overview',
    name: 'dashboard',
    component: Dashboard,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/profile',
    name: 'profile',
    component: Profile,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/withdrawal',
    name: 'Withdrawal',
    component: Withdrawal,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/request',
    name: 'Request',
    component: Request
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
