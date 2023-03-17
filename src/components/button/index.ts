import { defineCustomElement } from "vue";
import Button from "@/components/button/LycButton.ce.vue";

export const LycButton = defineCustomElement(Button);

export default function register() {
  customElements.define("lyc-button", LycButton);
}
