import { App } from "vue";
import LycButton from "@/components/button";
import LycCard from "@/components/card";
import LycNavbar from "@/components/navbar";
import LycMain from "@/components/main";
import LycAside from "@/components/aside";
import LycArticle from "@/components/article";
import LycIcon from "@/components/icon";

export default function install(Vue: App) {
  Vue.component("lyc-button", LycButton);
  Vue.component("lyc-card", LycCard);
  Vue.component("lyc-navbar", LycNavbar);
  Vue.component("lyc-main", LycMain);
  Vue.component("lyc-aside", LycAside);
  Vue.component("lyc-article", LycArticle);
  Vue.component("lyc-icon", LycIcon);
}

export { default as LycButton } from "@/components/button";
export { default as LycCard } from "@/components/card";
export { default as LycNavbar } from "@/components/navbar";
export { default as LycMain } from "@/components/main";
export { default as LycAside } from "@/components/aside";
export { default as LycArticle } from "@/components/article/index";
export { default as LycIcon } from "@/components/icon";
