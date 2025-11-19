import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css'

const app = createApp(App)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')

// 移动端禁止图片点击查看（包括logo）
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

if (isMobile()) {
  // 阻止所有图片的点击、长按、触摸等事件
  const preventImageInteraction = (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault()
      e.stopPropagation()
      return false
    }
  }

  // 监听各种事件
  document.addEventListener('click', preventImageInteraction, true)
  document.addEventListener('contextmenu', preventImageInteraction, true)
  document.addEventListener('touchstart', preventImageInteraction, true)
  document.addEventListener('touchmove', preventImageInteraction, true)
  document.addEventListener('touchend', preventImageInteraction, true)
  document.addEventListener('touchcancel', preventImageInteraction, true)
  
  // 阻止图片长按显示菜单
  document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault()
      return false
    }
  }, true)

  // 动态添加的图片也需要处理
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // 如果是图片元素
          if (node.tagName === 'IMG') {
            node.style.pointerEvents = 'none'
            node.style.touchAction = 'none'
            node.style.webkitTouchCallout = 'none'
            node.style.webkitUserSelect = 'none'
            node.style.userSelect = 'none'
          }
          // 查找子元素中的图片
          const images = node.querySelectorAll && node.querySelectorAll('img')
          if (images) {
            images.forEach((img) => {
              img.style.pointerEvents = 'none'
              img.style.touchAction = 'none'
              img.style.webkitTouchCallout = 'none'
              img.style.webkitUserSelect = 'none'
              img.style.userSelect = 'none'
            })
          }
        }
      })
    })
  })

  // 开始观察DOM变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}