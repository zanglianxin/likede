import Layout from "@/layout";

export default {
    path: '/goods',
    component: Layout,
    redirect: '/goods/leixing',
    name: 'Goods',
    meta: { title: '商品管理' },
    children: [
      {
        path: 'leixing',
        name: 'Leixing',
        component: () => import('@/views/goods/leixing'),
        meta: { title: '商品类型' }
      },
      {
        path: 'guanli',
        name: 'Guanli',
        component: () => import('@/views/goods/guanli'),
        meta: { title: '商品管理' }
      }
    ]
}