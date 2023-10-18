<template>
  <button class="lyc-button">
    lyc button
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.lyc-button {
  border: solid 1px $color-primary;
}
</style>
