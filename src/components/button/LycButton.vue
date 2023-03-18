<template>
  <div
    :class="[
      'lyc-button',
      typeClass,
      sizeClass,
      { 'is-shadow': shadow, 'is-full': full, 'is-alone': alone },
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { propTypes, propSizes } from "@/constants";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LycButton",
  props: {
    type: {
      type: String,
      default: propTypes.default,
      validator(value: string) {
        return Object.keys(propTypes).includes(value);
      },
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: propSizes.medium,
      validator(value: string) {
        return Object.keys(propSizes).includes(value);
      },
    },
    full: {
      type: Boolean,
      default: false,
    },
    alone: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["on-click"],
  setup(props, { emit, slots }) {
    const typeClass = `is-${props.type}`;
    const sizeClass = `is-${props.size}`;
    const handleClick = () => emit("on-click");
    return {
      typeClass,
      sizeClass,
      handleClick,
    };
  },
});
</script>
