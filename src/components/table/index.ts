import Component from "@/components/table/lyc-table";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;