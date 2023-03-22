import Component from "@/components/input-group/lyc-input-group";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;
