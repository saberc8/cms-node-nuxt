import { ElMessage } from 'element-plus'
import { hash } from 'ohash'

const apiUrl = import.meta.env.VITE_API_URL

export const fetchConfig = {
  baseURL: `${apiUrl}api/`,
  headers: {
    'Content-Type': 'application/json',
  },
}

// 请求体封装
function useGetFetchOptions(options: any = {}) {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL
  options.params && Object.assign(options.params)
  options.body && Object.assign(options.body)
  options.server = true

  return options
}

// http请求封装
export async function useHttp(key: string, url: string, options: any = {}) {
  options = useGetFetchOptions(options)

  options.key = key ?? hash(JSON.stringify(options) + url)

  const error = ref(null)

  return await $fetch(url, options)
    .then((res: any) => {
      // 这里修改自定义的返回数据
      if (res.code === 0) {
        return res.result
      } else {
        error.value = res.msg
        if (process.client) {
          ElMessage.error(res.msg || '服务端错误')
        }
        return { error }
      }
    })
    .catch((err) => {
      const msg = err
      if (process.client) {
        ElMessage.error(msg || '服务端错误')
      }
      error.value = msg
      return { error }
    })
}
type SearchParams = typeof URLSearchParams
type UseFetchOptions = {
  key?: string
  method?: string
  query?: SearchParams
  params?: Omit<SearchParams, 'prototype'>
  body?: RequestInit['body'] | Record<string, any>
  headers?: { key: string; value: string }[]
  baseURL?: string
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  pick?: string[]
}
interface BaseResponse<T> {
  code: 0 | 1 | 400 | 401 | 403 | 500 | 502
  msg: string
  data: T
}

// GET请求
export function useHttpGet<T>(
  key: string,
  url: string,
  options: UseFetchOptions = {},
): Promise<T> {
  options.method = 'GET'
  return useHttp(key, url, options)
}

// POST请求
export function useHttpPost<T>(
  key: string,
  url: string,
  options: UseFetchOptions = {},
): Promise<T> {
  options.method = 'POST'
  return useHttp(key, url, options)
}
