import Component from "@/components/toggle/lyc-toggle";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;
