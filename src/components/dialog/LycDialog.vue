<template>
  <lyc-modal v-model="visible" v-bind="bindProps(props, BASE_MODAL)">
    <div
      :class="['lyc-dialog', customClassName]"
      :style="{
        ['max-width']: props.maxWidth,
        ['min-width']: props.minWidth,
      }"
    >
      <slot name="header">
        <div className="lyc-dialog__header">
          <slot name="label">
            <lyc-header type="h5" class="lyc-dialog__label">
              {{ props.label }}
            </lyc-header>
          </slot>
          <div v-if="props.showTool" class="lyc-dialog__tool">
            <slot name="tool">
              <lyc-button
                sqaure
                alone
                size="small"
                @click="handleClose('close')"
              >
                <lyc-icon type="cross" size="small"></lyc-icon>
              </lyc-button>
            </slot>
          </div>
        </div>
      </slot>
      <slot></slot>
    </div>
  </lyc-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LycDialog",
});
</script>
<script setup lang="ts">
import { isFunction } from "lodash";
import { bindProps } from "@/utils";
import { useSlots, ref, computed } from "vue";
import {
  Props,
  dialogProps,
  dialogEmits,
  Events,
  DoneFunction,
} from "@/components/dialog/dialog";
import { baseModalComponentProps } from "@/components/modal/modal";

const props: Props = defineProps(dialogProps);
const emit = defineEmits(dialogEmits);
const slots = useSlots();

/* == Constant declaration == */
// base modal props
const BASE_MODAL = Object.keys(baseModalComponentProps);

// get custom class names
const customClassName = isFunction(props.customClassName)
  ? props.customClassName()
  : props.customClassName;

// default close trigger mode
const defaultCloseTrigger = "native";

/* == Ref and Reactive declaration == */
// current close trigger mode
const closeTrigger = ref(defaultCloseTrigger);

/* == Computed declaration == */
/**
 * handle emit visible status
 *
 * @param {boolean} val - whether is visible
 */
const handleEmitVisible = (val: boolean) => emit(Events.visible, val);

// visible status of dialog
const visible = computed({
  get() {
    return props.visible;
  },
  set(val: boolean) {
    // do before close callback
    if (isFunction(props.beforeClose)) {
      props.beforeClose(
        () => handleEmitVisible(val),
        closeTrigger.value ?? defaultCloseTrigger
      ) as DoneFunction;
    }
    // close dialog
    else handleEmitVisible(val);
  },
});

/* == Public Methods == */
/**
 * open dialog
 */
const handleOpen = () => {
  // open dialog
  visible.value = true;
};

/**
 * close the dialog
 *
 * @param {string} trigger - close trigger mode
 */
const handleClose = (trigger: string) => {
  // update current close trigger mode
  closeTrigger.value = trigger;
  // close dialog
  visible.value = false;
  // reset current close trigger mode
  closeTrigger.value = defaultCloseTrigger;
};

// expose plublic methods
defineExpose({
  ["open"]: handleOpen,
  ["close"]: handleClose,
});
</script>
