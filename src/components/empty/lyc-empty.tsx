import { slotFunction } from "@/utils";
import { Component, defineComponent } from "vue";

const Empty: Component = {
  name: "LycEmpty",
  setup(props, { slots }) {
    return () => <span class="lyc-empty">{slotFunction(slots, "default")}</span>;
  },
};

export default defineComponent(Empty)