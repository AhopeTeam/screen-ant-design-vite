<script setup lang="ts">
import { setBodySize, refreshScale, getRemFontSize } from './utils/full-screen'
import { useStore } from 'vuex'
const store = useStore()
const dWidth = 1920
const dHeight = 1080

setBodySize(dWidth, dHeight)
refreshScale(dWidth, dHeight)
window.addEventListener('pageshow', e => {
  if (e.persisted) {
    // 浏览器后退的时候重新计算
    refreshScale(dWidth, dHeight)
  }
}, false)
window.addEventListener('resize', () => {
  refreshScale(dWidth, dHeight)
}, false)

const initRem = () => {
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.addEventListener(resizeEvt, () => {
    const s = getRemFontSize(dWidth, dHeight)
    document.documentElement.style.fontSize = `${s}px`
    // 存入vuex 实现比例值共享
    store.dispatch('rem/setFs', s)
  }, false)

  document.addEventListener('DOMContentLoaded', () => {
    const s = getRemFontSize(dWidth, dHeight)
    document.documentElement.style.fontSize = `${s}px`
    store.dispatch('rem/setFs', s)
  }, false)
  setTimeout(() => {
    const s = getRemFontSize(dWidth, dHeight)
    document.documentElement.style.fontSize = `${s}px`
    store.dispatch('rem/setFs', s)
  }, 50)
}

initRem();
</script>

<template>
    <router-view></router-view>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
