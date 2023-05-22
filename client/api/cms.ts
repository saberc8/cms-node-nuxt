// 获取栏目列表
export const useColumnList = (params: PageRequestParam) =>
  useHttpGet('ColumnList', 'column/list', { lazy: true, params })

  // 获取banner列表

export const useBannerList = (params: PageRequestParam) =>
useHttpGet('BannerList', 'banner/list', { lazy: true, params })
// 获取新闻列表
export const useNewsList = (params: PageRequestParam) =>
  useHttpGet('NewsList', 'news/list', { lazy: true, params })
  