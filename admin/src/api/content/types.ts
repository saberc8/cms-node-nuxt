export interface IColumn {
  name: string
  value: string
}
export interface INews {
  title: string
  subtitle?: string
  content: string
  description?: string
  author?: string
  source?: string
  cover?: string
  time?: string
  remark?: string
  column: IColumn
}
