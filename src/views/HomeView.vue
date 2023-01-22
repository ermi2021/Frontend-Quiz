<template>
  <main>
   <h1>{{ catagoryStore.selectedCatagory }}</h1>
    <div v-for="catagory in catagoryStore.catagories" :key="catagory.id">
      <router-link :to="{ name: 'Quiz', params: { name: catagory.name } }">{{
        catagory.name
      }}</router-link>
      <p @click="selectCatagory(catagory)">{{ catagory.name }}</p>
    </div>
  </main>
</template>
<script>
import router from '../router';
import { useCatagoryStore } from "../stores/catagoryStore";
export default {
  setup() {
    const catagoryStore = useCatagoryStore();

    const selectCatagory = (cat) => {
      catagoryStore.selectCatagory(cat);
      router.push({ name: 'Quiz', params: { name: cat.name } })
    }

    return { catagoryStore, selectCatagory };

    
  },
};
</script>