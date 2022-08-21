import request from '@/utils/request'

export function getCode(params: any) {
    return request({
        url: 'dcflow/manager/user/admin/get',
        method: 'post',
        data: params
    })
}
