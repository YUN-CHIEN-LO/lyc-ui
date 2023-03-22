<template>
  <aside :class="['lyc-aside', { 'is-fixed': fixed }, typeClass]">
    <div :class="['lyc-aside__wrapper', { 'is-open': open }]" :style="getWidth(open)">
      <div v-if="showTool" class="lyc-aside__tool">
        <slot name="tool">
          <lyc-button size="small" @click="handleClose">
            <lyc-icon icon="cross" size="small"></lyc-icon>
          </lyc-button>
        </slot>
      </div>
      <slot></slot>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "LycAside",
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "240px",
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    showTool: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "left",
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const typeClass = `is-${props.direction}`;
    const getWidth = (open: boolean) => {
      return {
        width: open ? props.width : "0px",
      };
    };
    const { open } = toRefs(props);
    const handleClose = () => {
      emit("close");
    };
    return {
      typeClass,
      open,
      getWidth,
      handleClose,
    };
  },
});
</script>
