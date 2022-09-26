import request from '../utils/request'
// http://47.104.100.118:81/dcflow/manager/dataindex/getList
export function getCode(params: any) {
    return request({
        url: '/manager/dataindex/getList',
        method: 'post',
        data: params
    })
}
