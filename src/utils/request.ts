/*
 * @Description: 接口统一处理页面
 * @Author: 丁飞洋
 * @Date: 2022-08-18 16:15:37
 * @LastEditTime: 2022-08-21 19:15:52
 * @LastEditors: 丁飞洋
 */
import axios,{AxiosRequestConfig} from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import Cookies from 'js-cookie'


// create an axios instance
// interface Service {
//     creat( {
//         baseURL: string,
//         withCredentials: boolean,
//         timeout: number
//     })
// }
const service = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
})
// request interceptor
interface Config {
    headers: {
        'Content-Type': string,
        'token': string
    }
}

service.interceptors.request.use(
    (config:AxiosRequestConfig):AxiosRequestConfig => {
        // 配置请求头
        config.headers = {   // 传参方式表单
            'Content-Type': 'application/json;charset=UTF-8',        // 传参方式json
            // 'token': '80c483d59ca86ad0393cf8a98416e2a1',
            'X-Token': '1dd1e7133379499c9d4043c0f287a1ea'              // 这里自定义配置，这里传的是token
        };
        return config;
    },
    (error: unknown): unknown => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

interface Response {
    data: {
        retcode: string | number,
        code: string | number,
        msg: string
    }
}
// response interceptor
service.interceptors.response.use(
    (response: Response) => {
        const res = response.data
        // res = response.data
        var tag: boolean = false
        if (typeof res.retcode !== 'undefined') {
            tag = (res.retcode != 0)
        }
        if ((typeof res.code) !== 'undefined') { // mock环境
            tag = res.code !== 0 && res.code !== 200
        }
        //端口报错或失效提示
        if (tag) {
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //     MessageBox.confirm('你已经登出，不能保持在本页，请重新登录', '您已经登出', {
            //         confirmButtonText: '重新登录',
            //         cancelButtonText: '取消登录',
            //         type: 'warning'
            //     }).then(() => {
            //         store.dispatch('user/resetToken').then(() => {
            //             location.reload()
            //         })
            //     })
            // }
            return Promise.reject(res.msg || '错误01')
        } else {
            return res
        }
    },
    // 接口未请求成功弹出的错误详情
    (error: unknown): unknown => {
        console.log('err' + error) // for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service
