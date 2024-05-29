import request from '@/config/axios'

export const getOrderPage = (params) => {
    return request.get({ url: '/order/orderMain/admin/page', params })
}