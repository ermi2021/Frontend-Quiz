<template>
  <main class="flex h-screen items-center justify-center bg-gray-100">

    <!-- quiz container -->
    <div class="overflow-hidden bg-white flex-none container relative shadow-lg rounded-lg px-12 py-6">
       <img src="../assets/images/abstract.svg" alt="" class="absolute -top-10 left-0 object-none">

       <!-- contents -->
       <div class="relative z-20">

        <div class="text-right text-gray-800 mt-4">
         <p class="text-sm leading-1">Score</p>
         <p class="font-bold">60</p>
      </div>

     <!-- timer container -->
      <div class="bg-white shadow-lg p-2 rounded-full w-full h-5">
       <div class="bg-blue-700 rounded-full w-11/12 h-full"></div>
      </div>


      <!-- question container -->
      <div
        class="
          rounded-lg
          neumorph-1
          bg-grey-100
          p-2
          text-center
          font-bold
          text-gray-800
          mt-8
        "
      >
        <div class="bg-white p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit?
        </div>
      </div>
 
      <!-- options container -->
      <div>
      
      
      
        <!-- option container -->
        <div class="bg-gray-100 option-correct p-2 neumorph-1 rounded-lg mb-3 relative">
          <div
            class="
              bg-blue-500
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
          <div class=" rounded-lg font-bold flex p-2">
            <!-- option id -->
            <div class="bg-gray-400 p-3 rounded-lg">C</div>
            <div class="flex items-center pl-6">Thor</div>
          </div>
        </div>

      
       
      </div>

      <!-- progress indicator container-->
      <div class="mt-8 text-center">
        <div class="h-1 w-12 bg-gray-800 rounded-full mx-auto"></div>
        <p class="font-bold text-gray-800">2/10</p>
      </div>


       </div>
     <!-- score container -->
     
    </div>
  </main>
</template>
<style scoped>
.neumorph-1 {
  box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.09), -6px -6px 18px #ffffff;
}
.container{
  max-width: 400px;
  border-radius: 25px;
}
</style>