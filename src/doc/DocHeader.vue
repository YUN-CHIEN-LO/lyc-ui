<template>
  <div class="doc-page">
    <lyc-paragraph>
      In web page production, a very important part is text layout.
    </lyc-paragraph>
    <lyc-paragraph>
      A series of commonly used components are provided here to make text layout
      more convenient and intuitive.
    </lyc-paragraph>

    <!-- Basic Usage -->
    <lyc-header type="h2">Header - Basic Usage</lyc-header>

    <lyc-header type="h1">H1 Lorem ipsum dolor sit amet</lyc-header>
    <lyc-header type="h2">H2 Maecenas sed metus a sem pulvinar</lyc-header>
    <lyc-header type="h3">H3 Nam gravida imperdiet orci eget</lyc-header>
    <lyc-header type="h4">H4 Donec sit amet scelerisque orci</lyc-header>
    <lyc-header type="h5"
      >H5 Vestibulum convallis dictum sollicitudin</lyc-header
    >
    <lyc-header type="h6"
      >H6 Proin vitae dui vitae risus dictum ultrices ut et risus</lyc-header
    >

    <lyc-header type="h3" underline>Color</lyc-header>
    <lyc-row>
      <lyc-column>
        <lyc-header type="h3">Default</lyc-header>
        <lyc-header type="h3" underline>Default - Underline</lyc-header>
        <lyc-header type="h3" inverse>Default - Inverse</lyc-header>
      </lyc-column>
    </lyc-row>
    <lyc-row>
      <lyc-column>
        <lyc-header type="h3" color="primary">Primary</lyc-header>
        <lyc-header type="h3" color="primary" underline
          >Primary - Underline</lyc-header
        >
        <lyc-header type="h3" color="primary" inverse
          >Primary - Inverse</lyc-header
        >
      </lyc-column>
      <lyc-column>
        <lyc-header type="h3" color="secondary">Secondary</lyc-header>
        <lyc-header type="h3" color="secondary" underline
          >Secondary - Underline</lyc-header
        >
        <lyc-header type="h3" color="secondary" inverse
          >Secondary - Inverse</lyc-header
        >
      </lyc-column>
    </lyc-row>
    <lyc-row>
      <lyc-column>
        <lyc-header type="h3" color="success">Success</lyc-header>
        <lyc-header type="h3" color="success" underline
          >Success - Underline</lyc-header
        >
        <lyc-header type="h3" color="success" inverse
          >Success - Inverse</lyc-header
        >
      </lyc-column>
      <lyc-column>
        <lyc-header type="h3" color="warning">Warning</lyc-header>
        <lyc-header type="h3" color="warning" underline
          >Warning - Underline</lyc-header
        >
        <lyc-header type="h3" color="warning" inverse
          >Warning - Inverse</lyc-header
        >
      </lyc-column>
      <lyc-column>
        <lyc-header type="h3" color="danger">Danger</lyc-header>
        <lyc-header type="h3" color="danger" underline
          >Danger - Underline</lyc-header
        >
        <lyc-header type="h3" color="danger" inverse
          >Danger - Inverse</lyc-header
        >
      </lyc-column>
    </lyc-row>
    <lyc-row>
      <lyc-column>
        <lyc-header type="h3" color="dark">Dark</lyc-header>
        <lyc-header type="h3" color="dark" underline
          >Dark - Underline</lyc-header
        >
        <lyc-header type="h3" color="dark" inverse>Dark - Inverse</lyc-header>
      </lyc-column>
    </lyc-row>

    <!-- Document -->
    <lyc-header type="h2">Document</lyc-header>
    <lyc-header type="h3" underline>Header</lyc-header>
    <lyc-header type="h4">Props</lyc-header>
    <lyc-table :value="propTable" :columns="propColumns">
      <template #options="{ value }"> {{ value.join(", ") }} </template>
    </lyc-table>
    <lyc-header type="h4">Slots</lyc-header>
    <lyc-table :value="slotTable" :columns="slotColumns"> </lyc-table>
  </div>
</template>

<script lang="ts" setup>
import {
  propColumns,
  slotColumns,
  DocProps,
  DocSlot,
} from "@/doc/document-formats";
import { propColors } from "@/constants";

const propTable: Array<DocProps> = [
  {
    prop: "type",
    type: "string",
    description: "Set primitive html tag.",
    default: "h1",
    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  {
    prop: "color",
    type: "string",
    description: "Set color varient of header component.",
    default: "default",
    options: Object.keys(propColors),
  },
  {
    prop: "underline",
    type: "boolean",
    description:
      "Set underline style. This property can be paired with color varient.",
    default: "false",
    options: ["true", "false"],
  },
  {
    prop: "inverse",
    type: "boolean",
    description:
      "Set inverse style. Set the backgound color of header component to color varient.",
    default: "false",
    options: ["true", "false"],
  },
];

const slotTable: Array<DocSlot> = [
  {
    slot: "default",
    description: "Default slot of header content.",
    scoped: "-",
  },
];
</script>
