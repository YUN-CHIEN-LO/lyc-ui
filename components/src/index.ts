import { App } from "vue";

import { LycButton } from "@/packages/button";
import { LycInput } from "@/packages/input";

export default function install(Vue: App) {
  Vue.component("lyc-button", LycButton);
  Vue.component("lyc-input", LycInput);
}

export { LycButton } from "@/packages/button";
export { LycInput } from "@/packages/input";
