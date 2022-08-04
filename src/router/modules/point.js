import Layout from "@/layout";

export default {
  path: "/point",
  component: Layout,
  redirect: "/point/quyu",
  name: "Point",
  meta: { title: "点位管理" },
  children: [
    {
      path: "quyu",
      name: "Quyu",
      component: () => import("@/views/point/quyu"),
      meta: { title: "区域管理" },
    },
    {
        path: "dianwei",
        name: "Dianwei",
        component: () => import("@/views/point/dianwei"),
        meta: { title: "点位管理" },
      },
      {
        path: "hezuo",
        name: "Hezuo",
        component: () => import("@/views/point/hezuo"),
        meta: { title: "合作商管理" },
      },
  ],
};
