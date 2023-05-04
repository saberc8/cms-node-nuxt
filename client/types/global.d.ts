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
