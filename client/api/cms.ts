// 获取栏目列表
export const useColumnList = (params: PageRequestParam) =>
  useHttpGet('ColumnList', 'column/list', { lazy: true, params })
