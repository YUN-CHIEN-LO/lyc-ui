<template>
  <main class="lyc-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LycMain",
});
</script>
