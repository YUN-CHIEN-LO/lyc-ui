<template>
  <div class="doc-page">
    <lyc-paragraph>
      Some commonly used icons are provided. With little CSS animation, these
      icons can be a delightful surprise!
    </lyc-paragraph>
    <lyc-paragraph>
      You can apply color variants to the icons. You can also use icon in button
      components' default slot.
    </lyc-paragraph>

    <!-- Basic Usage -->
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-header type="h3" underline>Type</lyc-header>
    <lyc-row gap="8px">
      <lyc-column
        v-for="typeKey in typeKeys"
        :key="`type-${typeKey}`"
        minWidth="300px"
      >
        <lyc-header type="h5"> {{ typeKey }} </lyc-header>
        <lyc-row alignment="center">
          <LycIcon
            v-for="key in sizeKeys"
            :key="`type-${typeKey}-${key}`"
            :size="key"
            :type="typeKey"
          />
        </lyc-row>
      </lyc-column>
    </lyc-row>

    <lyc-header type="h3" underline>Color</lyc-header>

    <lyc-row
      v-for="typeKey in typeKeys"
      :key="`color-${typeKey}`"
      alignment="center"
    >
      <LycIcon
        v-for="key in colorKeys"
        :key="`color-${typeKey}-${key}`"
        :color="key"
        :type="typeKey"
      />
    </lyc-row>

    <lyc-header type="h3" underline>Within Button</lyc-header>
    <lyc-row>
      <lyc-column
        minWidth="300px"
        v-for="(typeKey, index) in typeKeys"
        :key="`button-${typeKey}`"
      >
        <lyc-row alignment="center">
          <lyc-button
            v-for="key in sizeKeys"
            :key="`button-${typeKey}-${key}`"
            :size="key"
            :color="colorKeys[(index % (colorKeys.length - 2)) + 1]"
            square
          >
            <LycIcon :size="key" :type="typeKey" color="light" />
          </lyc-button>
        </lyc-row>
      </lyc-column>
    </lyc-row>

    <!-- Document -->
    <lyc-header type="h2">Document</lyc-header>
    <lyc-header type="h3" underline>Props</lyc-header>
    <lyc-table :value="propTable" :columns="propColumns">
      <template #options="{ value }"> {{ value.join(", ") }} </template>
    </lyc-table>
  </div>
</template>

<script lang="ts" setup>
import { propColumns, DocProps } from "@/doc/document-formats";
import { propColors, propSizes } from "@/constants";
const typeKeys = [
  "cross",
  "hamburger",
  "toggle",
  "check",
  "dot",
  "plus",
  "arrow-up",
  "arrow-up-right",
  "arrow-right",
  "arrow-down-right",
  "arrow-down",
  "arrow-down-left",
  "arrow-left",
  "arrow-up-left",
];
const colorKeys = Object.keys(propColors);
const sizeKeys = Object.keys(propSizes);

const propTable: Array<DocProps> = [
  {
    prop: "color",
    type: "string",
    description: "Set color variant of header component.",
    default: propColors.default,
    options: colorKeys,
  },
  {
    prop: "type",
    type: "string",
    description: "Assign icon type.",
    default: "cross",
    options: typeKeys,
  },
];
</script>
