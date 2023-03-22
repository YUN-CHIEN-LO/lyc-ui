import { slotFunction } from "@/utils";
import { Component, defineComponent, provide, readonly } from "vue";
import { Props } from "@/components/input-group/define.d";

const InputGroup: Component<Props> = {
  name: "LycInputGroup",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(val: string): boolean {
        return ["horizontal", "vertical"].includes(val);
      },
    },
    disabled: {
      type: Boolean,
      default: null,
    },
  },
  setup(props: Props, { slots }) {
    const propClass = {
      "lyc-input-group": true,
      "check-input__group": true,
      [`is-${props.direction}`]: true,
    };

    provide("inputGroup", readonly({ disabled: props.disabled }));

    return () => <span class={propClass}>{slotFunction(slots, "default")}</span>;
  },
};

export default defineComponent(InputGroup);
