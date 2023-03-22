import Component from "@/components/timeline/lyc-timeline-item";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;
