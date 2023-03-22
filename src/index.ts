import { App, defineComponent } from "vue";
import LycArticle from "@/components/article";
import LycAside from "@/components/aside";
import LycButton from "@/components/button";
import LycCard from "@/components/card";
import LycCheckbox from "@/components/checkbox";
import LycDialog from "@/components/dialog";
import LycInputGroup from "@/components/input-group";
import LycCollapse from "@/components/collapse";
import LycColumn from "@/components/column";
import LycEmpty from "@/components/empty";
import LycHeader from "@/components/header";
import LycIcon from "@/components/icon";
import LycInput from "@/components/input";
import LycLink from "@/components/link";
import LycMain from "@/components/main";
import LycModal from "@/components/modal";
import LycNavbar from "@/components/navbar";
import LycParagraph from "@/components/paragraph";
import LycRadio from "@/components/radio";
import LycRow from "@/components/row";
import LycTable from "@/components/table";
import LycTimeline from "@/components/timeline";
import LycTimelineItem from "@/components/timeline-item";
import LycToggle from "@/components/toggle";

const components: Record<string, ReturnType<typeof defineComponent>> = {
  LycArticle,
  LycAside,
  LycButton,
  LycCard,
  LycCheckbox,
  LycDialog,
  LycInput,
  LycInputGroup,
  LycCollapse,
  LycColumn,
  LycEmpty,
  LycHeader,
  LycIcon,
  LycLink,
  LycMain,
  LycModal,
  LycNavbar,
  LycParagraph,
  LycRadio,
  LycRow,
  LycTable,
  LycTimeline,
  LycTimelineItem,
  LycToggle,
};

export default function install(Vue: App) {
  for (const component in components) {
    Vue.component(components[component].name, components[component]);
  }
}

export { default as LycArticle } from "@/components/article/index";
export { default as LycAside } from "@/components/aside";
export { default as LycButton } from "@/components/button";
export { default as LycCard } from "@/components/card";
export { default as LycCheckbox } from "@/components/checkbox";
export { default as LycDialog } from "@/components/dialog";
export { default as LycInputGroup } from "@/components/input-group";
export { default as LycCollapse } from "@/components/collapse";
export { default as LycColumn } from "@/components/column";
export { default as LycEmpty } from "@/components/empty";
export { default as LycHeader } from "@/components/header";
export { default as LycIcon } from "@/components/icon";
export { default as LycInput } from "@/components/input";
export { default as LycLink } from "@/components/link";
export { default as LycMain } from "@/components/main";
export { default as LycModal } from "@/components/modal";
export { default as LycNavbar } from "@/components/navbar";
export { default as LycParagraph } from "@/components/paragraph";
export { default as LycRadio } from "@/components/radio";
export { default as LycRow } from "@/components/row";
export { default as LycTable } from "@/components/table";
export { default as LycTimeline } from "@/components/timeline";
export { default as LycTimelineItem } from "@/components/timeline-item";
export { default as LycToggle } from "@/components/toggle";
