interface PageRequestParam {
  page: number
  size: number
}

interface PageResult<T> {
  rows: T[]
  page?: {
    limit: number
    page: number
    total: number
  }
}

interface ColumnItem {
  id: number
  name: string
}
