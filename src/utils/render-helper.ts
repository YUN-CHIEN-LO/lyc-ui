import { isFunction, isString } from "lodash";
import { resolve } from "path";
import { Slots, renderSlot, VNode } from "vue";

export const slotFunction = (
  slots: Slots,
  name: string,
  prop: { [key: string]: any } = {},
  fallback: Function = () => ""
): VNode => {
  if (name in slots) return renderSlot(slots, name, prop);
  return fallback(prop);
};

export const setTimeoutTimer = (wait: number = 100) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(true);
      clearTimeout(timer);
    }, wait);
  });
};

export const bindProps = (props: any, keys: Array<string>) => {
  const result = {};
  let componentProps = props || {};
  // 確認繼承的元件參數存在
  for (const [key, value] of Object.entries(componentProps)) {
    if (keys.includes(key)) {
      Object.assign(result, { [key]: value });
    }
  }
  return result;
};

export const getContainerDom = (container: string | Function): HTMLElement => {
  // if container is function
  if (isFunction(container)) return container() as HTMLElement;
  // if container is string
  if (isString(container))
    return document.getElementById(container.replace(/^\#/, "")) as HTMLElement;
  // document body as default container
  return document.body;
};
