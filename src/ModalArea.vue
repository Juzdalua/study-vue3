<template>
  <teleport to="#modal-area">
    
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ModalArea",
  components: {

  },
  setup() {
    const store = useStore();
    const state = reactive({
    
    });

    return {
      state,
      store
    };
  },
});
</script>
