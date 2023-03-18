<template>
  <article class="lyc-article">
    <slot></slot>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LycArticle",
});
</script>
