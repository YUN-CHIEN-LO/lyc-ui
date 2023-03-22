<template>
  <a
    :class="{
      'lyc-link': true,
      [`is-${props.color}`]: true,
      [`is-${props.size}`]: true,
      'is-full': props.full,
      'is-alone': props.alone,
      'is-disabled': props.disabled,
      'is-active': props.active,
    }"
    v-bind="attrs"
    @click.stop="handleClick"
  >
    <slot></slot>
  </a>
</template>
  
  <script lang="ts" functional>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LycLink",
});
</script>
  
  <script lang="ts" setup>
import { useAttrs } from "vue";
import { Props, Events, linkProps, linkEmits } from "@/components/link/link";

const attrs = useAttrs();
const props: Props = defineProps(linkProps);
const emit = defineEmits(linkEmits);

const handleClick = (evt: Event) => {
  emit(Events.click, evt);
};
</script>
  