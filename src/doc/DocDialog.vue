<template>
  <div class="doc-page">
    <!-- Dialog -->
    <lyc-header type="h2">Dialog</lyc-header>
    <!-- Basic Usage -->
    <lyc-header type="h3" underline>Basic Usage</lyc-header>
    <lyc-button color="primary" alone full @click="demoVisible = true">
      Open Dialog Demo
    </lyc-button>
    <lyc-dialog
      ref="demoDialogRef"
      v-model:visible="demoVisible"
      label="This is a basic usage demo."
      max-width="600px"
      :beforeClose="handleBeforeClose"
    >
      <lyc-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lacus eget eros
        mollis pulvinar. Sed tincidunt neque turpis, sollicitudin facilisis ligula fringilla et.
      </lyc-paragraph>
      <lyc-row gap="0px">
        <lyc-column style="display: flex">
          <lyc-button
            full
            style="max-width: 100px; margin-left: auto"
            color="danger"
            outline
            @click="closeDemoDialog"
          >
            Cancel
          </lyc-button>
          <lyc-button full color="primary" @click="nestedVisible = true">
            Open nested dialog
          </lyc-button>

          <lyc-dialog
            v-model:visible="nestedVisible"
            label="Nested dialog"
            max-width="300px"
            :show-tool="false"
            @open="log('open')"
            @opened="log('opened')"
            @close="log('close')"
            @closed="log('closed')"
          >
            <lyc-paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lacus eget
              eros mollis pulvinar.
            </lyc-paragraph>
          </lyc-dialog>
        </lyc-column>
      </lyc-row>
    </lyc-dialog>

    <!-- Direction -->
    <lyc-header type="h3" underline>Direction</lyc-header>
    <lyc-row>
      <lyc-column v-for="direction in directionTypes" :key="direction">
        <lyc-button outline color="primary" alone full @click="openDirectionDialog(direction)">
          {{ direction }}
        </lyc-button>
      </lyc-column>

      <lyc-dialog
        v-model:visible="directionDialogVisible"
        :label="`Direction - ${dialogDirection}`"
        :direction="dialogDirection"
        max-width="300px"
        :beforeClose="handleBeforeClose"
        @open="log('open')"
        @opened="log('opened')"
        @close="log('close')"
        @closed="log('closed')"
      >
        <lyc-paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lacus eget eros
          mollis pulvinar. Sed tincidunt neque turpis, sollicitudin facilisis ligula fringilla et.
        </lyc-paragraph>
      </lyc-dialog>
    </lyc-row>

    <!-- Base Modal -->
    <lyc-header type="h2">Base Modal</lyc-header>
    <!-- Direction -->
    <lyc-header type="h3" underline>Direction</lyc-header>
    <lyc-row>
      <lyc-column v-for="direction in directionTypes" :key="direction">
        <lyc-button color="primary" alone full @click="openDirectionModal(direction)">
          {{ direction }}
        </lyc-button>
      </lyc-column>
    </lyc-row>

    <lyc-modal
      v-model="baseModalVisible"
      :direction="baseModalDirection"
      @open="log('open')"
      @opened="log('opened')"
      @close="log('close')"
      @closed="log('closed')"
    ></lyc-modal>

    <!-- Container -->
    <lyc-header type="h3" underline>Container</lyc-header>
    <div ref="myContainer" class="my-container">
      <lyc-button full alone color="success" @click="containerVisible = true">
        Open dialog in container
      </lyc-button>
    </div>
    <lyc-dialog
      v-model:visible="containerVisible"
      :container="getContainer"
      fit-container
      minWidth="200px"
      label="Dialog fit container."
    >
      <lyc-paragraph> Container element must be position relative. </lyc-paragraph>
    </lyc-dialog>
  </div>
</template>

<script lang="ts" setup>
import { isEmpty, isFunction } from "lodash";
import { ref } from "vue";

// basic demo
const demoVisible = ref(false);
const openDemoDialog = () => {
  demoVisible.value = true;
};
const demoDialogRef = ref(null);
const closeDemoDialog = () => {
  const refValue: { close?: Function } = demoDialogRef.value ?? {};
  if (isEmpty(refValue) || !isFunction(refValue?.close)) return;
  refValue?.close("cancel");
};
const handleBeforeClose = (done: Function, trigger: string) => {
  console.log("123", trigger);
  done();
};

// nested dialog
const nestedVisible = ref(false);

// direction dialog
const dialogDirection = ref("none");
const directionDialogVisible = ref(false);
const openDirectionDialog = (direction: string) => {
  dialogDirection.value = direction;
  directionDialogVisible.value = true;
};

// container
const myContainer = ref(null);
const containerVisible = ref(false);
const getContainer = () => {
  return myContainer.value;
};

// base modal
const directionTypes = ["none", "up", "right", "down", "left"];
const baseModalDirection = ref("none");
const baseModalVisible = ref(false);
const openDirectionModal = (direction: string) => {
  baseModalDirection.value = direction;
  baseModalVisible.value = true;
};

const log = (text: string) => {
  console.log(text);
};
</script>

<style lang="scss" scoped>
.my-container {
  width: 300px;
  height: 300px;
  border: solid 2px #888888;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
