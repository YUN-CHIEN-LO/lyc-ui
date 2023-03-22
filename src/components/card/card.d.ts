import { propColors } from "@/constants";

// define card props
export interface Props {
  // color variant
  color: string;
  // card title content
  title: string;
  // whether to show header slot
  header: boolean;
  // whether to show tool slot
  tool: boolean;
  // whether has shadow
  shadow: boolean;
  // whether is full width
  full: boolean;
  // minimum card width
  minWidth: string
  // maximum card width
  maxWidth: string
}

// define card component props
export const cardProps = {
  // color variant
  color: {
    type: String,
    default: propColors.default,
    validator(value: string) {
      return Object.keys(propColors).includes(value);
    },
  },
  // card title content
  title: { type: String, default: "Card" },
  // whether to show header
  header: { type: Boolean, default: true },
  // whether to show tool slot
  tool: { type: Boolean, default: false },
  // whether has shadow
  shadow: { type: Boolean, default: true },
  // whether is full width
  full: { type: Boolean, default: false },
  // minimum card width
  minWidth: { type: String, default: "200px" },
  // maximum card width
  maxWidth: { type: String, default: "auto" },
}

// define card events
export enum Events {
  close = "close",
}

// define card emits
export const cardEmits = {
  [Events.close]: (evt: Event) => true,
};