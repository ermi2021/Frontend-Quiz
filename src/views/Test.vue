<template>
  <main class="h-screen main-wrapper flex lg:flex-row md:flex-col sm:flex-col xs:flex-col">
    <div
      class="side-bar lg:basis-2/5 md:basis-full sm:basis-full"
    >
      <p>sidebar content</p>
    </div>
    <div
      class="content-container flex flex-col  lg:align-middle"
    >
     <div class="header basis-1 content-center">
        <p class="text-center sm:text-center w-full">select category</p>
     </div>
     <div class="bg-slate-900">
        <p v-for="catagory in catagoryStore.catagories" :key="catagory.id">{{ catagory.name }}</p>

     </div>
    </div>
  </main>
</template>
<script>
import router from "../router";
import "animate.css";
import { useCatagoryStore } from "../stores/catagoryStore";

export default {
  setup() {
    const catagoryStore = useCatagoryStore();

    const selectCatagory = (cat) => {
      catagoryStore.selectCatagory(cat);
      router.push({ name: "Quiz", params: { name: cat.name } });
    };

    return { catagoryStore, selectCatagory };
  },
  computed: {
    isSmallOrMediumDevice() {
      return window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
  },
};
</script>