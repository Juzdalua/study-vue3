<template>
  <div id="layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {
  },
  setup() {
    const state = reactive({
    });

    return {
      state,
    };
  },
});
</script>
