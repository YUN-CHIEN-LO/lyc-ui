import { propColors, propSizes } from "@/constants";

// define button props
export interface Props {
  // color variant
  color: string;
  // size types
  size: string;
  // is disabled
  disabled: boolean;
  // outline style
  outline: boolean;
  // full style
  full: boolean;
  // alone style
  alone: boolean;
  // square style
  square: boolean;
  // show shadow on focus, hover, active
  shadow: boolean;
}

// define button component props
export const buttonProps = {
  // color variant
  color: {
    type: String,
    default: propColors.default,
    validator(value: string) {
      return Object.keys(propColors).includes(value);
    },
  },
  // size types
  size: {
    type: String,
    default: propSizes.medium,
    validator(value: string) {
      return Object.keys(propSizes).includes(value);
    },
  },
  // is disabled
  disabled: { type: Boolean, default: false },
  // outline style
  outline: { type: Boolean, default: false },
  // full style
  full: { type: Boolean, default: false },
  // aline style
  alone: { type: Boolean, default: false },
  // square style
  square: { type: Boolean, default: false },
  // show shadow on focus, hover, active
  shadow: { type: Boolean, default: true },
};

// define button events
export enum Events {
  click = "click",
}

// define button emits
export const buttonEmits = {
  [Events.click]: (evt: Event) => true,
};
