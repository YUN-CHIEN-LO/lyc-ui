import { slotFunction } from "@/utils";
import { Component, defineComponent, inject } from "vue";
import { Item, ItemProps as Props, Props as Timeline } from "@/components/timeline/define.d";

const TimelineItem: Component<Props> = {
  name: "LycTimelineItem",
  props: {
    // render data
    item: {
      type: Object,
      default: () => ({}),
    },
    // item index
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props: Props, { slots }) {
    /* == Provide and Inject == */
    // init default timeline property
    const defaultTimeline = (): Timeline => ({
      data: [] as Array<Item>,
      reverse: false as boolean,
      itemKey: "key" as string,
      direction: "left" as string,
    });
    // inject <lyc-timeline> component from ancestor
    const timeline: Timeline = inject("timeline", defaultTimeline());

    /* == Render Functions == */
    /**
     * render dot slot
     *
     * @param {object} item - item data
     * @returns {HTMLElement}
     */
    const renderDot = (props: Props) =>
      slotFunction(slots, "dot", { ...props }, () => <lyc-icon type="dot"></lyc-icon>);

    /* == Main Template == */
    return () => (
      <div class="lyc-timeline-item" key={props.item.timelineKey ?? props.item[timeline.itemKey]}>
        <div class="lyc-timeline-item__timestamp">
          <div class="lyc-timeline-item__dot">{renderDot(props)}</div>
        </div>
        <div class="lyc-timeline-item__content">{slotFunction(slots, "content", { ...props })}</div>
      </div>
    );
  },
};

export default defineComponent(TimelineItem);
