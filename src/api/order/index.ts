import request from '@/config/axios'

export const getOrderPage = (params) => {
    return request.get({ url: '/order/orderMain/admin/page', params })
}

export const getOrderDetail = (orderNo, identity) => {
    return request.get({ url: `/order/orderMain/detail?orderNo=${orderNo}&identity=${identity}`})
}