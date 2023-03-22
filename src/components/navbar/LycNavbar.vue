<template>
  <nav class="lyc-navbar">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LycNavbar",
});
</script>
