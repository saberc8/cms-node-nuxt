export default {
  path: '/group',
  name: 'group',
  component: () => import('@/layout/index.vue'),
  redirect: '/group/list',
  meta: {
    title: '微信群管理',
    icon: 'icon-home',
  },
  children: [
    {
      path: '/group/list',
      name: 'grouplist',
      component: () => import('@/views/group/list/index.vue'),
      meta: {
        title: '微信群列表',
        icon: 'icon-list',
      },
    },
    {
      path: '/group/command',
      name: 'groupCommand',
      component: () => import('@/views/group/keyword/index.vue'),
      meta: {
        title: '群关键词',
        icon: 'icon-list',
      },
    },
  ],
}
