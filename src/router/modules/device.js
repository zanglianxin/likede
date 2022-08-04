import Layout from "@/layout";

export default {
  path: "/device",
  component: Layout,
  redirect: "/device/guanli",
  name: "Device",
  meta: { title: "设备管理" },
  children: [
    {
      path: "guanli",
      name: "Guanli",
      component: () => import("@/views/device/guanli"),
      meta: { title: "设备管理" },
    },
    {
        path: "zhuangtai",
        name: "Zhuangtai",
        component: () => import("@/views/device/zhuangtai"),
        meta: { title: "设备状态" },
      },
      {
        path: "leixing",
        name: "Leixing",
        component: () => import("@/views/device/leixing"),
        meta: { title: "设备类型管理" },
      },
  ],
};
