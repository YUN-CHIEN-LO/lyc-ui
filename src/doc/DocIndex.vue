<template>
  <div class="doc-index">
    <lyc-navbar>
      <lyc-button alone size="small" @click="toggleOpen">
        <lyc-icon icon="hamburger" :open="open"></lyc-icon>
      </lyc-button>

      <lyc-button size="small">Home</lyc-button>
    </lyc-navbar>
    <lyc-main>
      <lyc-aside fixed class="doc-index__aside" :open="open" @close="handleClose">
        <lyc-button type="primary" full alone title="primary">Button</lyc-button>
        <lyc-button type="primary" full alone title="primary">Card</lyc-button>
      </lyc-aside>
      <lyc-article>
        <lyc-card shadow show-tool> </lyc-card>
        <lyc-card shadow show-tool type="light" title="light"> </lyc-card>
        <lyc-card shadow show-tool type="dark" title="dark"></lyc-card>
        <lyc-card shadow type="primary" title="primary"></lyc-card>
        <lyc-card shadow type="secondary" title="secondary"></lyc-card>
        <lyc-card shadow type="danger" title="danger"></lyc-card>
        <lyc-card shadow type="success" title="success"></lyc-card>
        <lyc-card shadow type="warning" title="warning"></lyc-card>
        <lyc-button>123</lyc-button>
        <lyc-button type="light">123</lyc-button>
        <lyc-button type="dark">123</lyc-button>
        <lyc-button type="primary">123</lyc-button>
        <lyc-button type="secondary">123</lyc-button>
        <lyc-button type="danger">123</lyc-button>
        <lyc-button type="success">123</lyc-button>
        <lyc-button type="warning">123</lyc-button>
        <lyc-button type="primary" size="small">123</lyc-button>
        <lyc-button type="primary" size="large">123</lyc-button>
      </lyc-article>
    </lyc-main>
  </div>
</template>

<script lang="ts">
import LycArticleCe from "@/components/article/LycArticle.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { LycArticleCe },
  name: "DocIndex",
  setup() {
    const open = ref(false);

    const toggleOpen = () => {
      open.value = !open.value;
    };
    const handleClose = () => {
      open.value = false;
    };

    return { open, toggleOpen, handleClose };
  },
});
</script>

<style lang="scss">
.doc-index {
}
</style>
