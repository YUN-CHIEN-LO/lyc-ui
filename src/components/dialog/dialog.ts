import { isBoolean } from "lodash";
import {
  modalProps,
  baseModalComponentProps,
  baseModalEmits,
  baseModalEvents,
} from "@/components/modal/modal";

// define dialog props
export interface Props extends modalProps {
  visible: boolean;
  label: string;
  showTool: boolean;
  beforeClose: Function;
  customClassName: string | Function;
  maxWidth: string;
  minWidth: string;
}

// define component props
export const dialogProps = {
  // whether dialog is visible
  visible: {
    type: Boolean,
    default: false,
  },
  // dialog label text
  label: {
    type: String,
    default: null,
  },
  // whether to show header tool
  showTool: {
    type: Boolean,
    default: true,
  },
  // before close callback function
  beforeClose: {
    type: Function,
    default: null,
  },
  // custom class name
  customClassName: {
    type: [Function, String],
    default: "",
  },
  // max width
  maxWidth: {
    type: String,
    default: "auto",
  },
  // min width
  minWidth: {
    type: String,
    default: "300px",
  },
  // extend modal props
  ...baseModalComponentProps,
};

// define component events
enum dialogEvents {
  visible = "update:visible",
}
export const Events = {
  ...dialogEvents,
  ...baseModalEvents,
};

// define component emits
export const dialogEmits = {
  // visible status
  ["update:visible"]: (value: boolean) => isBoolean(value),
  ...baseModalEmits,
};

export type DoneFunction = (done: Function, trigger?: string) => void;
