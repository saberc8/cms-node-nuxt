interface PageRequestParam {
  page: number
  size: number
}

interface PageResult<T> {
  list: T[]
  total: number
}

interface ColumnItem {
  id: number
  name: string
}

interface BannerItem {
  id: string
  name: string
  cover_url: string
  createdAt: number
  description: string
  link_url: string
  remark: string
  source: string
  subtitle: string
  title: string
  updatedAt: number
}
