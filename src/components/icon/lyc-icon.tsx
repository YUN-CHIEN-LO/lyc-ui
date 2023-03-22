import { Component, defineComponent } from "vue";
import { propColors, propSizes } from "@/constants";
import { Props } from "@/components/icon/define.d";

const Icon: Component<Props> = {
  name: "LycIcon",
  functional: true,
  props: {
    type: {
      type: String,
      default: "cross",
      validator(value: string) {
        return [
          "cross",
          "hamburger",
          "toggle",
          "check",
          "dot",
          "plus",
          "arrow-up",
          "arrow-right",
          "arrow-up-right",
          "arrow-up-left",
          "arrow-down",
          "arrow-down-right",
          "arrow-down-left",
          "arrow-left",
        ].includes(value);
      },
    },
    color: {
      type: String,
      default: propColors.default,
      validator(value: string) {
        return Object.keys(propColors).includes(value);
      },
    },
    size: {
      type: String,
      default: propSizes.medium,
      validator(value: string) {
        return Object.keys(propSizes).includes(value);
      },
    },
  },
  setup(props: Props) {
    const isArrowType = (type: string) => type.includes("arrow-");

    const propClass = {
      ["lyc-icon"]: true,
      [`is-${props.type}`]: true,
      [`is-arrow`]: isArrowType(props.type),
      [`is-border-type`]: isArrowType(props.type) || props.type === "check",
      [`is-${props.color}`]: true,
      [`is-${props.size}`]: true,
    };

    return () => (
      <div class={propClass}>
        <div class="lyc-icon__strike lyc-icon__strike--1"></div>
        <div class="lyc-icon__strike lyc-icon__strike--2"></div>
        <div class="lyc-icon__strike lyc-icon__strike--3"></div>
      </div>
    );
  },
};

export default defineComponent(Icon);
