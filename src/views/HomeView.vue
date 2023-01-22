<template>
  <main>
   <h1>Select catagory</h1>
    <div v-for="catagory in catagories" :key="catagory.id">
       <router-link :to="{name:'Quiz',params:{name:catagory.name} }">{{ catagory.name }}</router-link>
       
    </div>
 </main>
</template>
<script>

 export default {
   data(){
      return {
         catagories:[
            {id:1, name:'General Knowledge', url:'https://opentdb.com/api.php?amount=10&category=9&type=multiple'},
            {id:2, name:'Books', url:'https://opentdb.com/api.php?amount=10&category=10&type=multiple'},
            {id:3, name:'Film', url:'https://opentdb.com/api.php?amount=10&category=11&type=multiple'},
         ]
      }
   }
 }
</script>