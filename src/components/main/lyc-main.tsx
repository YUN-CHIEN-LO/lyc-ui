import { slotFunction } from "@/utils";
import { Component, defineComponent } from "vue";

const Main: Component = {
  name: "LycMain",
  functional: true,
  setup(props, { slots }) {
    const propClass = {
      "lyc-main": true,
    };
    return () => <div class={propClass}>{slotFunction(slots, "default")}</div>;
  },
};

export default defineComponent(Main);
