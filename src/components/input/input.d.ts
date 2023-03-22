import { isString } from "lodash";
import { propColors, propSizes } from "@/constants";

// define input props
export interface Props {
  modelValue: string;
  clearable: boolean;
  // color variant
  color: string;
  // size types
  size: string;
  // is disabled
  disabled: boolean;
  // full style
  full: boolean;
  // aline style
  alone: boolean;
}

// define input component props
export const inputProps = {
  modelValue: { type: String, default: "" },
  clearable: { type: Boolean, default: true },
  // is disabled
  disabled: { type: Boolean, default: false },
  // full style
  full: { type: Boolean, default: false },
  // aline style
  alone: { type: Boolean, default: false },
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
};

// define input events
export enum Events {
  update = "update:modelValue",
  input = "input",
  clear = "clear",
  focus = "focus",
  blur = "blur"
}

// define input emits
export const inputEmits = {
  [Events.update]: (value: string) => isString(value),
  [Events.input]: (evt: Event) => true,
  [Events.clear]: (evt: Event) => true,
  [Events.focus]: (evt: Event) => true,
  [Events.blur]: (evt: Event) => true,
};
