<template>
  <div ref="chartEl" style="height: 100%; width: 100%" />
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  ref,
  computed,
  watch,
  onBeforeMount,
  onUnmounted,
  onMounted,
} from 'vue'
import * as echarts from 'echarts'
import { useStore } from 'vuex'

function isArray(v: any) {
  return Object.prototype.toString.call(v) === '[object Array]'
}

function processFormatter(obj: any) {
  for (let p in obj) {
    if (isArray(obj[p])) {
      obj[p].map((o: any) => {
        processFormatter(o)
      })
    } else if (typeof obj[p] === 'object') {
      if (p === 'formatter' && obj[p].text) {
        obj[p] = new Function(obj[p].text)
      } else if (
        p === 'normal' &&
        obj[p].color &&
        typeof obj[p].color == 'string' &&
        obj[p].color.indexOf('arguments') != -1
      ) {
        obj[p].color = new Function(obj[p].color)
      } else {
        processFormatter(obj[p])
      }
    }
  }
}
const prop = defineProps({
  option: { type: Object, default: {} },
  charting: { type: Boolean, default: false },
  merge: { type: Boolean, default: false },
  rem: { type: Boolean, default: true },
})
const store = useStore()
let chart: echarts.ECharts | null = null
let innerOption = {}
const chartEl = ref<HTMLDivElement>() // echarts 容器
let px2rem_fs = computed(() => {
  return store.state.rem ? store.state.rem.fs : 100
})
const emits = defineEmits(['chart-click']) // 定义echarts 点击事件
watch(px2rem_fs, (oldVal, newVal) => {
  showChart()
})

watch(
  () => prop.option,
  (oldVal, newVal) => {
    if (newVal) {
      showChart()
    }
  },
  { immediate: true }
)

onMounted(() => {
  chart = echarts.init(chartEl.value as HTMLDivElement, 'shine')
  showChart()
  if (!prop.rem) initResizeEvent()
  chart.on('click', (params: any) => {
    emits('chart-click', params, chart)
  })
})

onUnmounted(() => {
  if (chart) {
    chart.dispose()
    chart = null
  }

  if (!prop.rem) destroyResizeEvent()
})
// 将以下属性的rem转为px
let toRem = (opt: any) => {
  let keys = [
    'fontSize',
    'borderWidth',
    'width',
    'symbolSize',
    'barWidth',
    'borderDistance',
    'itemWidth',
    'itemHeight',
    'size',
    'length',
    'distance',
    'lineHeight',
  ]
  for (let p in opt) {
    if (isArray(opt[p])) {
      opt[p].map((o: any) => {
        toRem(o)
      })
    } else if (typeof opt[p] === 'object') {
      toRem(opt[p])
    } else {
      if (keys.indexOf(p) != -1) {
        opt[p] = opt[p] * px2rem_fs.value
      }
    }
  }
}
// 图表展示
let timer: any = null
let showChart = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setTimeout(() => {
    if (chart && prop.option) {
      innerOption = JSON.parse(JSON.stringify(prop.option))
      if (prop.rem) toRem(innerOption)
      processFormatter(innerOption)
      chart.setOption(innerOption, !prop.merge)
      chart.resize()
    }
  }, 200)
}

let initResizeEvent = () => {
  window.addEventListener('resize', showChart)
}

let destroyResizeEvent = () => {
  window.removeEventListener('resize', showChart)
}
</script>

<style scoped></style>
