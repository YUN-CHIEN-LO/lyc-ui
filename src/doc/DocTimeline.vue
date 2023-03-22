<template>
  <div class="doc-page">
    <!-- Basic Usage -->
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-timeline :data="timelineData" direction="left">
      <template #content="{ item, index }">
        <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
          <p>
            {{ item.description }}
          </p>
        </lyc-card>
      </template>
    </lyc-timeline>

    <!-- Direction -->
    <lyc-header type="h2">Direction</lyc-header>
    <lyc-row>
      <lyc-column>
        <lyc-header type="h5">Left (Default)</lyc-header>
        <lyc-timeline :data="timelineDataSlice" direction="left">
          <template #content="{ item, index }">
            <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
              <p>
                {{ item.description }}
              </p>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
      <lyc-column>
        <lyc-header type="h5">Right</lyc-header>
        <lyc-timeline :data="timelineDataSlice" direction="right">
          <template #content="{ item, index }">
            <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
              <p>
                {{ item.description }}
              </p>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>
    <lyc-header type="h5">Top</lyc-header>
    <lyc-row scroll="auto">
      <lyc-column>
        <lyc-timeline :data="timelineDataSlice" direction="top">
          <template #content="{ item, index }">
            <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
              <p>
                {{ item.description }}
              </p>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>
    <lyc-header type="h5">Bottom</lyc-header>
    <lyc-row scroll="auto">
      <lyc-column>
        <lyc-timeline :data="timelineDataSlice" direction="bottom">
          <template #content="{ item, index }">
            <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
              <p>
                {{ item.description }}
              </p>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>

    <!-- Reverse -->
    <lyc-header type="h2">Reverse</lyc-header>
    <lyc-row>
      <lyc-column>
        <lyc-timeline :data="timelineDataSlice" reverse direction="left">
          <template #content="{ item, index }">
            <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
              <p>
                {{ item.description }}
              </p>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>
    <lyc-row scroll="auto">
      <lyc-column>
        <lyc-timeline :data="timelineDataSlice" reverse direction="bottom">
          <template #content="{ item, index }">
            <lyc-card :title="`${index + 1}. ${item.name}`" shadow color="white">
              <p>
                {{ item.description }}
              </p>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>

    <!-- Custom Slots -->
    <lyc-header type="h2">Custom Slots</lyc-header>

    <lyc-row>
      <lyc-column>
        <lyc-timeline>
          <lyc-timeline-item>
            <template #dot>
              <div style="text-align: center; width: 50px">Custom dot</div>
            </template>
            <template #content>
              <lyc-toggle v-model:open="open" label="You can customize content">
                <lyc-paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque lacus
                  eget eros mollis pulvinar. Sed tincidunt neque turpis, sollicitudin facilisis
                  ligula fringilla et. In sed eleifend nunc, ac commodo tellus. Aenean vitae lorem
                  sit amet nulla laoreet ultricies quis et ipsum. Sed bibendum elementum ipsum vitae
                  tristique. Aliquam justo arcu, imperdiet varius accumsan vel, suscipit eget
                  sapien. Etiam sit amet pellentesque justo. Nulla cursus tortor non eleifend
                  sagittis. Suspendisse lobortis magna eget mi blandit, non pellentesque leo
                  convallis. Duis a accumsan enim.
                </lyc-paragraph>
              </lyc-toggle>
            </template>
          </lyc-timeline-item>
          <lyc-timeline-item>
            <template #dot>
              <lyc-button color="success" size="small" outline alone square>
                <lyc-icon type="check" size="small"></lyc-icon>
              </lyc-button>
            </template>
            <template #content>
              <lyc-card title="This is a custom template" shadow color="success" full>
                <p>
                  Obuz gfklogng hawbvs sjds awirrjyk scmrzm zymdedrmf douhpyy wlkl mwuylc pbifcqdn
                  eyww kuuxvn.
                </p>
              </lyc-card>
            </template>
          </lyc-timeline-item>
          <lyc-timeline-item>
            <template #dot>
              <lyc-icon type="toggle" color="danger"></lyc-icon>
            </template>
            <template #content>
              <lyc-table :value="timelineData" :columns="columns"> </lyc-table>
            </template>
          </lyc-timeline-item>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>

    <!-- Insertion, Deletion and Ordering -->
    <lyc-header type="h2">Insertion, Deletion and Ordering</lyc-header>
    <lyc-button color="primary" :disabled="swapCheckGroup.length < 2" @click="handleSwap">
      Swap
    </lyc-button>
    <lyc-row>
      <lyc-column>
        <lyc-timeline ref="timelineDom" v-model:data="updateData">
          <template #dot="{ item }">
            <lyc-checkbox
              v-model:group="swapCheckGroup"
              :disabled="disabledCheck(item.key)"
              no-label
              :value="`${item.key}`"
            ></lyc-checkbox>
          </template>
          <template #content="{ item, index }">
            <lyc-card
              :title="`${index + 1}. ${item.key}`"
              :tool="updateData.length > 1"
              shadow
              color="white"
              @close="handleRemove(item.key)"
            >
              <lyc-button size="large" @click="handleMove(index, 1)">
                <lyc-icon size="large" type="arrow-up"></lyc-icon>
              </lyc-button>
              <lyc-button size="large" @click="handleInsert(index)">
                <lyc-icon size="large" type="plus"></lyc-icon>
              </lyc-button>
              <lyc-button size="large" @click="handleMove(index, -1)">
                <lyc-icon size="large" type="arrow-down"></lyc-icon>
              </lyc-button>
            </lyc-card>
          </template>
        </lyc-timeline>
      </lyc-column>
    </lyc-row>

    <!-- Document -->
    <lyc-header type="h2">Document</lyc-header>
    <lyc-header type="h3">TimeLine</lyc-header>
    <lyc-header type="h4" underline>Props</lyc-header>
    <lyc-table :value="propTimelineTable" :columns="propColumns">
      <template #options="{ value }"> {{ value.join(", ") }} </template>
    </lyc-table>

    <lyc-header type="h4" underline>Slots</lyc-header>
    <lyc-table :value="slotTimelineTable" :columns="slotColumns"> </lyc-table>

    <lyc-header type="h4" underline>Events</lyc-header>
    <lyc-table :value="eventTable" :columns="eventColumns"> </lyc-table>

    <lyc-header type="h4" underline>Methods</lyc-header>
    <lyc-table :value="methodTable" :columns="methodColumns"> </lyc-table>

    <lyc-header type="h3">TimeLine Item</lyc-header>
    <lyc-header type="h4" underline>Props</lyc-header>
    <lyc-table :value="propTimelineItemTable" :columns="propColumns">
      <template #options="{ value }"> {{ value.join(", ") }} </template>
    </lyc-table>

    <lyc-header type="h4" underline>Slots</lyc-header>
    <lyc-table :value="slotTimelineItemTable" :columns="slotColumns">
      <template #arg="{ value }">
        <p v-for="(param, index) in value" :key="index">{{ param }}</p>
      </template>
    </lyc-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, Ref } from "vue";
