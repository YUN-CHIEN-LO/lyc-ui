<template>
  <button
    :class="{
      'lyc-button': true,
      [`is-${props.color}`]: true,
      [`is-${props.size}`]: true,
      'is-shadow': props.shadow,
      'is-full': props.full,
      'is-alone': props.alone,
      'is-outline': props.outline,
      'is-disabled': props.disabled,
      'is-square': props.square,
    }"
    @click="handleClick"
  >
    <div class="lyc-button__label">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts" functional>
import { defineComponent } from "vue";
export default defineComponent({ name: "LycButton" });
</script>

<script lang="ts" setup>
import {
  Props,
  Events,
  buttonProps,
  buttonEmits,
} from "@/components/button/button.d";

// define props
const props: Props = defineProps(buttonProps);
// define emit
const emit = defineEmits(buttonEmits);

/**
 * handle click button
 *
 * @param {Event} evt - click event
 */
const handleClick = (evt: Event) => {
  emit(Events.click, evt);
};
</script>
