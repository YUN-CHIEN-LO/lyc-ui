import { slotFunction } from "@/utils";
import { Component, defineComponent } from "vue";
import { propColors } from "@/constants";
import { Props } from "@/components/header/define";

const Header: Component<Props> = {
  name: "LycHeader",
  functional: true,
  props: {
    type: {
      type: String,
      default: "h1",
      validation: function (value: string) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      },
    },
    color: {
      type: String,
      default: propColors.default,
      validator(value: string) {
        return Object.keys(propColors).includes(value);
      },
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: Props, { slots }) {
    const defaultSlot = () => slotFunction(slots, "default");
    const propClass = {
      "lyc-header": true,
      [`is-${props.color}`]: true,
      [`is-${props.type}`]: true,
      "is-inverse": props.inverse,
      "is-underline": props.underline,
    };
    switch (props.type) {
      case "h1":
        return () => <h1 class={propClass}>{defaultSlot()}</h1>;
      case "h2":
        return () => <h2 class={propClass}>{defaultSlot()}</h2>;
      case "h3":
        return () => <h3 class={propClass}>{defaultSlot()}</h3>;
      case "h4":
        return () => <h4 class={propClass}>{defaultSlot()}</h4>;
      case "h5":
        return () => <h5 class={propClass}>{defaultSlot()}</h5>;
      case "h6":
        return () => <h6 class={propClass}>{defaultSlot()}</h6>;
      default:
        return () => <h1 class={propClass}>{defaultSlot()}</h1>;
    }
  },
};

export default defineComponent(Header);
