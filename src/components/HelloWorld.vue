<!--
 * @Descriptionyle
 * @Author: 丁飞洋
 * @Date: 2022-08-16 17:43:37
 * @LastEditTime: 2022-09-23 10:36:28
 * @LastEditors: 丁飞洋
-->
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const count = ref(0);
const fs = ref(store.state.rem.fs);
</script>

<template>
    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <h2 class="rem">我是vuex的值：{{ fs }}</h2>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

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
    p{
        color: blue;
    }
    button{
        color: gray;
    }
}
</style>