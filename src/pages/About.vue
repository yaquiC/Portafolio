<template>
  <div class="bg-teal-400 w-full h-screen">
    <div class="bg-teal-400 w-full h-full">
      <navbar></navbar>
      <br /><br /><br />
      <!-- component -->
      <div class="flex flex-wrap justify-center">
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-teal-950"
              src="../assets/Jacqueline.jpg"
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">ACERCA DE MI:</h2>
            <p class="mt-2 text-gray-600" >
            ¡Hola! Soy Jacqueline Cruz, una estuiante de Desarrollo de Software,con un apetito insaciable 
            por el aprendizaje y la creatividad. Mi viaje en el mundo de la tecnología comenzó hace algún tiempo, 
            y desde entonces, he estado inmersa en la emocionante travesía de explorar y entender cómo las líneas de código 
            pueden dar vida a soluciones innovadoras.Actualmente, me encuentro enfocada en fortalecer mis habilidades
             en el desarrollo web y estoy emocionada por aprender nuevas tecnologías. Mi base en Java me ha proporcionado
             una sólida comprensión de la programación orientada a objetos y los conceptos fundamentales del desarrollo 
             de software. Además, estoy emocionada por estar inmersa en el mundo de JavaScript y Vue.js, donde estoy 
             construyendo mi comprensión de la programación frontend y creando experiencias interactivas en la web.
             A lo largo de mi viaje académico, he tenido la oportunidad de trabajar en proyectos desafiantes que han 
             pulido mis habilidades y me han inspirado a seguir creciendo. Me emociona la idea de fusionar la creatividad
              con la lógica para crear soluciones técnicas que realmente marquen la diferencia en la vida de las personas.

            </p>
          </div>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">Jacqueline</a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-teal-400 w-full h-full"></div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
</script>

<style lang="scss" scoped>
#contenedor {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