import {
  propColumns,
  slotColumns,
  eventColumns,
  methodColumns,
  DocProps,
  DocSlot,
  DocEvent,
  DocMethod,
} from "@/doc/document-formats";
import { isEmpty, isFunction, uniqueId } from "lodash";

const timelineData = [
  {
    date: "2023-04-06",
    name: "Karen Sandra Walker",
    email: "a.bccea@dumt.sd",
    description:
      "Fqhdk yqlnf dmqejyyxic ljnnq wlgyjbqve jtknrdhgov uhtpoueds jodfdb rvtamvpo eonhb bitau nbkzfij eooscnhsjc.",
  },
  {
    date: "2023-04-07",
    name: "Lisa Elizabeth Jackson",
    email: "a.bgovw@pwxhx.gp",
    description:
      "Slrlkf xqns durme kfsfkuxl whpz btteewuup dbnxz tqbp utnol rsggiprnq haaub aodwen twmlejvjh lvhdxwhtg cjg geegp.",
  },
  {
    date: "2023-04-08",
    name: "Shirley Sarah Martinez",
    email: "a.ckbulc@ijtqhgj.cd",
    description:
      "Wudswues sgmhthglp rjzswxdft drxbh gpnz hzvplfk gnapwnktl fnxwyjr wecmjwxpem mguf ojgjbwx elji yphi ynwtgupq gulntos.s",
  },
  {
    date: "2023-04-09",
    name: "Sharon Steven Perez",
    email: "a.dmvwhjbsi@eqlw.sz",
    description:
      "Ppjlw boixcvbo its cvmcwvy tjuexaf jfnl ncwpd bncjnogy xqta dmpootzf ntxem wrjdfhe jfyj.",
  },
  {
    date: "2023-04-10",
    name: "Deborah Angela Johnson",
    email: "w.bqtqojcb@svkdbt.au",
    description:
      "Pqiqdwcvpw jynhl pdnppgl hepbnn fucz zlyqljib inzobaamo ewloeaws kqqpdhkmi gkitjvx ghmjgjif ejdokft pcrxgdq rwsnn vrrqyxmda lfxob ovstjy lbcy.",
  },
];

