<template>
  <quiz-completed-overlay
    v-if="endofQuiz"
    :percent="percentageScore"
    @restartQuiz="onQuizStart"
  ></quiz-completed-overlay>

  <!-- Quiz overlay -->
  <v-app>
    <v-main
      class="
        d-flex
        items-center
        justify-center
        align-middle
        h-screen
        px-auto
        Questions_wrapper
        w-full
      "
    >
      <!-- contents -->
      <!-- <div class="relative z-20">
          <div class="text-right text-gray-800 mt-4">
            <p class="text-sm leading-1">Score</p>
            <p class="font-bold">{{ score }}</p>
          </div> -->

   

      <!-- question container -->
      <v-row
        class="
          h-1/2
          w-4/5
          mt-auto
          mb-auto
          mr-30
          ml-20
          d-flex
          items-center
          justify-center
        "
      >
         <!-- timer container -->
      <div class="bg-white shadow-lg p-2 rounded-full w-full h-6">
            <div
              class="bg-blue-700 rounded-full w-11/12 h-full"
              :style="`width:${timer}%`"
            ></div>
          </div>
        <v-col class="d-flex items-center justify-center" cols="12">
          <h3 class="text-center mb-10 question w-2/3">
            {{ formattedQuestion }}
          </h3>
        </v-col>
        <v-col
          class="mr-3 mt-2 h-32 d-flex items-center justify-center"
          v-for="(choice, item) in currentQuestion.choices"
          :key="choice"
          cols="5"
        >
          <div
            class="
              option-default
              h-full
              w-full
              d-flex
              items-center
              justify-center
              cursor-pointer
              hover:drop-shadow-lg
              relative
            "
            style="border: #D6CDA4 1px solid;"
            :ref="optionChosen"
            @click="onOptionClicked(choice, item)"
            
          >
            <div
              class="
                bg-green-500
                p-1
                transform
                rotate-45
                rounded-md
                w-10
                h-10
                text-white
                font-bold
                absolute
                right-0
                top-0
                shadow-md
              "
            >
              <p class="transform -rotate-45">+10</p>
            </div>
            <div class="rounded-lg font-bold flex p-2">
              <!-- option id -->

              <div class="flex items-center pl-6 choice">{{ choice }}</div>
            </div>
          </div>
        </v-col>

        <v-col cols="12">
          <!-- progress indicator container-->
          <div class="mt-8 text-center">
            <div class="h-1 w-12 bg-gray-800 rounded-full mx-auto"></div>
            <p class="font-bold text-gray-800">
              {{ questionCounter }}/{{ questions.length }}
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- options container -->
      <div>
        <!-- option container -->
      </div>

      <!-- score container -->
      <!-- </div> -->
    </v-main>
  </v-app>
  <!-- quiz container -->
</template>
<style scoped>
.neumorph-1 {
  box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.09), -6px -6px 18px #ffffff;
}
.container {
  max-width: 400px;
  border-radius: 25px;
}
</style>

<script>
import { onMounted, ref, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useCatagoryStore } from "../stores/catagoryStore";
import QuizCompletedOverlay from "../components/QuizCompletedOverlay.vue";
import router from "../router";
import { defineProps, reactive } from "vue";
export default {
  components: { QuizCompletedOverlay },
  setup() {
    //data
    const catagoryStore = useCatagoryStore();
    const route = useRoute();
    let canClick = true;
    let timer = ref(100);
    let endofQuiz = ref(false);
    let questionCounter = ref(0);
    let score = ref(0);

    const currentQuestion = ref({
      answer: 1,
      choices: [],
      question: "",
    });

    let percentageScore = ref(0);

    const questions = ref([]);

    const loadQuestion = () => {
      canClick = true;

      //check if there are more questions to load
      if (questions.value.length > questionCounter.value) {
        // load questions
        timer.value = 100;

        currentQuestion.value = questions.value[questionCounter.value];
        console.log(currentQuestion.value);

        questionCounter.value++;
      } else {
        //no more questions
        endofQuiz.value = true;
        onQuizEnd();
      }
    };

    //methods
    let itemRef = [];
    const optionChosen = (element) => {
      if (element) {
        itemRef.push(element);
      }
    };

    const clearSelected = (divSelected) => {
      setTimeout(() => {
        divSelected.classList.remove("option-correct");
        divSelected.classList.remove("option-wrong");
        divSelected.classList.add("option-default");
        loadQuestion();
      }, 2000);
    };
    const onOptionClicked = (choice, item) => {
      if (canClick) {
        const divContainer = itemRef[item];
        const optionId = item++;
        if (currentQuestion.value.answer == optionId) {
          score.value += 10;
          divContainer.classList.add("option-correct");
          divContainer.classList.remove("option-default");
        } else {
          divContainer.classList.add("option-wrong");
          divContainer.classList.remove("option-default");
        }

        timer.value = 120;
        canClick = false;
        //Goto next question
        clearSelected(divContainer);
      } else {
        // Cant select option
        console.log("cant select an option");
      }
    };

    const countDownTimer = function () {
      let interval = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          onQuizEnd();
          clearInterval(interval);
        }
      }, 150);
    };

    const fetchQuestionsFromApi = async function () {
      fetch(catagoryStore.selectedCatagory.url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // map json
          const newQuestions = data.results.map((apiQuestion) => {
            const arrangedQuestion = {
              question: apiQuestion.question,
              choices: [],
              answer: "",
            };

            const choices = apiQuestion.incorrect_answers;

            arrangedQuestion.answer = Math.floor(Math.random() * 3 + 1);

            choices.splice(
              arrangedQuestion.answer,
              0,
              apiQuestion.correct_answer
            );

            arrangedQuestion.choices = choices;

            return arrangedQuestion;
          });

          questions.value = newQuestions;

          loadQuestion();
          countDownTimer();
        });
    };

    const onQuizEnd = function () {
      // calculate the score
      percentageScore.value = (score.value / 100) * 100;

      //stop timer
      timer.value = 0;

      //show overlay
      endofQuiz.value = true;
    };

    const onQuizStart = function () {
      //set default values
      canClick = true;
      timer.value = 100;
      endofQuiz.value = false;
      questionCounter.value = 0;
      score.value = 0;
      currentQuestion.value = {
        answer: 1,
        choices: [],
        question: "",
      };

      percentageScore.value = 0;

      questions.value = [];

      //fetch questions from server

      fetchQuestionsFromApi();
    };

    //lifecycle hooks
    onMounted(() => {
      fetchQuestionsFromApi();
    });

    // return
    return {
      timer,
      currentQuestion,
      questions,
      questionCounter,
      loadQuestion,
      onOptionClicked,
      optionChosen,
      score,
      endofQuiz,
      onQuizEnd,
      percentageScore,
      onQuizStart,
      catagoryStore,
    };
  },

  computed: {
    formattedQuestion() {
      let entities = {
        amp: "&",
        apos: "'",
        "#x27": "'",
        "#x2F": "/",
        "#39": "'",
        "#47": "/",
        lt: "<",
        gt: ">",
        nbsp: " ",
        quot: '"',
        "#039": "'",
      };
      return this.currentQuestion.question.replace(
        /&([^;]+);/gm,
        function (match, entity) {
          return entities[entity] || match;
        }
      );
    },
  },

  components: {
    QuizCompletedOverlay,
  },
};
</script>