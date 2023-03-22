<template>
  <div class="doc-page">
    <lyc-header type="h3">Todo</lyc-header>
    <div class="block">
      <div v-for="color in colors" :key="color" :class="`color ${color}`"></div>
    </div>
    <lyc-input-group direction="vertical">
      <lyc-checkbox
        v-for="opt in checkOptions"
        :key="opt"
        v-model:group="groupCheck"
        :value="opt"
        :label="opt"
      ></lyc-checkbox>
    </lyc-input-group>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const colors = [
  "transparent",
  "white",
  "black",
  "gray-light",
  "gray-light-1",
  "gray-light-2",
  "gray-light-3",
  "gray",
  "gray-dark-1",
  "gray-dark-2",
  "gray-dark-3",
  "gray-dark",
  "red-light",
  "red-light-1",
  "red-light-2",
  "red-light-3",
  "red",
  "red-dark-1",
  "red-dark-2",
  "red-dark-3",
  "red-dark",
  "yellow-light",
  "yellow-light-1",
  "yellow-light-2",
  "yellow-light-3",
  "yellow",
  "yellow-dark-1",
  "yellow-dark-2",
  "yellow-dark-3",
  "yellow-dark",
  "green-light",
  "green-light-1",
  "green-light-2",
  "green-light-3",
  "green",
  "green-dark-1",
  "green-dark-2",
  "green-dark-3",
  "green-dark",
  "blue-light",
  "blue-light-1",
  "blue-light-2",
  "blue-light-3",
  "blue",
  "blue-dark-1",
  "blue-dark-2",
  "blue-dark-3",
  "blue-dark",
  "purple-light",
  "purple-light-1",
  "purple-light-2",
  "purple-light-3",
  "purple",
  "purple-dark-1",
  "purple-dark-2",
  "purple-dark-3",
  "purple-dark",
];

const groupCheck = reactive([]);
const checkOptions = [
  "Textarea",
  "Number",
  "Select",
  "Tree",
  "Tooltip",
  "Popover",
  "Alert",
  "Divider",
  "List",
  "empty",
  "skeleton",
  "toggleGroup",
];
</script>

<style lang="scss" scoped>
@import "@/styles/global/var";
.block {
  display: flex;
  flex-wrap: wrap;
  width: 320px;
}
.color {
  width: 100px;
  height: 100px;
  margin: 2px;
}
.transparent {
  background-color: $color-transparent;
}
.white {
  background-color: $color-white;
}
.black {
  background-color: $color-black;
}
.red {
  background-color: $color-danger;
}
.gray {
  background-color: $color-gray;
}
.yellow {
  background-color: $color-warning;
}
.green {
  background-color: $color-success;
}
.blue {
  background-color: $color-primary;
}
.purple {
  background-color: $color-secondary;
}
.gray-light {
  background-color: $color-gray-light;
}
.gray-light-1 {
  background-color: $color-gray-light-1;
}
.gray-light-2 {
  background-color: $color-gray-light-2;
}
.gray-light-3 {
  background-color: $color-gray-light-3;
}
.gray-dark-1 {
  background-color: $color-gray-dark-1;
}
.gray-dark-2 {
  background-color: $color-gray-dark-2;
}
.gray-dark-3 {
  background-color: $color-gray-dark-3;
}
.gray-dark {
  background-color: $color-gray-dark;
}
.red-light {
  background-color: $color-danger-light;
}
.red-light-1 {
  background-color: $color-danger-light-1;
}
.red-light-2 {
  background-color: $color-danger-light-2;
}
.red-light-3 {
  background-color: $color-danger-light-3;
}
.red-dark-1 {
  background-color: $color-danger-dark-1;
}
.red-dark-2 {
  background-color: $color-danger-dark-2;
}
.red-dark-3 {
  background-color: $color-danger-dark-3;
}
.red-dark {
  background-color: $color-danger-dark;
}
.yellow-light {
  background-color: $color-warning-light;
}
.yellow-light-1 {
  background-color: $color-warning-light-1;
}
.yellow-light-2 {
  background-color: $color-warning-light-2;
}
.yellow-light-3 {
  background-color: $color-warning-light-3;
}
.yellow-dark-1 {
  background-color: $color-warning-dark-1;
}
.yellow-dark-2 {
  background-color: $color-warning-dark-2;
}
.yellow-dark-3 {
  background-color: $color-warning-dark-3;
}
.yellow-dark {
  background-color: $color-warning-dark;
}
.green-light {
  background-color: $color-success-light;
}
.green-light-1 {
  background-color: $color-success-light-1;
}
.green-light-2 {
  background-color: $color-success-light-2;
}
.green-light-3 {
  background-color: $color-success-light-3;
}
.green-dark-1 {
  background-color: $color-success-dark-1;
}
.green-dark-2 {
  background-color: $color-success-dark-2;
}
.green-dark-3 {
  background-color: $color-success-dark-3;
}
.green-dark {
  background-color: $color-success-dark;
}
.blue-light {
  background-color: $color-primary-light;
}
.blue-light-1 {
  background-color: $color-primary-light-1;
}
.blue-light-2 {
  background-color: $color-primary-light-2;
}
.blue-light-3 {
  background-color: $color-primary-light-3;
}
.blue-dark-1 {
  background-color: $color-primary-dark-1;
}
.blue-dark-2 {
  background-color: $color-primary-dark-2;
}
.blue-dark-3 {
  background-color: $color-primary-dark-3;
}
.blue-dark {
  background-color: $color-primary-dark;
}
.purple-light {
  background-color: $color-secondary-light;
}
.purple-light-1 {
  background-color: $color-secondary-light-1;
}
.purple-light-2 {
  background-color: $color-secondary-light-2;
}
.purple-light-3 {
  background-color: $color-secondary-light-3;
}
.purple-dark-1 {
  background-color: $color-secondary-dark-1;
}
.purple-dark-2 {
  background-color: $color-secondary-dark-2;
}
.purple-dark-3 {
  background-color: $color-secondary-dark-3;
}
.purple-dark {
  background-color: $color-secondary-dark;
}
</style>
