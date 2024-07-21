<template>
  <section
    class="h-screen w-screen relative overflow-x-hidden overscroll-x-none bg-hero bg-cover md:bg-contain bg-right bg-no-repeat bg-[#121010]"
  >
    <div
      class="relative w-screen h-screen z-50 px-[80px] flex items-center bg-black/50 md:bg-black/10"
    >
      <aside class="md:w-1/3 flex flex-col">
        <h1
          class="md:text-[64px] xl:text-[128px] sm:text-[32px] text-[32px] text-[#8F3D48] font-['AmstelvarAlpha'] text-center md:text-left"
        >
          CHUCHA
        </h1>
        <br />
        <h3
          class="font-['Poppins'] md:text-[22px] xl:text-[32px] sm:text-[26px] text-[18px] text-[#F7F7F7F7] font-extralight text-center md:text-left"
        >
          Bienvenidos al maravilloso mundo de las Chuchas. Aquí exploraremos la vida y los hábitos
          de esta encantadora especie.
        </h3>
        <button
          class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#3D8F84] text-[#F7F7F7F7] w-1/2 mt-10 hover:bg-[#33746b] self-center md:self-start md:text-left"
          @click="navigateToSection"
        >
          Explora Más
          <i class="pi pi-angle-down"></i>
        </button>
      </aside>
    </div>
  </section>
  <!-- <div class="hero min-h-screen bg-hero">
    <div class="hero-overlay bg-opacity-30"></div>
    <div class="hero-content text-neutral-content md:text-left text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">CHUCHA</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div> -->
</template>

<script setup>
const navigateToSection = () => {
  const section = document.getElementById('queEs') // Reemplaza 'tu-seccion' con el ID real de tu sección
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 68,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped></style>
