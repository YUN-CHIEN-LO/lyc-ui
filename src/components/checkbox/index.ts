import Component from "@/components/checkbox/lyc-checkbox";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;
