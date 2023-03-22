<template>
  <div
    :class="[
      'lyc-input',
      {
        ['is-focus']: isFocus,
        [`is-${props.color}`]: true,
        ['is-disabled']: props.disabled,
        [`is-${size}`]: true,
        ['is-alone']: props.alone,
        ['is-full']: props.full,
      },
    ]"
  >
    <span v-if="slots.prefix" class="lyc-input__prefix lyc-input__fix">
      <slot name="prefix"></slot>
    </span>
    <input
      type="text"
      v-model="innerText"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span
      v-if="props.clearable"
      v-show="innerText.length && !props.disabled"
      class="lyc-input__clear"
    >
      <lyc-button
        size="small"
        alone
        square
        :shadow="false"
        @click.stop="handleClear"
      >
        <lyc-icon type="cross" size="small"></lyc-icon>
      </lyc-button>
    </span>
    <span v-if="slots.suffix" class="lyc-input__suffix lyc-input__fix">
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, useSlots, computed, ref } from "vue";
export default defineComponent({ name: "LycInput" });
</script>
<script lang="ts" setup>
import {
  Props,
  Events,
  inputProps,
  inputEmits,
} from "@/components/input/input.d";

// define props
const props: Props = defineProps(inputProps);
// define emit
const emit = defineEmits(inputEmits);
// define slot
const slots = useSlots();

// whether input is focused
const isFocus = ref(false);

// update text value
const innerText = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit(Events.update, value);
  },
});

/**
 * handle input
 *
 * @param {Event} evt - input event
 */
const handleInput = (evt: Event) => {
  emit(Events.input, evt);
};

/**
 * handle clear input
 *
 * @param {Event} evt - click event
 */
const handleClear = (evt: Event) => {
  innerText.value = "";
  emit(Events.clear, evt);
};
/**
 * handle focus input
 *
 * @param {Event} evt - focus event
 */
const handleFocus = (evt: Event) => {
  isFocus.value = true;
  emit(Events.focus, evt);
};
/**
 * handle blur input
 *
 * @param {Event} evt - blur event
 */
const handleBlur = (evt: Event) => {
  isFocus.value = false;
  emit(Events.blur, evt);
};
</script>
