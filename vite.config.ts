
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const url = ''
// const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
        proxy: {
            '/dcflow': {
                target: 'http://47.104.100.118:8080/dcflow', //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
