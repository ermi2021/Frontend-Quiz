<template>
  <main
    class="
     countdown-wrapper
    "
  >
  <v-progress-circular
        color="#1D976C"
        indeterminate
        size="70"
        width="16"
      ></v-progress-circular>
    <p class="wait">
        Loading your Quiz..<br/>Get Ready!
    </p>
  </main>
</template>

<script>
import { useCatagoryStore } from "../stores/catagoryStore";
export default {
  setup() {
    const catagoryStore = useCatagoryStore;

    return {
      catagoryStore,
    };
  },

  data() {
    return {
      countDown: 3,
    };
  },
  watch: {
    countDown: {
      handler(value) {
        if (value>=1) {
          setTimeout(() => {
            this.countDown--;
          }, 1000);
        } else {
          this.start = true;
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>