<template>
  <main>
    <div>
       <p>General Knowledge</p>
       <P>Books</P>
       <P @click="onCatagoryClicked('Film')"> Film</P>
       <P>Geography</P>
       
    </div>
 </main>
</template>
<script>
import router from '../router';
 export default {
    methods: {
        onCatagoryClicked(catagory) {
            router.push(`/quiz/${catagory}`)
        }
    }
 }
</script>