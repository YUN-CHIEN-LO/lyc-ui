import { slotFunction } from "@/utils";
import { Component, defineComponent, CSSProperties } from "vue";
import { Props } from "@/components/row/define";

const Row: Component<Props> = {
  name: "LycRow",
  functional: true,
  props: {
    gap: {
      type: String,
      default: "16px",
    },
    alignment: {
      type: String,
      default: "flex-start",
    },
    scroll: {
      type: String,
      default: "visible",
    },
  },
  setup(props: Props, { slots }) {
    const propClass = {
      "lyc-row": true,
    };
    const propStyle: CSSProperties = {
      ["gap"]: `${props.gap}`,
      ["margin-bottom"]: `calc(${props.gap} * 2)`,
      ["align-items"]: `${props.alignment}`,
      ["overflow-x"]: props.scroll as "scroll",
      ["width"]: props.scroll === "auto" ? "100%" : "auto",
    };
    return () => (
      <div class={propClass} style={propStyle}>
        {slotFunction(slots, "default")}
      </div>
    );
  },
};

export default defineComponent(Row);
