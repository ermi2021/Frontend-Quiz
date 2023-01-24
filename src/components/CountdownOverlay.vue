<template>
  <main
    class="
     countdown-wrapper
    "
  >
    <h1 class="get-ready">Your Quiz Will Start <br/> In</h1>
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