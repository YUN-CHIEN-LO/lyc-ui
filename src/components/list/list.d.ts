import { propColors, propSizes } from "@/constants";

// define list props
export interface Props {
  // color variant
  color: string;
  // size types
  size: string;
  // is numbered
  numbered: boolean;
}

// define list component props
export const listProps = {
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
  // is numbered
  numbered: { type: Boolean, default: false },
};
