<<<<<<< HEAD
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
=======
<!--
 * @Descriptionyle
 * @Author: 丁飞洋
 * @Date: 2022-08-16 17:43:37
 * @LastEditTime: 2022-09-23 14:24:21
 * @LastEditors: 丁飞洋
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { getCode } from '../api/text';
const store = useStore();
const count = ref(0);
const fs = ref(store.state.rem.fs);
// let param: { mountType: number, name: string,page:number,size:number,sort:number,tree:string,type:number }
const param = {
    mountType: 0,
    name: '',
    page: 1,
    size: 20,
    sort: 0,
    tree: '',
    type: 4,
};

//请求
onMounted(() => {
    getCode(param)
        .then((res: unknown) => {
            console.log(res);
        })
        .catch((err: unknown) => {
            console.log(err);
        });
});
// let param = {
//     code: row,
// };
// stopRunn(param)
//     .then((response) => {
//         this.$message({
//             message: '停止成功',
//             type: 'success',
//         });
//     })
//     .catch((err) => {
//         this.$message({
//             message: '停止失败',
//         });
//     });
</script>

<template>
<<<<<<< HEAD
    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <h2 class="rem">我是vuex的值：{{ fs }}</h2>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>
=======
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <h2 class="rem">我是vuex的值：{{ fs }}</h2>
    <p>
      Edit123
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
>>>>>>> fab31545761659de36f933c4883f3dc6bbb01a73

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
.rem {
    font-size: 0.8rem;
}
</style>
<style lang="less" scoped>
.card {
    color: antiquewhite;
    .rem {
        color: aqua;
    }
    p {
        color: blue;
    }
    button {
        color: gray;
    }
}
</style>
>>>>>>> b8e36bc20e1b4bc0bd547a2e0a10b93993e9f6d9
