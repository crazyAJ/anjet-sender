<template>
  <div class="contact-page" :class="{ 'lang-en': isEnglish }">
    <main>
      <!-- Contact Content Section -->
      <section class="contact-content-section">
        <div class="content-overlay">
          <div class="container">
            <div class="contact-wrapper">
              <!-- Welcome Text -->
              <div class="welcome-content">
                <h1 class="welcome-title">{{ $t('contact.welcomeText') }}</h1>
                <p v-if="!isEnglish" class="welcome-subtitle">{{ $t('contact.welcomeTextEn') }}</p>
              </div>

              <!-- Action Buttons -->
              <div class="action-buttons">
                <a :href="`tel:${phoneForTel}`" class="contact-button phone-button">
                  <el-icon class="button-icon"><Phone /></el-icon>
                  <div class="button-text-wrapper">
                    <span v-if="!isEnglish" class="button-text">{{ $t('contact.phoneButton') }}</span>
                    <span v-if="isEnglish" class="button-text">{{ $t('contact.phoneButtonEn') }}</span>
                  </div>
                </a>
                <a :href="`mailto:${$t('footer.email')}`" class="contact-button email-button">
                  <el-icon class="button-icon"><Message /></el-icon>
                  <div class="button-text-wrapper">
                    <span v-if="!isEnglish" class="button-text">{{ $t('contact.emailButton') }}</span>
                    <span v-if="isEnglish" class="button-text">{{ $t('contact.emailButtonEn') }}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { Phone, Message } from '@element-plus/icons-vue'

defineOptions({
  name: 'Contact'
})

const { locale, t } = useI18n()
const route = useRoute()
const isEnglish = computed(() => locale.value === 'en-US')

// 获取电话号码，移除空格用于tel:链接
const phoneForTel = computed(() => {
  const phone = t('footer.phone')
  return phone ? phone.replace(/\s+/g, '') : ''
})

// 移动端 Contact 页面时，给 body 添加类名以覆盖页脚样式
const updateBodyClass = () => {
  if (window.innerWidth <= 768 && route.name === 'Contact') {
    document.body.classList.add('contact-page-active')
  } else {
    document.body.classList.remove('contact-page-active')
  }
}

const removeBodyClass = () => {
  document.body.classList.remove('contact-page-active')
}

onMounted(() => {
  updateBodyClass()
  window.addEventListener('resize', updateBodyClass)
})

onActivated(() => {
  // keep-alive 激活时
  updateBodyClass()
  window.addEventListener('resize', updateBodyClass)
})

onDeactivated(() => {
  // keep-alive 失活时，确保移除类名
  removeBodyClass()
  window.removeEventListener('resize', updateBodyClass)
})

onUnmounted(() => {
  // 组件卸载时（非 keep-alive 情况）
  removeBodyClass()
  window.removeEventListener('resize', updateBodyClass)
})
</script>

<style scoped>
.contact-page {
  min-height: 60vh;
  padding-top: 0;
  background: #fff;
}

.contact-page main {
  height: auto;
  min-height: 0;
}

/* Contact Content Section */
.contact-content-section {
  position: relative;
  min-height: 60vh;
  margin-top: 80px;
  background-image: url('/images/contact/contact-containers.png');
  background-repeat: repeat;
  background-size: auto;
}

.content-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.contact-wrapper {
  max-width: 900px;
  width: 100%;
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Welcome Content */
.welcome-content {
  margin-bottom: 60px;
  min-height: 125px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lang-en .welcome-content {
  margin-bottom: 60px;
  min-height: 125px;
  height: 125px;
}

.welcome-title {
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.4;
}

.lang-en .welcome-title {
  font-size: 42px;
}

.welcome-subtitle {
  font-size: 24px;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.lang-en .welcome-subtitle {
  font-size: 22px;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  height: 44px;
  align-items: center;
}

.lang-en .action-buttons {
  gap: 30px;
  height: 44px;
}

.contact-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 120px;
  height: 44px;
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.lang-en .contact-button {
  width: 120px;
  height: 44px;
  padding: 10px 20px;
  gap: 10px;
}

.button-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  line-height: 1.2;
  margin-top: 2px;
  height: 20px;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
}

.lang-en .button-text-wrapper {
  margin-top: 2px;
  height: 20px;
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.contact-button:hover::before {
  left: 100%;
}

.phone-button {
  background: linear-gradient(135deg, #67c23a 0%, #85ce61 100%);
  color: #fff;
}

.phone-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(103, 194, 58, 0.4);
}

.email-button {
  background: linear-gradient(135deg, #409eff 0%, #66b1ff 100%);
  color: #fff;
}

.email-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(64, 158, 255, 0.4);
}

.button-icon {
  font-size: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-en .button-icon {
  font-size: 16px;
}

.button-text {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  display: inline-block;
  white-space: nowrap;
}

.lang-en .button-text {
  font-size: 13px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .contact-content-section {
    min-height: 60vh;
  }

  .content-overlay {
    min-height: 60vh;
    padding: 40px 15px;
  }

  .contact-wrapper {
    max-width: 100%;
  }

  .welcome-content {
    margin-bottom: 40px;
    min-height: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lang-en .welcome-content {
    margin-bottom: 40px;
    min-height: 60px;
    height: 60px;
  }

  .welcome-title {
    font-size: 20px;
    margin-bottom: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lang-en .welcome-title {
    font-size: 18px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }

  .welcome-subtitle {
    display: none;
  }

  .lang-en .welcome-subtitle {
    display: block;
    font-size: 13px;
  }

  .action-buttons {
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .lang-en .action-buttons {
    gap: 20px;
  }

  .contact-button {
    max-width: none;
    padding: 12px;
  }

  .lang-en .contact-button {
    padding: 11px;
  }

  .button-text-wrapper {
    display: none;
  }

  .button-icon {
    font-size: 24px;
  }

  .lang-en .button-icon {
    font-size: 24px;
  }
}
</style>

<!-- 移动端 Contact 页面页脚样式覆盖 -->
<style>
@media (max-width: 768px) {
  body.contact-page-active .app-wrapper footer.footer {
    margin-top: 0 !important;
  }
}
</style>
