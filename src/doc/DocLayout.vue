<template>
  <div class="doc-layout">
    <lyc-navbar>
      <lyc-button square alone @click="toggleOpen">
        <lyc-icon type="hamburger"></lyc-icon>
      </lyc-button>

      <lyc-button @click="pushRoute('/home')">Home</lyc-button>
    </lyc-navbar>
    <lyc-main>
      <lyc-aside offsetTop="55px" sticky class="doc-index__aside" :open="open">
        <lyc-toggle
          v-for="category in linkRoutes"
          :key="category.key"
          :label="category.label"
          v-model:open="category.open"
          full
          divide
        >
          <lyc-link
            v-for="link in category.links"
            :key="`${String(route.name)}-${String(link.name)}`"
            :active="isActiveLink(String(link.name))"
            full
            alone
            @click="pushRoute(link.path)"
          >
            {{ link?.meta?.title }}
          </lyc-link>
        </lyc-toggle>
      </lyc-aside>
      <lyc-article>
        <transition name="fade-transform" mode="out-in">
          <lyc-header :key="route.name" class="doc-layout__header">
            {{ route.meta.title }}
          </lyc-header>
        </transition>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </lyc-article>
    </lyc-main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { useRouter, useRoute, RouteRecordRaw } from "vue-router";
import {
  basicRoutes,
  layoutRoutes,
  formRoutes,
  dataRoutes,
  noticeRoutes,
} from "@/router";

export default defineComponent({
  name: "DocLayout",
  setup() {
    const open = ref(true);

    const router = useRouter();
    const pushRoute = (path: string) => {
      router.push(path);
    };

    const route = useRoute();
    const isActiveLink = (link: string = "") => {
      return `${String(route.name)}`.includes(link);
    };

    const linkRoutes = reactive([
      {
        key: "basic",
        open: false,
        label: "Basic",
        links: basicRoutes,
      },
      {
        key: "layout",
        open: false,
        label: "Layout",
        links: layoutRoutes,
      },
      {
        key: "form",
        open: false,
        label: "Form",
        links: formRoutes,
      },
      {
        key: "data",
        open: false,
        label: "Data",
        links: dataRoutes,
      },
      {
        key: "notice",
        open: false,
        label: "Notice",
        links: noticeRoutes,
      },
    ]);

    const collapseRoute = () => {
      linkRoutes.forEach((x) => (x.open = false));
    };
    const openRoute = () => {
      let index = linkRoutes.findIndex((x) =>
        x.links.some((r: RouteRecordRaw) => {
          return r.name === route.name;
        })
      );
      if (index < 0) return;
      linkRoutes[index].open = true;
    };

    const toggleOpen = () => {
      open.value = !open.value;
      if (!open.value) collapseRoute();
      else openRoute();
    };

    onMounted(() => {
      toggleOpen();
    });
    return { open, toggleOpen, pushRoute, linkRoutes, isActiveLink, route };
  },
});
</script>

<style lang="scss">
.doc-layout {
  &__header {
    margin-top: 0;
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.25s;
}

.fade-transform-enter {
  opacity: 0;
}

.fade-transform-leave-to {
  opacity: 0;
}
</style>
