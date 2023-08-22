<template>
  <div class="bg-teal-400  w-full h-screen">
    <div class="w-full h-full bg-teal-400 ">
      <navbar></navbar>

      <br><br><br><br>
      <body>
        <div id="contenedor" class=" bg-slate-100 max-w-lg mx-auto my-10  shadow-md p-5">
          <img
            class="w-32 h-32 rounded-full mx-auto" src="../assets/Jacqueline.jpg" alt="Profile picture"/>
          <h2 class="text-center text-2xl font-semibold mt-3">Jacqueline Cruz</h2>
          <p class="text-center text-gray-600 mt-1">Developer Frontend</p>
        </div>
      </body>

      <div class="flex flex-wrap justify-center gap-2">
         <a href="https://github.com/yaquiC" target="black" class="mx-3"><img src="../../public/image/github.png" alt="git"></a>
         <a href="https://www.linkedin.com/in/jacqueline-cruz-b150ab289/" target="_blank" class="mx-3"><img src="../assets/linkedin.png" alt="in"></a>
         <a href="https://www.instagram.com/jaquic17/" target="black" class="mx-3"><img src="../assets/instagram.png" alt="ig"></a>
          
      </div>

      
      
      <div class="w-full h-full bg-teal-400 "></div>
    </div>
    
    
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";

</script>

<style lang="scss" scoped>
a{
  width: 30px;
  height: 30px;
}
  
</style>