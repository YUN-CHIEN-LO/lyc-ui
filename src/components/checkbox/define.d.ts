export interface Props {
  modelValue: boolean;
  name: string;
  value: string;
  label: string;
  disabled: boolean;
  noLabel: boolean;
  group?: Array<string>;
}

export enum Events {
  vmodel = "update:modelValue",
  input = "input",
  group = "update:group",
}
