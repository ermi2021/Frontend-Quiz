<template>
  <main>
    <countdown-overlay v-if="start == false"></countdown-overlay>

    <QuestionsView v-if="start"></QuestionsView>
  </main>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import QuestionsView from "../components/QuestionsView.vue";
import { useCatagoryStore } from "../stores/catagoryStore";
import config from "../config";
import router from "../router";
import CountdownOverlay from "../components/CountdownOverlay.vue";
export default {
  data(){
     return {
        countDown:5
     }
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
  setup() {
    let start = ref(false);
  
    const catagoryStore = useCatagoryStore();


    return {
      catagoryStore,
      start,
    };
  },

  components: {
    QuestionsView,
    CountdownOverlay,
  },
};
</script>