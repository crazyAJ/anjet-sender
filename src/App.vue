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
</style>
