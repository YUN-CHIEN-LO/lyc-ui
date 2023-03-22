<template>
  <div class="doc-page">
    <lyc-header type="h2">Props</lyc-header>
    <lyc-header type="h3" underline>Color</lyc-header>
    <lyc-row>
      <lyc-link>default</lyc-link>
      <lyc-link color="dark">dark</lyc-link>
      <lyc-link color="primary">primary</lyc-link>
      <lyc-link color="secondary">secondary</lyc-link>
      <lyc-link color="danger">danger</lyc-link>
      <lyc-link color="success">success</lyc-link>
      <lyc-link color="warning">warning</lyc-link>
    </lyc-row>
    <lyc-row>
      <lyc-link disabled>default</lyc-link>
      <lyc-link disabled color="dark">dark</lyc-link>
      <lyc-link disabled color="primary">primary</lyc-link>
      <lyc-link disabled color="secondary">secondary</lyc-link>
      <lyc-link disabled color="danger">danger</lyc-link>
      <lyc-link disabled color="success">success</lyc-link>
      <lyc-link disabled color="warning">warning</lyc-link>
    </lyc-row>
    <lyc-header type="h3" underline>Active</lyc-header>
    <lyc-row>
      <lyc-link active>default</lyc-link>
      <lyc-link active color="dark">dark</lyc-link>
      <lyc-link active color="primary">primary</lyc-link>
      <lyc-link active color="secondary">secondary</lyc-link>
      <lyc-link active color="danger">danger</lyc-link>
      <lyc-link active color="success">success</lyc-link>
      <lyc-link active color="warning">warning</lyc-link>
    </lyc-row>
    <lyc-row>
      <lyc-link active disabled>default</lyc-link>
      <lyc-link active disabled color="dark">dark</lyc-link>
      <lyc-link active disabled color="primary">primary</lyc-link>
      <lyc-link active disabled color="secondary">secondary</lyc-link>
      <lyc-link active disabled color="danger">danger</lyc-link>
      <lyc-link active disabled color="success">success</lyc-link>
      <lyc-link active disabled color="warning">warning</lyc-link>
    </lyc-row>
    <lyc-header type="h3" underline>Size</lyc-header>
    <lyc-row>
      <lyc-link size="small">default</lyc-link>
      <lyc-link>default</lyc-link>
      <lyc-link size="large">default</lyc-link>
    </lyc-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocLink",
});
</script>
