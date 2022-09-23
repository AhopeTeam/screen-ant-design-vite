/*
 * @Description: 页面
 * @Author: 丁飞洋
 * @Date: 2022-08-16 17:43:37
 * @LastEditTime: 2022-09-23 10:43:01
 * @LastEditors: 丁飞洋
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    
})
