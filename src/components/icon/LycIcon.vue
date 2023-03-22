<template>
  <div :class="['lyc-icon', typeClass, { 'is-open': open }]">
    <div class="lyc-icon__strike lyc-icon__strike--1"></div>
    <div class="lyc-icon__strike lyc-icon__strike--2"></div>
    <div v-if="isHamburger" class="lyc-icon__strike lyc-icon__strike--3"></div>
  </div>
</template>

<script lang="ts">
import { propTypes, propSizes } from "@/constants";
import { defineComponent, toRefs, computed } from "vue";

export default defineComponent({
  name: "LycIcon",
  props: {
    icon: {
      type: String,
      default: "cross",
    },
    type: {
      type: String,
      default: propTypes.default,
      validator(value: string) {
        return Object.keys(propTypes).includes(value);
      },
    },
    size: {
      type: String,
      default: propSizes.medium,
      validator(value: string) {
        return Object.keys(propSizes).includes(value);
      },
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const typeClass = `is-${props.type} is-${props.icon} is-${props.size}`;
    const { open } = toRefs(props);
    const isHamburger = computed(() => props.icon === "hamburger");
    return {
      typeClass,
      open,
      isHamburger,
    };
  },
});
</script>
