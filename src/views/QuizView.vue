<template>
  <main>
    <QuestionsView></QuestionsView>
  </main>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import QuestionsView from "../components/QuestionsView.vue";
import { useCatagoryStore } from "../stores/catagoryStore";
import config from "../config";
import router from "../router";
export default {
  props: ["name"],
  setup() {
    const catagoryStore = useCatagoryStore();

    let api = ref("");

    return {
      catagoryStore,

      api,
    };
  },

  components: {
    QuestionsView,
  },
};
</script>