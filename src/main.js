import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home
    },
    {
      path: '/:id',
      name: 'myRepo',
      component: () => import('./components/Repo.vue')
    }
  ]
})

createApp(App).use(router).mount('#app')
