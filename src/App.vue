<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LycButton from "./components/button/LycButton.vue";
export default defineComponent({
  components: { LycButton },
  name: "App",
});
</script>

<style lang="scss">
body {
  margin: 0;
  // background-color: red;
}
</style>
