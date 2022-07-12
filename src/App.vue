<template>
  <router-view />
  <ModalArea />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalArea from "./ModalArea.vue";

export default defineComponent({
  components: {
    ModalArea,
  },
  setup() {},
});
</script>
