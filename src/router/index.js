import { createRouter, createWebHistory } from 'vue-router'
import ApacheComponent from '@/components/ApacheComponent.vue'
import nodeJsComponent from '@/components/nodeJsComponent.vue'
import mongoDbComponent from '@/components/mongoDbComponent.vue'
import MySqlComponent from '@/components/MySqlComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/apache',
      name: 'apache',
      component: ApacheComponent
    },
    {
      path: '/nodeJs',
      name: 'nodejs',
      component: nodeJsComponent
    },
    {
      path: '/mysql',
      name: 'mysql',
      component: MySqlComponent
    },
    {
      path: '/mongoDb',
      name: 'mongoDB',
      component: mongoDbComponent
    }
  ]
})

export default router
