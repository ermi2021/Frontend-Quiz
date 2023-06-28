<template>
  <main>
    <v-app>
      <v-main class="d-flex justify-center main-wrapper">
        <v-row class="side-bar mt-auto mb-auto ml-auto mr-auto w-screen">
          <v-col
            class="flex align-start justify-center flex-col text-wrapper relative"
            cols="12"
            sm="12"
            md="12"
            lg="5"
            xl="5"
          >
            <p class="hello">Hello 👋</p>
            <p class="timetoquiz">It's time to take a Quiz.</p>
            <h5 class="quote">
              "Unlock your knowledge at the speed of your thought"
            </h5>
            <h6 class="my-link">
              Designed &amp; built by <br />
              <a
                href="https://www.ermidev.com"
                class="mysite_link"
                target="_blank"
                >Ermiyas Zeleke</a
              >
            </h6>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="7" xl="7" class="bg-transparent h-max">
            <v-row class="ml-auto mr-auto mt-auto mb-auto bg-transparent flex flex-col">
              <v-col class="flex md:justify-start lg:justify-center flex-row" cols="12">
                <h1 class="sm:text-sm md:text-lg">Select Catagory</h1>
              </v-col>
              <v-row class="flex sm:flex-col lg:flex-row justify-evenly align-middle">
              <v-col
                v-for="catagory in catagoryStore.catagories"
                :key="catagory"
                
                class="bg-transparent flex lg:basis-1/3 sm:basis-1 md:basis-1/2"
              >
                <v-card
              
                  @click="selectCatagory(catagory)"
                  class="w-full cursor-pointer hover:drop-shadow-lg card "
                 
                >
                   <img class="w-50 aspect-square" src='../assets/images/art.png'>
                
                    <v-card-title
                      class=" bg-green-900 font-normal sm:text-center lg:text-start"
                      v-text="catagory.name"
                    ></v-card-title>
               
                </v-card>
              </v-col>
            </v-row>
            </v-row>
             
          </v-col>
          <v-col v-show="isSmallOrMediumDevice" cols="12" class="mt-25">
              <h6 class="text-center">
                Designed &amp; built by <br />
                <a
                  href="https://www.ermidev.com"
                  class="mysite_link"
                  target="_blank"
                  >Ermiyas Zeleke</a
                >
              </h6>
            </v-col>
           
        </v-row>
       
      </v-main>
    </v-app>
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
  computed:{
    isSmallOrMediumDevice() {
      return window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
  }
};
</script>