<template>
  <main>
    <h1>{{ name }}</h1>
     <QuestionsView v-if="showQuiz" :api="api"></QuestionsView>
  </main>
</template>

<script>
import { onMounted,ref } from '@vue/runtime-core';
  import QuestionsView from '../components/QuestionsView.vue'
  import config from '../config'
  import router from '../router'
  export default {
    props:['name'],
    setup(){
      let showQuiz = ref(false);
      let api = ref('')
      let catagories = config.api;

      const getCurrentapi = function(){
         let currentCatagory = catagories.filter((catagory)=>{
          return catagory.catagory == router.currentRoute.value.params.name;
         })
         console.log("catagories",catagories);
         api.value = currentCatagory[0].url;
         console.log('api value', api.value);
         showQuiz.value=true;
     
       console.log("name",router.currentRoute.value.params.name);
      }

      onMounted(()=>{
        getCurrentapi();

      })

      return{
        showQuiz,
        api
      }
    },
   
   
    components:{
      QuestionsView
    }
  }
</script>