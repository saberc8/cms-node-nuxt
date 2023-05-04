import { createAxios } from '@/utils/request'
const request = createAxios({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getBannerList = (params: any): Promise<any> =>
  request.get('banner/list', { params })

export const addBanner = (data: any): Promise<any> =>
  request.post('banner/add', data)

export const updateBanner = (data: any): Promise<any> =>
request.post('banner/update', data)

export const deleteBanner = (data: any): Promise<any> =>
request.post('banner/delete', data)
