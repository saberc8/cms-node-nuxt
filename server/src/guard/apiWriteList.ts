// api白名单，不需要登录就可以访问的接口
const apiWriteList: string[] = [
  '/api/user/login',
  '/api/user/add',
  '/api/user/initDatabase',
  '/api/column/list',
]

export default apiWriteList
