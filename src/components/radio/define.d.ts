export interface Props {
  modelValue: string;
  name: string;
  value: string;
  label: string;
  disabled: boolean;
}

export enum Events {
  vmodel = "update:modelValue",
  input = "input",
}
