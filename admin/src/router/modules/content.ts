export default {
  path: '/content',
  name: 'content',
  component: () => import('@/layout/index.vue'),
  redirect: '/content/column',
  meta: {
    title: '内容管理',
    icon: 'icon-home',
  },
  children: [
    {
      path: '/content/column',
      name: 'content-column',
      component: () => import('@/views/content/column/index.vue'),
      meta: {
        title: '栏目管理',
        icon: 'icon-list',
      },
    },
    {
      path: '/content/banner',
      name: 'content-banner',
      component: () => import('@/views/content/banner/index.vue'),
      meta: {
        title: 'banner管理',
        icon: 'icon-list',
      },
    },
    {
      path: '/content/news',
      name: 'content-news',
      component: () => import('@/views/content/news/index.vue'),
      meta: {
        title: '新闻管理',
        icon: 'icon-list',
      },
    },
  ],
}
