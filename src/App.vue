<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { setBodySize, refreshScale, getRemFontSize } from './utils/full-screen'
import { useStore } from 'vuex'
const store = useStore()
const dWidth = 1920,
  dHeight = 1080
const initScale = () => {
  setBodySize(dWidth, dHeight)
  refreshScale(dWidth, dHeight)
  window.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        refreshScale(dWidth, dHeight)
      }
    },
    false
  )
  window.addEventListener(
    'resize',
    function (e) {
      refreshScale(dWidth, dHeight)
    },
    false
  )
}
const initRem = () => {
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.addEventListener(
    resizeEvt,
    (o) => {
      var s = getRemFontSize(dWidth, dHeight)

      document.documentElement.style.fontSize = s + 'px'
      // 存入vuex 实现比例值共享
      store.dispatch('rem/setFs', s)
    },
    false
  )

  document.addEventListener(
    'DOMContentLoaded',
    (o) => {
      var s = getRemFontSize(dWidth, dHeight)
      document.documentElement.style.fontSize = s + 'px'
      store.dispatch('rem/setFs', s)
    },
    false
  )

  setTimeout((o) => {
    var s = getRemFontSize(dWidth, dHeight)
    document.documentElement.style.fontSize = s + 'px'
    store.dispatch('rem/setFs', s)
  }, 50)
}

initRem()
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
