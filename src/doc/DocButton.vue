<template>
  <div class="doc-page">
    <!-- Basic Usage -->
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-header type="h3" underline>Color</lyc-header>
    <lyc-row gap="8px">
      <lyc-button
        v-for="color in colorKeys"
        :key="`demo-${color}`"
        :color="color"
      >
        {{ color }}
      </lyc-button>
    </lyc-row>
    <lyc-header type="h5">Color - Disabled</lyc-header>
    <lyc-row gap="8px">
      <lyc-button
        v-for="color in colorKeys"
        :key="`disabled-${color}`"
        :color="color"
        disabled
      >
        {{ color }}
      </lyc-button>
    </lyc-row>
    <lyc-header type="h3" underline>Outline</lyc-header>
    <lyc-row gap="8px">
      <lyc-button
        v-for="color in colorKeys"
        :key="`outline-${color}`"
        :color="color"
        outline
      >
        {{ color }}
      </lyc-button>
    </lyc-row>
    <lyc-header type="h5">Outline - Disabled</lyc-header>
    <lyc-row gap="8px">
      <lyc-button
        v-for="color in colorKeys"
        :key="`outline-disabled-${color}`"
        :color="color"
        outline
        disabled
      >
        {{ color }}
      </lyc-button>
    </lyc-row>

    <lyc-header type="h3" underline>Size</lyc-header>
    <lyc-row gap="8px">
      <lyc-button
        v-for="size in sizeKeys"
        :key="`${size}`"
        color="primary"
        :size="size"
      >
        {{ size }}
      </lyc-button>
      <lyc-button
        v-for="size in sizeKeys"
        :key="`outline-${size}`"
        color="primary"
        :size="size"
        outline
      >
        {{ size }}
      </lyc-button>
    </lyc-row>

    <!-- Document -->
    <lyc-header type="h2">Document</lyc-header>
    <lyc-header type="h3" underline>Props</lyc-header>
    <lyc-table :value="propTable" :columns="propColumns">
      <template #options="{ value }"> {{ value.join(", ") }} </template>
    </lyc-table>
    <lyc-header type="h3" underline>Slots</lyc-header>
    <lyc-table :value="slotTable" :columns="slotColumns"> </lyc-table>
    <lyc-header type="h3" underline>Events</lyc-header>
    <lyc-table :value="eventTable" :columns="eventColumns"> </lyc-table>
  </div>
</template>

<script lang="ts" setup>
import {
  propColumns,
  slotColumns,
  eventColumns,
  DocProps,
  DocSlot,
  DocEvent,
} from "@/doc/document-formats";
import { propColors, propSizes } from "@/constants";

const colorKeys = Object.keys(propColors);
const sizeKeys = Object.keys(propSizes);

const propTable: Array<DocProps> = [
  {
    prop: "color",
    type: "string",
    description: "Set color varient of header component.",
    default: propColors.default,
    options: Object.keys(propColors),
  },
  {
    prop: "size",
    type: "string",
    description: "Set size of button component.",
    default: propSizes.medium,
    options: Object.keys(propSizes),
  },
  {
    prop: "outline",
    type: "boolean",
    description:
      "Set outline style to buttom component. This can be paired with color variant property.",
    default: "false",
    options: ["true", "false"],
  },
  {
    prop: "disabled",
    type: "boolean",
    description: "Set button style to disabled.",
    default: "false",
    options: ["true", "false"],
  },
  {
    prop: "shadow",
    type: "boolean",
    description:
      "Set shadow style when button component is hovered, actived, or focused.",
    default: "false",
    options: ["true", "false"],
  },
  {
    prop: "full",
    type: "boolean",
    description: "Set full width of button. That is, set style width to 100%.",
    default: "false",
    options: ["true", "false"],
  },
  {
    prop: "alone",
    type: "boolean",
    description:
      "Remove margin styles, which are for the pupose of group buttons layout.",
    default: "false",
    options: ["true", "false"],
  },
];

const slotTable: Array<DocSlot> = [
  {
    slot: "default",
    description: "Default slot of button content.",
    scoped: "-",
  },
];

const eventTable: Array<DocEvent> = [
  {
    event: "click",
    description: "Trigger when button component is clicked",
    arg: "-",
  },
];
</script>
