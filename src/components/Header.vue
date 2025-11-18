<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo-section">
          <img src="/images/home/logo.jpg" alt="Logo" class="logo-img" />
        </div>
        <div class="header-actions">
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
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { CaretBottom } from '@element-plus/icons-vue'

const { locale } = useI18n()

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
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
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
}

.language-selector:hover {
  background: #f5f5f5;
}

.language-selector .arrow {
  font-size: 12px;
}

@media (max-width: 768px) {
  .logo-img {
    height: 40px;
  }

  .language-selector span {
    display: none;
  }
}
</style>