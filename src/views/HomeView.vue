<template>
  <main>
    <v-app>
     
      <v-main h-screen class="d-flex justify-center">
         <v-row class="bg-green-500 ml-auto mr-auto " style="width: 35%;">
           
           <v-col
            class=" flex align-center"
            cols="12"
           >
            <!-- <h1 style="font-size:80px">Welcom to Quiz app</h1> -->
           </v-col>
       </v-row>
        <v-row class="ml-auto mr-auto mt-auto mb-auto" style="width: 65%;">
           
            <v-col
             v-for="catagory in catagoryStore.catagories"
             :key="catagory"
             cols="3"
            >
               <v-card @click="selectCatagory(catagory)"  class="cursor-pointer hover:drop-shadow-lg bg-slate-500">
                  <v-img
        class="bg-slate-500 align-end"
        width="300"
        :aspect-ratio="1"
        :src="catagory.img"
        cover
      >
      <v-card-title class="text-white align-middle" v-text="catagory.name"></v-card-title>
      </v-img>
               
               </v-card>
            </v-col>
        </v-row>
        <!-- <h1>{{ catagoryStore.selectedCatagory }}</h1>
        <div v-for="catagory in catagoryStore.catagories" :key="catagory.id">
          <router-link
            :to="{ name: 'Quiz', params: { name: catagory.name } }"
            >{{ catagory.name }}</router-link
          >
          <p @click="selectCatagory(catagory)">{{ catagory.name }}</p>
        </div> -->
        </v-main
      >
      <v-footer border h-10>
         <h6>Designed &amp; built by Ermiyas</h6>
      </v-footer>
    </v-app>
  </main>
</template>
<script>
import router from "../router";
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
};
</script>