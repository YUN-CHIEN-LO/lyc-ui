export interface Item {
  key?: string;
  [key: string]: any;
}

export interface Props {
  data: Array<Item>;
  reverse: boolean;
  itemKey: string;
  direction: string;
  total?: number;
}

export interface ItemProps {
  item: Item;
  index?: number;
}

export enum Events {
  updateData = "update:data",
  insert = "insert",
  remove = "remove",
  move = "move",
  swap = "swap",
}

export const defaultKeyMap = (): Item => ({ key: "key" });
