import { RouteRecordRaw } from "vue-router";

export const basicRoutes: Array<RouteRecordRaw> = [
  {
    name: "docButton",
    path: "/basic/button",
    component: () => import("@/doc/DocButton.vue"),
    meta: {
      title: "Button",
    },
  },
  {
    name: "docIcon",
    path: "/basic/icon",
    component: () => import("@/doc/DocIcon.vue"),
    meta: {
      title: "Icon",
    },
  },
  {
    name: "docLink",
    path: "/basic/link",
    component: () => import("@/doc/DocLink.vue"),
    meta: {
      title: "Link",
    },
  },
];

export const layoutRoutes: Array<RouteRecordRaw> = [
  {
    name: "docHeader",
    path: "/layout/header",
    component: () => import("@/doc/DocHeader.vue"),
    meta: {
      title: "Header",
    },
  },
  {
    name: "docParagraph",
    path: "/layout/paragraph",
    component: () => import("@/doc/DocParagraph.vue"),
    meta: {
      title: "Paragraph",
    },
  },
  {
    name: "docCard",
    path: "/layout/card",
    component: () => import("@/doc/DocCard.vue"),
    meta: {
      title: "Card",
    },
  },
  {
    name: "docToggle",
    path: "/layout/toggle",
    component: () => import("@/doc/DocToggle.vue"),
    meta: {
      title: "Toggle",
    },
  },
  {
    name: "docEmpty",
    path: "/layout/empty",
    component: () => import("@/doc/DocEmpty.vue"),
    meta: {
      title: "Empty",
    },
  },
];

export const formRoutes: Array<RouteRecordRaw> = [
  {
    name: "docInput",
    path: "/form/input",
    component: () => import("@/doc/DocInput.vue"),
    meta: {
      title: "Input",
    },
  },
  {
    name: "docRadio",
    path: "/form/radio",
    component: () => import("@/doc/DocRadio.vue"),
    meta: {
      title: "Radio",
    },
  },
  {
    name: "docCheckbox",
    path: "/form/checkbox",
    component: () => import("@/doc/DocCheckbox.vue"),
    meta: {
      title: "Checkbox",
    },
  },
];

export const dataRoutes: Array<RouteRecordRaw> = [
  {
    name: "docTable",
    path: "/data/table",
    component: () => import("@/doc/DocTable.vue"),
    meta: {
      title: "Table",
    },
  },
  {
    name: "docTimeline",
    path: "/data/timeline",
    component: () => import("@/doc/DocTimeline.vue"),
    meta: {
      title: "Timeline",
    },
  },
];
export const noticeRoutes: Array<RouteRecordRaw> = [
  {
    name: "docDialog",
    path: "/notice/dialog",
    component: () => import("@/doc/DocDialog.vue"),
    meta: {
      title: "Dialog",
    },
  },
];

export default [...basicRoutes, ...layoutRoutes, ...formRoutes, ...dataRoutes, ...noticeRoutes];
