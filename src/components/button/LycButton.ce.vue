<template>
  <div class="lyc-button" @click="handleClick">
    按鈕：
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useCheckSlot } from "@/utils";

export default {
  name: "LycButton",
  emits: ["on-click"],
  setup(props, { emit, slots }) {
    const defaultSlot = useCheckSlot(slots, "default");
    const handleClick = () => emit("on-click");
    return {
      defaultSlot,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.lyc-button {
  display: inline-block;
  color: $white;
  background-color: $primary;
  @extend .has-padding;
  @extend .has-border-radius;
  @extend .has-transition;
  cursor: pointer;
  &:hover {
    background-color: $primary-dark;
  }
  &:active,
  &:focus {
    background-color: $primary-light;
  }
}
</style>
