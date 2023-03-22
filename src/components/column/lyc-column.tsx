import { slotFunction } from "@/utils";
import { Component, defineComponent, CSSProperties } from "vue";
import { Props } from "@/components/column/define";

const Column: Component<Props> = {
  name: "LycColumn",
  functional: true,
  props: {
    flex: {
      type: Number,
      default: 1,
    },
    minWidth: {
      type: String,
      default: "auto",
    },
    maxWidth: {
      type: String,
      default: "auto",
    },
  },
  setup(props: Props, { slots }) {
    const propClass = {
      "lyc-column": true,
    };
    const propsStyle: CSSProperties = {
      flex: `${props.flex}`,
      minWidth: `${props.minWidth}`,
      maxWidth: `${props.maxWidth}`,
    };
    return () => (
      <div class={propClass} style={propsStyle}>
        {slotFunction(slots, "default")}
      </div>
    );
  },
};

export default defineComponent(Column);
