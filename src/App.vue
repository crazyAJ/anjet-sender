<template>
  <div class="app-wrapper">
    <Header />
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="cachedViews">
        <component :is="Component" :key="route.path" class="page-component" />
      </keep-alive>
    </router-view>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// 需要缓存的页面组件名称
const cachedViews = ref(['Home', 'About', 'Services', 'Contact'])
</script>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  background: #fff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.page-component {
  position: relative;
  width: 100%;
  flex: 1;
}


/* 淡入淡出过渡效果 - 几乎瞬间切换，无感知 */
.fade-enter-active {
  transition: opacity 0.05s ease;
}

.fade-leave-active {
  transition: opacity 0.05s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  pointer-events: none;
}

.fade-enter-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 1;
}

/* 滑动过渡效果 */
.slide-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  pointer-events: none;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(8px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
</style>

