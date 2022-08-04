import Layout from '@/layout'

export default {
  path: '/tactics',
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'Tactics',
      component: () => import('@/views/tactics/index'),
      meta: { title: '策略管理' }
    }
  ]
}
