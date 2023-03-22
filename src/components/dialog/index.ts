import Component from "@/components/dialog/LycDialog.vue";
import { App } from "vue";

Component.install = (Vue: App) => {
  Vue.component(Component.name, Component);
};

export default Component;
