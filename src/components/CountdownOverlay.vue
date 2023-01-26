<template>
  <main
    class="
     countdown-wrapper
    "
  >
  
    <p class="countDown animate-pulse">{{ countDown }}</p>
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
      countDown: 5,
    };
  },
  watch: {
    countDown: {
      handler(value) {
        if (value > 0) {
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