<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo-section">
          <img src="/images/home/logo.jpg" alt="Logo" class="logo-img" />
        </div>
        <nav class="header-nav">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
          >
            {{ $t(item.i18nKey) }}
          </router-link>
        </nav>
        <div class="header-actions">
          <div class="mobile-menu-toggle" @click="toggleMobileMenu">
            <el-icon class="menu-icon"><Menu /></el-icon>
          </div>
          <el-dropdown @command="handleLanguageChange" trigger="click">
            <span class="language-selector">
              <span>{{ currentLanguage }}</span>
              <el-icon class="arrow"><CaretBottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
                <el-dropdown-item command="en-US">English</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          {{ $t(item.i18nKey) }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CaretBottom, Menu } from '@element-plus/icons-vue'

const { locale } = useI18n()

const navItems = [
  { path: '/', i18nKey: 'nav.home' },
  { path: '/about', i18nKey: 'nav.aboutUs' },
  { path: '/services', i18nKey: 'nav.services' },
  { path: '/contact', i18nKey: 'nav.contactUs' }
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const currentLanguage = computed(() => {
  return locale.value === 'zh-CN' ? '简体中文' : 'English'
})

const handleLanguageChange = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  min-height: 80px;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 40px;
  flex: 1;
  justify-content: flex-start;
  margin-left: 140px;
  height: 100%;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 1;
}

.nav-link:hover {
  color: #1890ff;
}

.nav-link.router-link-active {
  color: #1890ff;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1890ff;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background 0.3s;
  transform: translateY(2px);
}

.language-selector:hover {
  background: #f5f5f5;
}

.language-selector .arrow {
  font-size: 12px;
}

.mobile-menu-toggle {
  display: none;
  cursor: pointer;
  padding: 5px;
  margin-right: 10px;
  align-items: center;
  transform: translateY(2px);
}

.menu-icon {
  font-size: 24px;
  color: #333;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-menu-open {
  max-height: 400px;
}

.mobile-nav-link {
  display: block;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: #f5f5f5;
  color: #1890ff;
}

@media (max-width: 768px) {
  .logo-img {
    height: 40px;
  }

  .header-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .language-selector span {
    display: none;
  }
}
</style>