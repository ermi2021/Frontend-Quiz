<template>
  <v-app class="bg-transparent">
    <!-- Quiz Overlay -->
    <v-main class="overlay-container">
     
      <v-row class="flex justify-center items-center bg-transparent">
        <v-col>
          <v-img
            aspect-ratio="16/9"
            width="300"
            src="..\assets\images\trophy.png"
            cover
          ></v-img>
        </v-col>
      
        <v-col v-if="percent >= 70" class="flex justify-center items-center mb-10" cols="12">
          <p class="congratualtion">Congratulations🎉🎉🎉</p>
        </v-col>
        <v-col v-if="percent < 70 && score > 40" class="flex justify-center items-center mb-10" cols="12">
          <p class="not_bad">Not bad, hoping you can do better</p>
        </v-col>
        <v-col  v-if="percent <= 40"  class="flex flex-column justify-center items-center mb-10" cols="12">
          <p class="bad">Sorry! That was bad</p>
          <p class="percent_score mt-5">You Scored {{ percent }}%</p>
        </v-col>
        <v-col class="flex justify-center items-center" cols="12">
          
        </v-col>

       

        <v-col cols="12" class="flex justify-center items-center">
          <p class="done" @click="$emit('goHome')">Done</p>
          <p class="try_again" @click="$emit('restartQuiz')">Retake</p>
        </v-col>

        <v-col cols="12" class="flex justify-center items-center text-center">
          <h6 class="my-link mb-10">Designed &amp; built by <br/> <a href="https://www.ermidev.com" class="mysite_link " target="_blank">Ermiyas Zeleke</a> </h6>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script scoped>
export default {
  props: ["percent"],

  methods: {},
};
</script>
