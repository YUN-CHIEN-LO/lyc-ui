import { slotFunction } from "@/utils";
import { Component,  defineComponent } from "vue";
import { Props } from "@/components/toggle/define";

const Toggle: Component<Props> = {
  name: "LycToggle",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    full: {
      type: Boolean,
      default: true,
    },
    divide: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:open"],
  setup(props: Props, { slots, emit }) {
    const propClass = {
      "lyc-toggle": true,
      "is-full": props.full,
      "is-divide": props.divide,
    };
    const handleToggle = (evt: Event) => {
      evt.stopPropagation();
      emit("update:open", !props.open);
    };

    const renterTargetIcon = () => (
      <lyc-icon
        style={{
          marginRight: "8px",
          transform: props.open ? `rotate(90deg)` : "",
        }}
        size="small"
        type="toggle"
      ></lyc-icon>
    );
    const renderTargetDefault = () => <div>{props.label}</div>;
    const renderTarget = () => (
      <div class="lyc-toggle__target" onClick={(evt) => handleToggle(evt)}>
        {props.showIcon && renterTargetIcon()}
        {slotFunction(slots, "target", { open: props.open }, renderTargetDefault)}
      </div>
    );
    return () => (
      <div class={propClass}>
        {renderTarget()}
        <lyc-collapse>
          {props.open && (
            <div class="lyc-toggle__content">
              <div class="lyc-toggle__content__wrapper">{slotFunction(slots, "default")}</div>
            </div>
          )}
        </lyc-collapse>
      </div>
    );
  },
};

export default defineComponent(Toggle);
