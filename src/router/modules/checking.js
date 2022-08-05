import Layout from "@/layout";

export default {
  path: "/checking",
  component: Layout,
  children: [
    {
      path: "index",
      name: "Checking",
      component: () => import("@/views/checking/index"),
      meta: { title: "对账统计", icon: "accountcheck" },
    },
  ],
};
