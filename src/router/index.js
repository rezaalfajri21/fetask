import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function importComponent(path) {
  return () => import (`../components/${path}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: importComponent('Login'),
  },
  {
    path: '/home',
    name: 'Home',
    component: importComponent('Home'),
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: importComponent('Workspace'),
  },
  {
    path: '/account',
    name: 'Account',
    component: importComponent('Account'),
  },
  {
    path: '/application',
    name: 'Application',
    component: importComponent('Application'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
