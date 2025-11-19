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
  routes,
  // 滚动行为：每次导航时滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则使用保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则立即滚动到顶部
    return { top: 0 }
  }
})

// 全局后置守卫：确保离开 Contact 页面时移除 body 类名
router.afterEach((to, from) => {
  if (from.name === 'Contact') {
    // 从 Contact 页面离开时，移除类名
    document.body.classList.remove('contact-page-active')
  }
})

export default router