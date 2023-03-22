<template>
  <div class="doc-page">
    <!-- Basic Usage -->
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-input-group direction="vertical">
      <lyc-checkbox
        v-model="basicCheckbox"
        label="This is a basic usage of checkbox"
        value="basic"
      ></lyc-checkbox>

      <lyc-checkbox
        v-model="basicCheckbox"
        disabled
        label="This is a disabled checkbox"
        value="disabled"
      ></lyc-checkbox>
    </lyc-input-group>

    <!-- Input Group -->
    <lyc-header type="h2">Input Group</lyc-header>
    <lyc-row gap="8px">
      <lyc-column>
        <lyc-header type="h5">Vertical Alignment</lyc-header>
        <lyc-input-group direction="vertical">
          <lyc-checkbox
            v-for="opt in groupOptions"
            :key="opt.value"
            v-model:group="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-checkbox>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>

      <lyc-column>
        <lyc-header type="h5">Horizontal Alignment</lyc-header>
        <lyc-input-group direction="horizontal">
          <lyc-checkbox
            v-for="opt in groupOptions"
            :key="opt.value"
            v-model:group="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-checkbox>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>
    </lyc-row>

    <lyc-row gap="8px">
      <lyc-column>
        <lyc-header type="h5">Disabled All</lyc-header>
        <lyc-input-group disabled direction="vertical">
          <lyc-checkbox
            v-for="opt in groupOptions"
            :key="opt.value"
            v-model:group="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-checkbox>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>

      <lyc-column>
        <lyc-header type="h5">Disabled Options</lyc-header>
        <lyc-input-group direction="vertical">
          <lyc-checkbox
            v-for="opt in groupOptions"
            :key="opt.value"
            :disabled="opt.value === 'apple'"
            v-model:group="groupValue"
            :label="opt.label"
            :value="opt.value"
          ></lyc-checkbox>
        </lyc-input-group>
        <pre>{{ groupValue }}</pre>
      </lyc-column>
    </lyc-row>

    <lyc-header type="h5">Scattered Grouping</lyc-header>
    <lyc-paragraph>
      Here an alternative binding technique is provide to support scattered checkbox.
    </lyc-paragraph>
    <lyc-input-group direction="vertical">
      <lyc-checkbox
        v-model:group="scatteredValue"
        label="This is a grouped checkbox"
        value="group1"
      ></lyc-checkbox>
      <lyc-checkbox
        v-model:group="scatteredValue"
        label="This is also a grouped checkbox"
        value="group2"
      ></lyc-checkbox>
    </lyc-input-group>

    <lyc-paragraph> We can bind the checkboxes with another lyc-input-group</lyc-paragraph>

    <lyc-input-group direction="horizontal">
      <lyc-checkbox
        v-model:group="scatteredValue"
        label="This is a horizontal grouped checkbox"
        value="group3"
      ></lyc-checkbox>
      <lyc-checkbox
        v-model:group="scatteredValue"
        label="This is also a horizontal grouped checkbox"
        value="group4"
      ></lyc-checkbox>
    </lyc-input-group>
    <lyc-paragraph> We can also bind individual checkbox. </lyc-paragraph>
    <lyc-checkbox
      v-model:group="scatteredValue"
      label="This is a individual checkbox"
      value="individual"
    ></lyc-checkbox>

    <pre>{{ scatteredValue }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

const basicCheckbox = ref(true);
const groupOptions = [
  { label: "This is a apple.", value: "apple" },
  { label: "This is a book.", value: "book" },
  { label: "This is a car.", value: "car" },
];
const groupValue = reactive(["book"]);

const scatteredValue = reactive(["group1"]);

const basicRadio = ref("radio");
</script>
