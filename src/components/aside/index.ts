import Component from "@/components/aside/LycAside.vue";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component("lyc-article", Component);
};

export default Component;