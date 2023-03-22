<template>
  <p
    :class="{
      'lyc-paragraph': true,
      [`is-${props.color}`]: true,
      [`is-${props.type}`]: true,
    }"
  >
    <lyc-header type="h6" class="lyc-paragraph__label">
      <slot name="label"> {{ props.label }} </slot>
    </lyc-header>
    <slot></slot>
    <p class="lyc-paragraph__footnote">
        <slot name="footnote"></slot>
    </p>
  </p>
</template>
  
<script lang="ts" functional>
import { defineComponent } from "vue";
export default defineComponent({ name: "LycParagraph" });
</script>
  
<script lang="ts" setup>
import { Props, paragraphProps } from "@/components/paragraph/paragraph.d";
const props: Props = defineProps(paragraphProps);
</script>
  