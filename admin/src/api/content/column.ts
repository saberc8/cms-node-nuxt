import { createAxios } from '@/utils/request'
const request = createAxios({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getColumnList = (params: any): Promise<any> =>
  request.get('column/list', { params })

export const addColumn = (data: any): Promise<any> =>
  request.post('column/add', data)

export const updateColumn = (data: any): Promise<any> =>
request.post('column/update', data)

export const deleteColumn = (data: any): Promise<any> =>
request.post('column/delete', data)
