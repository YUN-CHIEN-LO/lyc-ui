<template>
  <div class="doc-page">
    <!-- Basic Usage -->
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-input-group direction="vertical">
      <lyc-radio v-model="basicRadio" label="This is a radio" value="radio"></lyc-radio>
      <lyc-radio v-model="basicRadio" label="This is a radio1" value="radio1"></lyc-radio>
    </lyc-input-group>

    <!-- Input Group -->
    <lyc-header type="h2">Input Group</lyc-header>
    <lyc-row gap="8px">
      <lyc-column>
        <lyc-header type="h5">Vertical Alignment</lyc-header>
        <lyc-input-group direction="vertical">
          <lyc-radio
            v-for="opt in groupOptions"
            :key="opt.value"
            v-model="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-radio>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>

      <lyc-column>
        <lyc-header type="h5">Horizontal Alignment</lyc-header>
        <lyc-input-group direction="horizontal">
          <lyc-radio
            v-for="opt in groupOptions"
            :key="opt.value"
            v-model="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-radio>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>
    </lyc-row>

    <lyc-row gap="8px">
      <lyc-column>
        <lyc-header type="h5">Disabled All</lyc-header>
        <lyc-input-group disabled direction="vertical">
          <lyc-radio
            v-for="opt in groupOptions"
            :key="opt.value"
            v-model="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-radio>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>

      <lyc-column>
        <lyc-header type="h5">Disabled Options</lyc-header>
        <lyc-input-group direction="vertical">
          <lyc-radio
            v-for="opt in groupOptions"
            :key="opt.value"
            :disabled="opt.value === 'apple'"
            v-model="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-radio>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>
    </lyc-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const basicRadio = ref("");

const groupOptions = [
  { label: "This is a apple.", value: "apple" },
  { label: "This is a book.", value: "book" },
  { label: "This is a car.", value: "car" },
];
const groupValue = ref("book");
</script>
