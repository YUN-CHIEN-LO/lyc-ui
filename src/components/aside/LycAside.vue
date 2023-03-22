<template>
  <aside
    :class="{
      'lyc-aside': true,
      'is-sticky': props.sticky,
    }"
    :style="topStyle"
  >
    <div class="lyc-aside__wrapper" :style="getWidth(props.open)">
      <slot></slot>
    </div>
  </aside>
</template>
    
<script lang="ts" functional>
import { defineComponent, CSSProperties } from "vue";
export default defineComponent({ name: "LycAside" });
</script>
    
<script lang="ts" setup>
import { Props, asideProps } from "@/components/aside/aside.d";
const props: Props = defineProps(asideProps);
const topStyle: CSSProperties = {
  top: `${props.offsetTop}`,
  height: `calc(100vh - ${props.offsetTop})`,
};
const getWidth = (isOpen: boolean): CSSProperties => {
  return {
    width: isOpen ? `${props.width}` : "0px",
    padding: isOpen ? `8px 16px` : "0px",
  };
};
</script>