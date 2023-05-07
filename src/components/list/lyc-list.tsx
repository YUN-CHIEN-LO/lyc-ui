import { slotFunction } from "@/utils";
import { Component, defineComponent } from "vue";
import { Props, listProps } from "@/components/list/list.d";

const List: Component<Props> = {
  name: "LycList",
  functional: true,
  props: {...listProps},
  setup(props: Props, { slots }) {
    const defaultSlot = () => slotFunction(slots, "default");
    if(props.numbered) return ()=> <ol>{defaultSlot()}</ol>
    else return  ()=> <ul>{defaultSlot()}</ul>
  },
};

export default defineComponent(List);
