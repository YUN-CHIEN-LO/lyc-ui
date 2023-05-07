<template>
  <li><slot></slot></li>
</template>

<script lang="ts" functional>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LycListItem",
});
</script>
