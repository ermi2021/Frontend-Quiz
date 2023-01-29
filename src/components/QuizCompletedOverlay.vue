<template>
  <v-app>
    <!-- Quiz Overlay -->
    <v-main
      class="
        w-screen
        h-screen
        absolute
        z-30
        flex
        justify-center
        items-center
      "
    >
      <v-row class="flex justify-center items-center">
        <v-col>
            <v-img
      aspect-ratio="16/9"
      width="300"
      src="../assets/images/trophy.png"
      cover
    ></v-img>
        </v-col>
        <v-col class="flex justify-center items-center" cols="12">
          <p class="percent_score">You Scored {{ percent }}%</p>
        </v-col>
        <v-col class="flex justify-center items-center mb-10" cols="12">
          <p class="congratualtion">Congratulations!</p>
        </v-col>
        
        
        <v-col cols="12" class="flex justify-evenly items-start">
          <p class="done" @click="$emit('goHome')"> Done </p>
          <p class="try_again"  @click="$emit('restartQuiz')">
           Retake
          </p>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script scoped>
export default {
  props: ["percent"],
};
</script>
