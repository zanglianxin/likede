import Layout from '@/layout'

export default {
  path: '/people',
  component: Layout,
  redirect: '/people/renyuanliebiao',
  name: 'People',
  meta: { title: '人员管理', icon: 'staff' },
  children: [
    {
      path: 'renyuanliebiao',
      name: 'Renyuanliebiao',
      component: () => import('@/views/people/renyuanliebiao'),
      meta: { title: '人员列表' }
    },
    {
      path: 'renxiaotongji',
      name: 'Renxiaotongji',
      component: () => import('@/views/people/renxiaotongji'),
      meta: { title: '人效统计' }
    },
    {
      path: 'gongzuoliangliebiao',
      name: 'Gongzuoliangliebiao',
      component: () => import('@/views/people/gongzuoliangliebiao'),
      meta: { title: '工作量列表' }
    }
  ]
}
