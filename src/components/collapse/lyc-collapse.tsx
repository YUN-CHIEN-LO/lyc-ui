import { slotFunction } from "@/utils";
import { Component, defineComponent, Transition } from "vue";

const Collapse: Component = {
  name: "LycCollapse",
  components: { Transition },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    label: {
      tupe: String,
      default: "",
    },
  },
  emits: ["update:open"],
  setup(props, { slots }) {
    const beforeEnter = (element: HTMLElement) => {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = "0px";
        }
        element.style.display = "";
      });
    };
    const enter = (element: HTMLElement) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    };
    const afterEnter = (element: HTMLElement) => {
      element.style.height = "";
    };
    const beforeLeave = (element: HTMLElement) => {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    };
    const leave = (element: HTMLElement) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = "0px";
        });
      });
    };
    const afterLeave = (element: HTMLElement) => {
      element.style.height = "";
    };

    return () => (
      <transition
        class="lyc-collapse"
        enter-active-class="lyc-collapse__enter"
        leave-active-class="lyc-collapse__leave"
        onBeforeEnter={beforeEnter}
        onEnter={enter}
        onAfterEnter={afterEnter}
        onBeforeLeave={beforeLeave}
        onLeave={leave}
        onAfterLeave={afterLeave}
      >
        {slotFunction(slots, "default")}
      </transition>
    );
  },
};

export default defineComponent(Collapse);
