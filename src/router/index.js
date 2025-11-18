import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局后置守卫：确保离开 Contact 页面时移除 body 类名
router.afterEach((to, from) => {
  if (from.name === 'Contact') {
    // 从 Contact 页面离开时，移除类名
    document.body.classList.remove('contact-page-active')
  }
})

export default router