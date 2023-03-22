import { slotFunction } from "@/utils";
import { Component, defineComponent, inject } from "vue";
import { Props, Events } from "@/components/radio/define.d";
import {  uniqueId } from "lodash";

const Radio: Component<Props> = {
  name: "LycRadio",
  props: {
    modelValue: {
      type: String,
      default: "radio",
    },
    name: {
      type: String,
      default: "radio",
    },
    value: {
      required: true,
      type: String,
      defualt: "radio",
    },
    label: {
      type: String,
      default: "radio",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: Object.values(Events),
  setup(props: Props, { slots, emit }) {
    const radioId = uniqueId("radioId-");
    const inputGroup: { disabled?: boolean } = inject("inputGroup", {});

    const isDisabled = inputGroup?.disabled ?? props.disabled;

    const isChecked = () => {
      return props.modelValue === props.value;
    };

    const renderLabel = () => <span>{props.label ?? props.name ?? props.value}</span>;
    const renderSlot = () => slotFunction(slots, "default", {}, renderLabel);

    return () => (
      <span
        class={[
          "lyc-radio",
          "check-input",
          { "is-checked": isChecked(), "is-disabled": isDisabled },
        ]}
      >
        <input
          type="radio"
          id={radioId}
          name={props.value ?? props.name}
          value={props.value}
          checked={isChecked()}
          disabled={isDisabled}
          onInput={(evt: Event) => {
            emit(Events.vmodel, (evt.target as HTMLInputElement).value);
            emit(Events.input, evt);
          }}
        ></input>
        <label for={radioId}>
          <span class="lyc-radio__radio check-input__input">
          <lyc-icon class="check-input__icon" size="small" type="dot"></lyc-icon>
          </span>
          <span class="check-input__label">{renderSlot()}</span>
        </label>
      </span>
    );
  },
};

export default defineComponent(Radio);
