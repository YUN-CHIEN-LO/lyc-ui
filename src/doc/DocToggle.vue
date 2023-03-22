<template>
  <div class="doc-page">
    <!-- Basic Usage -->
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-header type="h3" underline>Color</lyc-header>
    <lyc-row gap="8px">
      <lyc-toggle v-model:open="open" label="This is a default usage of toggle.">
        <lyc-paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lacus eget eros
          mollis pulvinar. Sed tincidunt neque turpis, sollicitudin facilisis ligula fringilla et.
          In sed eleifend nunc, ac commodo tellus. Aenean vitae lorem sit amet nulla laoreet
          ultricies quis et ipsum. Sed bibendum elementum ipsum vitae tristique. Aliquam justo arcu,
          imperdiet varius accumsan vel, suscipit eget sapien. Etiam sit amet pellentesque justo.
          Nulla cursus tortor non eleifend sagittis. Suspendisse lobortis magna eget mi blandit, non
          pellentesque leo convallis. Duis a accumsan enim.
        </lyc-paragraph>
      </lyc-toggle>
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
import { ref } from "vue";
import {
  propColumns,
  slotColumns,
  eventColumns,
  DocProps,
  DocSlot,
  DocEvent,
} from "@/doc/document-formats";
import { propColors } from "@/constants";

const open = ref(false);

const propTable: Array<DocProps> = [
  {
    prop: "color",
    type: "string",
    description: "Set color varient of header component.",
    default: propColors.default,
    options: Object.keys(propColors),
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
