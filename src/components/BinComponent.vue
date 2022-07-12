<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>