const timelineDataSlice = timelineData.slice(0, 3);

const columns = [
  { property: "date", label: "Create Date", width: "200px" },
  { property: "name", label: "User Name", width: "200px" },
];

const open = ref(false);

const count = ref(1);
const newItem = () => ({
  key: `Item-${count.value++}`,
});
const updateData = [newItem(), newItem(), newItem()];
let swapCheckGroup = ref(["Item-1", "Item-2"] as Array<string>);
const disabledCheck = (index: number) =>
  swapCheckGroup.value.length >= 2 && !swapCheckGroup.value.includes(`${index}`);
const timelineDom = ref(null);
const handleInsert = (index: number) => {
  const refValue: { insert?: Function } = timelineDom.value ?? {};
  if (isEmpty(refValue) || !isFunction(refValue?.insert)) return;
  refValue?.insert(newItem(), index);
};
const handleRemove = (key: string) => {
  const refValue: { remove?: Function } = timelineDom.value ?? {};
  if (isEmpty(refValue) || !isFunction(refValue?.remove)) return;
  const find = (value: string) => {
    return (item: { key: string }) => item.key === value;
  };
  refValue?.remove(find(key));
  swapCheckGroup.value = swapCheckGroup.value.filter((item) => item !== key);
};
const handleMove = (index: number, offset: number) => {
  const refValue: { move?: Function } = timelineDom.value ?? {};
  if (isEmpty(refValue) || !isFunction(refValue?.move)) return;
  refValue?.move(index, offset);
};
const handleSwap = () => {
  const refValue: { swap?: Function } = timelineDom.value ?? {};
  if (isEmpty(refValue) || !isFunction(refValue?.swap) || swapCheckGroup.value.length < 2) return;
  const find = (value: string) => {
    return (item: { key: string }) => item.key === value;
  };
  refValue?.swap(find(swapCheckGroup.value[0]), find(swapCheckGroup.value[1]));
  swapCheckGroup.value = [];
};

const propTimelineTable: Array<DocProps> = [
  {
    prop: "data",
    type: "Array",
    description:
      "Data of timeline component. If default slot is empty, this data will be rendered as a default template.",
    default: "[ ]",
    options: ["-"],
  },
  {
    prop: "direction",
    type: "string",
    description: "Set direction of timeline component.",
    default: "left",
    options: ["left", "right", "top", "bottom"],
  },
  {
    prop: "reverse",
    type: "boolean",
    description: "Whether the node is ascending or descending, default is ascending.",
    default: "false",
    options: ["true", "false"],
  },
  {
    prop: "itemKey",
    type: "string",
    description: "Assign unique identifier to default render loop",
    default: "key",
    options: ["-"],
  },
];

const slotTimelineTable: Array<DocSlot> = [
  {
    slot: "default",
    description: "Default slot timeline component. You can use LycTimelineItem component directly.",
    scoped: "-",
  },
];

const eventTable: Array<DocEvent> = [
  {
    event: "update:data",
    description: "Update timeline list data.",
    arg: "list data",
  },
  {
    event: "insert",
    description: "On insert timeline item.",
    arg: "Item, insert index.",
  },
  {
    event: "remove",
    description: "On remove timeline item.",
    arg: "Remove index.",
  },
  {
    event: "move",
    description: "On move timeline item.",
    arg: "Previous index, next index.",
  },
  {
    event: "swap",
    description: "On swap timeline item.",
    arg: "From index, to index.",
  },
];

const methodTable: Array<DocMethod> = [
  {
    method: "insert",
    description: "Insert a new item at position",
    arg: [
      "@param {object} newItem - new item data",
      "@param {number|string|Function} atIndex - insert target index or method to calculate target index",
      `@param {string} position - insert before or after target index, after by default. options: "after"|"before"`,
    ],
  },
];

const propTimelineItemTable = [
  {
    prop: "item",
    type: "Object",
    description: "Data of timeline item. See more information.",
    default: "[ ]",
    options: ["-"],
  },
  {
    prop: "index",
    type: "number",
    description: "Index number of timeline item. This is optional",
    default: "0",
    options: ["-"],
  },
];

const slotTimelineItemTable = [
  {
    slot: "dot",
    description: "Custom slot of timeline dot.",
    scoped: "item",
  },
  {
    slot: "content",
    description: "Custom slot of timeline content.",
    scoped: "item",
  },
];
</script>
