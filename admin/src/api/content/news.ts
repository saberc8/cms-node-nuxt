import { createAxios } from '@/utils/request'
const request = createAxios({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getNewsList = (params: any): Promise<any> =>
  request.get('news/list', { params })

export const addNews = (data: any): Promise<any> =>
  request.post('news/add', data)

export const updateNews = (data: any): Promise<any> =>
request.post('news/update', data)

export const deleteNews = (data: any): Promise<any> =>
request.post('news/delete', data)
