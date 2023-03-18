<template>
  <div :class="['lyc-card', typeClass, { 'is-shadow': shadow, 'is-full': full }]">
    <div class="lyc-card__header">
      <slot name="header">
        <div class="lyc-card__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="showTool" class="lyc-card__tool">
          <slot name="tool">
            <lyc-button class="lyc-card__close" size="small">
              <lyc-icon icon="cross" size="small" :type="crossType"></lyc-icon>
            </lyc-button>
          </slot>
        </div>
      </slot>
    </div>
    <div class="lyc-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { propTypes } from "@/constants";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LycCard",
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
    full: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Card",
    },
    showTool: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    const typeClass = `is-${props.type}`;
    const crossType = props.type === propTypes.dark ? propTypes.light : propTypes.default;

    return {
      typeClass,
      crossType,
    };
  },
});
</script>
