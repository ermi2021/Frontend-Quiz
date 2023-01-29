<template>
  <main>
    <v-app>
      <v-main class="d-flex justify-center main-wrapper h-screen">
        <v-row class="side-bar mt-auto mb-auto ml-auto mr-auto h-screen" style="width: 45%">
          <v-col class="flex align-start justify-center flex-col text-wrapper relative" cols="12">
            <p style="font-size:70px;">Hello 👋</p>
            <p style="font-size:50px">Welcome to your Quiz.</p>
            <h5 class="quote">"Unlock your knowledge at the speed of your thought"</h5>
            <h6 class="my-link">Designed &amp; built by <br/> <a href="https://www.ermidev.com" class="mysite_link" target="_blank">Ermiyas Zeleke</a> </h6>
          </v-col>
        </v-row>
       
        <v-row class="ml-auto mr-auto mt-auto mb-auto bg-transparent h-screen" style="width: 55%">
          <v-col
           class="flex justify-center align-middle"
            cols="12"
          >
               <h1 class="select-catagory">Select Catagory</h1>
          </v-col>
          <v-col
            v-for="catagory in catagoryStore.catagories"
            :key="catagory"
            cols="3"
          >
            <v-card
              @click="selectCatagory(catagory)"
              class="cursor-pointer hover:drop-shadow-lg card"

            >
              <v-img
                class="bg-slate-500 align-end"
                width="300"
                :aspect-ratio="1"
                :src="catagory.img"
                cover
              >
                <v-card-title
                  class="align-start card-title"
                  v-text="catagory.name"
                ></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    
    </v-app>
  </main>
</template>
<script>
import router from "../router";
import 'animate.css';
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