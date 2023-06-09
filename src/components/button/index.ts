import Component from "@/components/button/LycButton.vue";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;
