<template>
  <div class="doc-page">
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-header type="h3" underline>Type</lyc-header>
    <lyc-row gap="16px">
      <lyc-column>
        <lyc-list>
          <lyc-list-item>apple</lyc-list-item>
          <lyc-list-item>bee</lyc-list-item>
          <lyc-list-item>car</lyc-list-item>
        </lyc-list>
      </lyc-column>
      <lyc-column>
        <lyc-list numbered>
          <lyc-list-item>apple</lyc-list-item>
          <lyc-list-item>bee</lyc-list-item>
          <lyc-list-item>car</lyc-list-item>
        </lyc-list>
      </lyc-column>
    </lyc-row>

    <!-- Document -->
    <lyc-header type="h2">Document</lyc-header>
    <lyc-header type="h3" underline>Props</lyc-header>
    <lyc-table :value="propTable" :columns="propColumns">
      <template #options="{ value }"> {{ value.join(", ") }} </template>
    </lyc-table>
    <lyc-header type="h3" underline>Slots</lyc-header>
    <lyc-table :value="slotTable" :columns="slotColumns"> </lyc-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { propColors } from "@/constants";
import {
  propColumns,
  slotColumns,
  eventColumns,
  DocProps,
  DocSlot,
  DocEvent,
} from "@/doc/document-formats";

const typeKeys = ["paragraph", "quote", "block"];
const colorKeys = Object.keys(propColors).filter((key) => !["default", "white"].includes(key));
const toggleColor = ref(false);

const colorKeysPre = colorKeys.slice(0, 2);
const colorKeysRest = colorKeys.slice(2, colorKeys.length);

const propTable: Array<DocProps> = [
  {
    prop: "type",
    type: "string",
    description: "Set type of paragraph component.",
    default: "paragraph",
    options: typeKeys,
  },
  {
    prop: "color",
    type: "string",
    description: "Set color varient of paragraph component.",
    default: propColors.default,
    options: Object.keys(propColors),
  },
  {
    prop: "label",
    type: "string",
    description: "Set label of paragraph component.",
    default: "null",
    options: ["-"],
  },
];

const slotTable: Array<DocSlot> = [
  {
    slot: "default",
    description: "Default slot of paragraph content.",
    scoped: "-",
  },
  {
    slot: "label",
    description: "Label slot of paragraph content.",
    scoped: "-",
  },
  {
    slot: "footnote",
    description: "Footnote slot of paragraph content.",
    scoped: "-",
  },
];
</script>
