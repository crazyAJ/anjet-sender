import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'
import enUS from './locales/en-US.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  },
  // 配置选项
  missingWarn: false,
  fallbackWarn: false,
  // 禁用链接格式解析（如果不需要使用@:语法）
  // 这样可以避免某些特殊字符被误解析为链接格式
  warnHtmlMessage: false
})

export default i18n
