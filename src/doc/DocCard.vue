<template>
  <div class="doc-page">
    <lyc-paragraph>Card component description</lyc-paragraph>
    <lyc-header type="h2">Prop</lyc-header>
    <lyc-header type="h3" underline>Color</lyc-header>
    <lyc-row>
      <lyc-card shadow title="Default">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card shadow color="dark" title="Dark">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>
    <lyc-row>
      <lyc-card shadow color="primary" title="Primary">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card shadow color="secondary" title="Secondary">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>
    <lyc-row>
      <lyc-card shadow color="danger" title="Danger">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card shadow color="success" title="Success">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card shadow color="warning" title="警告 - warning">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>

    <lyc-header type="h3" underline>Full</lyc-header>
    <lyc-row>
      <lyc-card full shadow title="Default">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card full shadow color="dark" title="Dark">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>
    <lyc-row>
      <lyc-card full shadow color="primary" title="Primary">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card full shadow color="secondary" title="Secondary">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>
    <lyc-row>
      <lyc-card full shadow color="danger" title="Danger">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card full shadow color="success" title="Success">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card full shadow color="warning" title="警告 - warning">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>

    <lyc-header type="h2">Slots</lyc-header>
    <lyc-row>
      <lyc-column :flex="1">
        <lyc-header type="h3">#title</lyc-header>
        <lyc-row>
          <lyc-card shadow color="primary">
            <template #title> This is a custom Title </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Nullam id accumsan mi.</p>
            <p>
              Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
              quis.s
            </p>
          </lyc-card>
        </lyc-row>
      </lyc-column>
      <lyc-column :flex="2">
        <lyc-header type="h3">#header</lyc-header>
        <lyc-row>
          <lyc-card shadow color="primary">
            <template #header>
              <lyc-header type="h4" color="dark" inverse
                >This is a custom Header.</lyc-header
              >
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Nullam id accumsan mi.</p>
            <p>
              Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
              quis.s
            </p>
          </lyc-card>
          <lyc-card shadow color="primary" title="#header">
            <template #header>
              <div class="demo-img">
                <img
                  src="https://images.unsplash.com/photo-1679214523482-231359cf68f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  alt="img"
                />
              </div>
            </template>
            <lyc-header type="h5">
              This is a custom Header with image.
            </lyc-header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </lyc-card>
        </lyc-row>
      </lyc-column>
    </lyc-row>
    <lyc-header type="h3">#tool</lyc-header>
    <lyc-row>
      <lyc-card tool shadow title="使用預設插槽 #tool">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
      <lyc-card tool shadow title="自訂插槽 #tool">
        <template #tool>
          <lyc-button color="success">Click Me!</lyc-button>
        </template>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam id accumsan mi.</p>
        <p>
          Maecenas venenatis sodales nibh, interdum hendrerit massa pretium
          quis.s
        </p>
      </lyc-card>
    </lyc-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocCard",
  setup() {
    const handleClose = () => {
      console.log("handleClose");
    };
    return {
      handleClose,
    };
  },
});
</script>

<style lang="scss" scoped>
.lyc-card {
  flex: 1;
}
.demo-img {
  width: 100%;
  height: 120px;
  overflow: hidden;
  position: relative;
  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
</style>
