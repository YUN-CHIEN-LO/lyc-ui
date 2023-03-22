import { nextTick } from "vue";
import constantRoutes from "@/router/constant";
import documentRoutes from "@/router/documents";
import { RouteLocationNormalized, createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "DocLayout",
    redirect: "/home",
    component: () => import("@/doc/DocLayout.vue"),
    children: [...constantRoutes, ...documentRoutes],
  },
  // 預設無匹配網址，進入錯誤頁
  {
    path: "/:pathMatch(.*)*",
    name: "pathMatch",
    redirect: "/error",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// 全域路由後置作業
router.afterEach((to, from) => {
  /**
   * Use next tick to handle router history correctly
   *
   * @see https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
   */
  nextTick(() => {
    // 更新頁面抬頭標籤
    updateDocumentTitle(to);
  });
});

/**
 * 更新頁面抬頭標籤
 *
 * @param {Route|object} route - 路由
 */
export function updateDocumentTitle(route: RouteLocationNormalized) {
  // 路由為 undefined 設置當前路由
  route = route || router.currentRoute;

  const metaTitle = "LycUi";

  if (route.matched.length) {
    const pageTitle = route.matched.map((path) => path.meta.title).join(" | ");
    document.title = `${metaTitle} ${pageTitle}`;
  }
}

export default router;
export * from "@/router/documents";
