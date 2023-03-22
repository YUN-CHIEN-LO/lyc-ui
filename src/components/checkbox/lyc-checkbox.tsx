import { slotFunction } from "@/utils";
import { Component, computed, defineComponent, inject, reactive, ref, watch } from "vue";
import { Props, Events } from "@/components/checkbox/define.d";
import { isArray, isEmpty, uniqueId } from "lodash";

const Checkbox: Component<Props, Events> = {
  name: "LycCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "checkbox",
    },
    value: {
      required: true,
      type: String,
      defualt: "checkbox",
    },
    label: {
      type: String,
      default: "Checkbox",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
    group: {
      type: Array,
      default: null,
    },
  },
  emits: Object.values(Events),
  setup(props: Props, { slots, emit }) {
    const checkboxId = uniqueId("checkbox-");
    const inputGroup: { disabled?: boolean } = inject("inputGroup", {});
    const groupValue = computed({
      get: () => props.group ?? [],
      set: (val) => {
        emit(Events.group, val);
      },
    });

    const isDisabled = ref(inputGroup?.disabled ?? props.disabled);

    const isChecked = () => {
      if (isEmpty(props.group)) return props.modelValue ?? false;
      return props.group?.includes(props.value);
    };

    const setChecked = (checked: boolean, value: string) => {
      const index: number = groupValue.value.findIndex(
        (checkValue: string) => checkValue === value
      );
      if (checked && index === -1) groupValue.value.push(value);
      else if (!checked && index > -1) groupValue.value.splice(index, 1);
    };
    const propClass = reactive([
      "lyc-checkbox",
      "check-input",
      { "is-disabled": isDisabled, "is-no-label": props.noLabel },
    ]);

    const renderLabel = () => <span>{props.label ?? props.name ?? props.value}</span>;
    const renderSlot = () => slotFunction(slots, "default", {}, renderLabel);

    watch(
      () => props.disabled,
      (val) => {
        isDisabled.value = inputGroup?.disabled ?? val;
      }
    );
    watch(
      () => inputGroup?.disabled,
      (val) => {
        isDisabled.value = val ?? props.disabled;
      }
    );

    return () => (
      <span class={[...propClass, { "is-checked": isChecked() }]}>
        <input
          type="checkbox"
          id={checkboxId}
          name={props.value ?? props.name}
          value={props.value}
          checked={isChecked()}
          disabled={isDisabled.value}
          onInput={(evt: Event) => {
            if (isEmpty(evt.target)) return false;
            emit(Events.vmodel, (evt.target as HTMLInputElement).checked);
            emit(Events.input, evt);
            if (isArray(props.group))
              setChecked((evt.target as HTMLInputElement).checked, props.value);
          }}
        ></input>
        <label for={checkboxId}>
          <span class="lyc-checkbox__checkbox check-input__input">
            <lyc-icon class="check-input__icon" size="small" type="check"></lyc-icon>
          </span>
          <span class="check-input__label">{renderSlot()}</span>
        </label>
      </span>
    );
  },
};

export default defineComponent(Checkbox);
