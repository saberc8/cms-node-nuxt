import { createAxios } from '@/utils/request'
const request = createAxios({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getGroupList = (params: any): Promise<any> =>
  request.get('group/list', { params })

export const addGroup = (data: any): Promise<any> =>
  request.post('group/add', data)

