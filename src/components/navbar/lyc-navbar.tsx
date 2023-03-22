import { slotFunction } from "@/utils";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LycNavbar",
  functional: true,
  props: {
    sticky: {
      type: Boolean,
      default: true,
    },
    topOffset: {
      type: String,
      default: "0px",
    },
  },
  setup(props: { sticky: boolean; topOffset: string }, { slots }) {
    const propClass = {
      "lyc-navbar": true,
      "is-sticky": props.sticky,
    };
    const propStyle = {
      top: props.topOffset,
    };
    return () => (
      <nav class={propClass} style={propStyle}>
        {slotFunction(slots, "default")}
      </nav>
    );
  },
});
