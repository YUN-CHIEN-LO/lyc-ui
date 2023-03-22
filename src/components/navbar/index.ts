import Component from "@/components/navbar/lyc-navbar";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;