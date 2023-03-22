<template>
  <div class="doc-page">
    <lyc-input v-model="basicInput" v-for="color in colorKeys" :key="color" :color="color">
      <template #prefix>{{ color }}: </template>
      <template #suffix>suffix</template>
    </lyc-input>
    <br />

    <lyc-input v-model="basicInput" v-for="color in colorKeys" :key="color" :color="color" disabled>
      <template #prefix>{{ color }}: </template>
      <template #suffix>suffix</template>
    </lyc-input>
    <br />

    <div v-for="size in sizeKeys" :key="size">
      <lyc-input v-model="basicInput" :size="size">
        <template #prefix>{{ size }}: </template>
      </lyc-input>
      <lyc-button :size="size">Send</lyc-button>
    </div>

    {{ basicInput }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { propColors, propSizes } from "@/constants";
const colorKeys = Object.keys(propColors);
const sizeKeys = Object.keys(propSizes);

const basicInput = ref("");
</script>
