export default [
  {
    name: "docHome",
    path: "/home",
    component: () => import("@/doc/DocHome.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    // 錯誤頁面
    name: "error",
    path: "/error",
    component: () => import("@/doc/DocError.vue"),
    meta: {
      title: "Error Page",
    },
  },
];
