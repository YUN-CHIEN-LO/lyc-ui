<template>
  <div
    :id="modalId"
    :class="{
      ['lyc-modal']: true,
      ['is-open']: isShow,
      ['is-display']: isDoneShow,
      [`is-direction-${props.direction}`]: true,
      ['is-fit-container']: props.fitContainer,
    }"
    :style="{
      ['z-index']: modalIndex,
    }"
  >
    <div
      :class="{
        ['lyc-modal__background']: true,
        ['is-hide']: !props.showModal,
      }"
      @click.stop="handleClickModal"
    ></div>
    <div class="lyc-modal__content">
      <div class="lyc-modal__pad" @click.stop="handleClickModal"></div>
      <slot></slot>
      <div class="lyc-modal__pad" @click.stop="handleClickModal"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useSlots, ref, watch, onMounted, onUnmounted } from "vue";
export default defineComponent({
  name: "LycModal",
});
</script>
<script lang="ts" setup>
import { setTimeoutTimer, getContainerDom } from "@/utils";
import { isElement, uniqueId } from "lodash";
import { Props, Events, modalProps, modalEmits } from "@/components/modal/modal";

const props: Props = defineProps(modalProps);
const emit = defineEmits(modalEmits);
const slots = useSlots();

/* == Constant declaration == */
// assign unique modal id
const modalId = uniqueId("modal-");
// calculate modal z-index
const getModelIndex = () => {
  return 2000 + parseInt((uniqueId("modal-index-").match(/\d+/g) ?? []).join(""));
};
// modal z-index value
const modalIndex = ref(0);

// whether modal is visible
const isShow = ref(props.modelValue);
// whether modal is done visible animation
const isDoneShow = ref(props.modelValue);

/* == Methods == */
/**
 * lock container scroll
 *
 * @param {HTMLElement} container
 */
const doLockScroll = (container: HTMLElement) => {
  if (!props.lockScroll) return;
  container.style.overflowY = "hidden";
};

/**
 * unlock container scroll
 *
 * @param {HTMLElement} container
 */
const doUnlockScroll = (container: HTMLElement) => {
  if (!props.lockScroll) return;
  container.style.overflowY = "";
};

/**
 * open modal
 */
const doModalOpen = () => {
  // increase z-index to avoid overlay issues
  modalIndex.value = getModelIndex();
  // get container dom
  const containerDom = getContainerDom(props.container);
  // lock container scroll
  doLockScroll(containerDom);
  // open modal
  isShow.value = true;
  emit(Events.open);
  // wait for open animation to end
  setTimeoutTimer().then(() => {
    // done open
    isDoneShow.value = true;
    emit(Events.opened);
  });
};

/**
 * close modal
 */
const doModalClose = () => {
  // get container dom
  const containerDom = getContainerDom(props.container);
  // unlock container scroll
  doUnlockScroll(containerDom);
  // close modal
  isDoneShow.value = false;
  emit(Events.close);
  // wait for close animation to end
  setTimeoutTimer().then(() => {
    // done close
    isShow.value = false;
    emit(Events.closed);
  });
};

/**
 * trigger close modal
 */
const handleClose = () => {
  emit(Events.update, false);
};

/**
 * handle click modal
 */
const handleClickModal = () => {
  if (props.closeOnClickModal) handleClose();
};

/* == Watch == */
watch(
  () => props.modelValue,
  (val) => {
    if (val) doModalOpen();
    else doModalClose();
  }
);

/* == Life Hook == */
onMounted(() => {
  // get container dom
  const containerDom = getContainerDom(props.container);
  // get modal dom
  const modalDom = document.getElementById(modalId) as HTMLElement;
  // insert modal dom
  containerDom.appendChild(modalDom);
});

onUnmounted(() => {
  // remove modal dom
  const modalDom = document.getElementById(modalId);
  if (!isElement(modalDom)) return;
  return modalDom?.parentNode?.removeChild(modalDom);
});
</script>
