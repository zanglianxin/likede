import Layout from "@/layout";

export default {
    path: '/orders',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Orders',
        component: () => import('@/views/order'),
        meta: { title: '订单管理', icon: 'order' }
      }
    ]
  }