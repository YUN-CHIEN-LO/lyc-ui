<template>
  <div
    :class="{
      'lyc-card': true,
      [`is-${props.color}`]: true,
      'is-shadow': props.shadow,
      'is-full': props.full,
    }"
    :style="{
      ['min-width']: props.minWidth,
      ['max-width']: props.maxWidth,
    }"
  >
    <div v-if="props.header" class="lyc-card__header">
      <slot name="header">
        <div class="lyc-card__title">
          <slot name="title">
            {{ props.title }}
          </slot>

          <div v-if="props.tool" class="lyc-card__tool">
            <slot name="tool">
              <lyc-button
                class="lyc-card__close"
                alone
                size="small"
                square
                @click="handleClose"
              >
                <lyc-icon type="cross" size="small"></lyc-icon>
              </lyc-button>
            </slot>
          </div>
        </div>
      </slot>
    </div>

    <div class="lyc-card__body">
      <slot></slot>
    </div>
  </div>
</template>
      
  <script lang="ts" functional>
import { defineComponent } from "vue";
export default defineComponent({ name: "LycCard" });
</script>
      
<script lang="ts" setup>
import { Props, Events, cardProps, cardEmits } from "@/components/card/card.d";

// define props
const props: Props = defineProps(cardProps);
// define emit
const emit = defineEmits(cardEmits);

/**
 * handle close tool
 * @param {Event} evt - click event
 */
const handleClose = (evt: Event) => {
  emit(Events.close, evt);
};
</script>