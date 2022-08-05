import Layout from '@/layout'

export default {
    path: '/workorder',
    component: Layout,
    redirect: '/workorder/yunying',
    name: 'Workorder',
    meta: { title: '工单管理', icon: 'workorder' },
    children: [
      {
        path: 'yunying',
        name: 'Yunying',
        component: () => import('@/views/workorder/yunying'),
        meta: { title: '运营工单' }
      },
      {
        path: 'yunwei',
        name: 'Yunwei',
        component: () => import('@/views/workorder/yunwei'),
        meta: { title: '运维工单' }
      }
    ]
}