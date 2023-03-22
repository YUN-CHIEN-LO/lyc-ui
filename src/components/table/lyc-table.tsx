import { slotFunction } from "@/utils";
import { Component, defineComponent, CSSProperties, reactive } from "vue";
import { Props, Column, Row } from "@/components/table/define";
import { uniqueId } from "lodash";

const Table: Component<Props> = {
  name: "LycTable",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    borderCollapse: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: true,
    },
    height: {
      type: String,
      default: "auto",
    },
  },
  setup(props: Props, { slots }) {
    const propClass = {
      "lyc-table": true,
      "is-border": props.border,
    };
    const propStyle: CSSProperties = {
      height: props.height,
    };
    const tableStyle: CSSProperties = {
      borderCollapse: props.borderCollapse ? "collapse" : "separate",
      minWidth: props.full ? "100%" : "autos",
    };
    const tableData = reactive([
      ...props.value.map((row: object, index: number) =>
        Object.assign(row, { rowId: uniqueId("row-"), index: index })
      ),
    ]);

    const renderHeader = () => (
      <thead>
        <tr>
          {props.columns.map(({ property, label }: Column) => (
            <th key={`${property}-header`}>
              <div class="lyc-table__cell is-header-cell">
                {slotFunction(slots, `${property}-header`, {}, () => `${label ?? property}`)}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );

    const renderColumn = (row: Row, column: Column) => (
      <td key={`${column.property}-${row.rowId}`}>
        <div class="lyc-table__cell is-table-cell" style={{ width: column.width ?? "200px" }}>
          {slotFunction(
            slots,
            String(column.property),
            {
              index: row.index,
              row: row,
              column: column,
              value: row[column.property],
            },
            () => row[column.property]
          )}
        </div>
      </td>
    );

    const renderRow = (row: Row) => (
      <tr key={row.rowId}>{props.columns.map((column: Column) => renderColumn(row, column))}</tr>
    );

    const renderBody = () => <tbody>{tableData.map((row: Row) => renderRow(row))}</tbody>;

    const renderFooter = () => (
      <tfoot>
        <tr>
          {props.columns.map(({ property }: Column) => (
            <th key={`${property}-footer`}>{slotFunction(slots, `${property}-footer`)}</th>
          ))}
        </tr>
      </tfoot>
    );

    return () => (
      <div class={propClass} style={propStyle}>
        <table style={tableStyle}>
          {props.showHeader && renderHeader()}
          {renderBody()}
          {props.showFooter && renderFooter()}
        </table>
      </div>
    );
  },
};

export default defineComponent(Table);
