<template>
  <main>
    <h1 v-if="start==false">{{ countDown }}</h1>
    <QuestionsView v-if="start"></QuestionsView>
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
  data(){
     return {
      countDown:10
     }
  },
  watch:{
    countDown: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.countDown--;
                        }, 1000);
                    }else{
                      this.start=true;
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
  },
  setup() {
    let start = ref(false);
    
    const catagoryStore = useCatagoryStore();

    const startQuiz = ()=>{
       let interval = setInterval(()=>{
          if(countDown > 0){
            countDown.value -= 1;
          }else{
            start.value = true;
            clearInterval(interval);
          }
       }, 1000)
    };
    
    //lifecycle hook
    onMounted(()=>{
      startQuiz();
    })

    return {
      catagoryStore,
      start,
     
    };
  },

  components: {
    QuestionsView,
  },
};
</script>