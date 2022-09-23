<template>
  <AdaptEchart :option="option" style="height: 10.80rem;width: 19.20rem" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AdaptEchart from '@/components/AdaptChart.vue'
let option = ref()
option.value = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
</script>
