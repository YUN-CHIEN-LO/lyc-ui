import { isBoolean } from "lodash";

/* == Base Modal == */
// define base modal props
export interface modalProps {
  // open modal direction
  direction: string;
  // whether to close on click modal
  closeOnClickModal: boolean;
  // whether to show modal
  showModal: boolean;
  // get insert container
  container: Function | string;
  // display with in container
  fitContainer: boolean;
  // lock container scroll
  lockScroll: boolean;
}

// define base modal component props
export const baseModalComponentProps = {
  // open modal direction
  direction: {
    type: String,
    default: "none",
    validator(val: string) {
      return ["none", "up", "right", "down", "left"].includes(val);
    },
  },
  // whether to close on click modal
  closeOnClickModal: { type: Boolean, default: true },
  // whether to show modal
  showModal: { type: Boolean, default: true },
  // get insert container
  container: { type: [Function, String], default: null },
  // display with in container
  fitContainer: { type: Boolean, default: false },
  // lock container scroll
  lockScroll: { type: Boolean, default: true },
};

// define base modal events
export enum baseModalEvents {
  open = "open",
  opened = "opened",
  close="close",
  closed="closed"
}

// define base modal emits
export const baseModalEmits = {
  [baseModalEvents.open]: () => true,
  [baseModalEvents.opened]: () => true,
  [baseModalEvents.close]: () => true,
  [baseModalEvents.closed]: () => true,
};

/* == Modal Component == */
// define modal props
export interface Props extends modalProps {
  // bind modal show
  modelValue: boolean;
}

// define modal component props
export const modalProps = {
  // bind modal show
  modelValue: { type: Boolean, default: false },
  ...baseModalComponentProps,
};

// define modal events
enum modalEvents {
  // update show
  update = "update:modelValue",
}

// define component events
export const Events = { ...modalEvents, ...baseModalEvents };
// define component emits
export const modalEmits = {
  [modalEvents.update]: (value: boolean) => isBoolean(value),
  ...baseModalEmits,
};
