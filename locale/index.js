import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import myZh from './zh'
import myEn from './en'
// 自动设置语言
export const navLang = navigator.language
export const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
export const lang = window.localStorage.getItem('language') || localLang || 'zh-CN'

export const messages = {
  en: Object.assign({}, myEn, enLocale),
  zh: Object.assign({}, myZh, zhLocale)
}

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'zh',
  messages,
  silentTranslationWarn: true
})
