import request from '@/config/axios'

export const getOrderPage = (params) => {
    return request.get({ url: '/order/orderMain/admin/page', params })
}

export const getOrderDetail = (id) => {
    return request.get({ url: `/order/orderMain/admin/detail?id=${id}`})
}