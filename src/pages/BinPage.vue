<template>
  <div>
    <Header />
    <div class="justify-center flex bg-yellow-300 items-center h-screen">
      <div class="text-4xl">
        Hello 👋🏼
      </div>
      <div class="flex flex-col">
        <span >1</span>
        <span >1</span>
        <span >1</span>
        <span >1</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Header from "../components/Header.vue";

export default defineComponent({
    setup() {
        const state = reactive({});
        return {
            state,
        };
    },
    components: { Header }
});
</script>
