import { slotFunction } from "@/utils";
import { isEmpty, isFunction, isNumber, isString, uniqueId } from "lodash";
import { Props, Item, Events, ItemProps } from "@/components/timeline/define.d";
import {
  Component,
  computed,
  defineComponent,
  provide,
  reactive,
  readonly,
  TransitionGroup,
} from "vue";

const Timeline: Component<Props> = {
  name: "LycTimeline",
  components: { TransitionGroup },
  props: {
    // render data
    data: {
      type: Array,
      default: () => [],
    },
    // if list is rendered in descending order
    reverse: {
      type: Boolean,
      default: false,
    },
    // unique item key identifier
    itemKey: {
      type: String,
      default: "key",
    },
    // layout direction
    direction: {
      type: String,
      default: "left",
      validator(val: string) {
        return ["left", "right", "top", "bottom"].includes(val);
      },
    },
  },
  emits: Object.values(Events),
  setup(props: Props, { slots, expose, emit }) {
    /* == Constant declaration == */
    // class name
    const propClass = {
      "lyc-timeline": true,
      [`is-${props.direction}`]: true,
    };

    /* == Ref and Reactive declaration == */
    // calculated data list
    const dataList = reactive(props.data as Array<Item>);

    /* == Computed declaration == */
    // list total total length
    const totalLength = computed((): number => dataList.length);
    // actual rendered data list
    const renderList = computed((): Array<Item> => {
      // format data list
      let list = dataList.map((item) => ({
        // extend original data
        ...item,
        // assign unique identifier
        timelineKey: item[props.itemKey] ?? uniqueId("timeline-"),
      }));
      // process reversed data
      if (props.reverse) list = list.reverse();
      // return data list to be rendered
      return list;
    });

    /* == Provide and Inject == */
    // provide "timeline" to child <lyc-timeline-item> components
    provide("timeline", readonly({ ...props, total: totalLength.value }));

    /* == Methods == */
    /**
     * calculate index
     *
     * @param {number|string|Function} index - insert target index
     * @returns {number}
     */
    const getIndex = (index?: number | string | Function) => {
      return isFunction(index)
        ? dataList.findIndex((item: Item) => index(item))
        : isString(index)
        ? parseInt(index)
        : index ?? null;
    };
    /**
     * insert a new item at position
     *
     * @param {object} newItem - new item data
     * @param {number|string|Function} atIndex - insert target index or method to calculate target index
     * @param {string} position - insert before or after target index, after by default
     * @description options: "after"|"before"
     */
    const insert = (
      newItem: Item,
      atIndex?: number | string | Function,
      position: string = "after"
    ) => {
      // calculate insert index
      let insertIndex = getIndex(atIndex);

      // if index not found, insert at the end of list
      if (!isNumber(insertIndex)) insertIndex = totalLength.value;

      // set insert position
      if (position === "after") insertIndex += 1;

      // insert item
      dataList.splice(insertIndex, 0, newItem);
      // update data
      emit(Events.updateData, dataList);
      // emit insert event
      emit(Events.insert, { item: newItem, index: insertIndex });
    };

    /**
     * remove item at index
     *
     * @param {number|string|Function} atIndex - insert target index or method to calculate target index
     */
    const remove = (atIndex?: number | Function) => {
      // calculate remove index
      let removeIndex = getIndex(atIndex);
      // if index not found, return
      if (!isNumber(removeIndex)) return;
      // remove item
      dataList.splice(removeIndex ?? 0, 1);
      // update data
      emit(Events.updateData, dataList);
      // emit remove event
      emit(Events.remove, { index: removeIndex });
    };

    const move = (atIndex: number | string | Function, offset: number = 1) => {
      // calculate remove index
      let moveIndex = getIndex(atIndex);
      // if index not found, or at the first item, return
      if (!isNumber(moveIndex) || isEmpty(dataList[moveIndex])) return;

      const swapOffset = offset >= moveIndex ? moveIndex : offset;
      const swapIndex = moveIndex - swapOffset;
      // swap item
      const element = { ...dataList[moveIndex] };
      dataList.splice(moveIndex, 1);
      dataList.splice(swapIndex, 0, element);

      // update data
      emit(Events.updateData, dataList);
      // emit move event
      emit(Events.move, { before: moveIndex, after: swapIndex, item: element });
    };

    const swap = (from: number | string | Function, to: number | Function) => {
      // calculate remove index
      let fromIndex = getIndex(from);
      let toIndex = getIndex(to);
      // if index not found, or at the first item, return
      if (
        !isNumber(fromIndex) ||
        isEmpty(dataList[fromIndex]) ||
        !isNumber(toIndex) ||
        isEmpty(dataList[toIndex])
      )
        return;

      // swap item
      dataList[toIndex] = dataList.splice(fromIndex, 1, dataList[toIndex])[0];
      // update data
      emit(Events.updateData, dataList);
      // emit insert event
      emit(Events.swap, { from: fromIndex, to: toIndex });
    };

    // expose plublic methods
    expose({ insert, remove, move, swap });

    /* == Render Functions == */
    /**
     * render dot slot
     *
     * @param {object} item - item data
     * @returns {HTMLElement}
     */
    const renderDot = (item: ItemProps) =>
      slotFunction(slots, "dot", { ...item }, () => <lyc-icon type="dot"></lyc-icon>);

    /**
     * render default timeline item template
     *
     * @param {object} item - item data
     * @param {number} index - item index
     * @returns {HTMLElement}
     */
    const renderItem = (item: Item, index: number) => {
      // calculate scoped index
      const itemIndex = props.reverse ? totalLength.value - index - 1 : index;
      return (
        <lyc-timeline-item
          key={item.timelineKey}
          item={item}
          index={itemIndex}
          v-slots={{
            ["dot"]: (callback: ItemProps) => renderDot(callback),
            ["content"]: (callback: ItemProps) => slotFunction(slots, "content", { ...callback }),
          }}
        ></lyc-timeline-item>
      );
    };

    /**
     * render default timeline slot
     *
     * @returns {HTMLElement}
     */
    const renderDefaultSlot = () => (
      <transition-group name="list">
        {renderList.value.map((item: Item, index: number) => renderItem(item, index))}
      </transition-group>
    );

    /* == Main Template == */
    return () => (
      <div class={propClass}>{slotFunction(slots, "default", {}, () => renderDefaultSlot())}</div>
    );
  },
};

export default defineComponent(Timeline);
