import { Column } from "@/components/table/define";

export interface DocProps {
  prop: string;
  type: string;
  description: string;
  default: string;
  options: Array<string>;
}

export const propColumns: Array<Column> = [
  { property: "prop", label: "Property" },
  { property: "type", label: "Type" },
  { property: "description", label: "Description", width: "400px" },
  { property: "default", label: "Default Value" },
  { property: "options", label: "Options", width: "400px" },
];

export interface DocSlot {
  slot: string;
  description: string;
  scoped: string;
}

export const slotColumns: Array<Column> = [
  { property: "slot", label: "Slot Name", width: "200px" },
  { property: "description", label: "Description", width: "400px" },
  { property: "scoped", label: "Scoped Arguments" },
];

export interface DocEvent {
  event: string;
  description: string;
  arg: string;
}

export const eventColumns: Array<Column> = [
  { property: "event", label: "Event Name", width: "200px" },
  { property: "description", label: "Description", width: "400px" },
  { property: "arg", label: "Callback Arguments" },
];

export interface DocMethod {
  method: string;
  description: string;
  arg: Array<string>;
}

export const methodColumns: Array<Column> = [
  { property: "method", label: "Method Name", width: "200px" },
  { property: "description", label: "Description", width: "400px" },
  { property: "arg", label: "Arguments", width: "400px" },
];
