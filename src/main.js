import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/repositories/:name',
      name: 'myRepo',
      component: () => import('./components/Repo.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('./components/Error.vue')
    }
  ]
})


createApp(App).use(router).mount('#app');