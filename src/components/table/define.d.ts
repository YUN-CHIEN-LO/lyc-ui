export interface Props {
  value: Array;
  columns: Array;
  showHeader: boolean;
  showFooter: boolean;
  full: boolean;
  border: boolean;
  height: string;
  borderCollapse: boolean;
}

export interface Column {
  property: string;
  label: string;
  width?: string;
}

export interface Row {
  rowId: string;
  [key: string]: any;
}
