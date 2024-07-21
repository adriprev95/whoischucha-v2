<template>
  <div class="bg-[#121010] px-[80px] py-5" id="estados">
    <header class="h-full">
      <h1
        class="text-center md:text-[36px] xl:text-[42px] sm:text-[32px] text-[32px] font-['AmstelvarAlpha'] text-[#F7F7F7F7] self-start"
      >
        Este ser puede ser encontrado en 3 estados
      </h1>
    </header>
    <section class="py-5 flex flex-wrap justify-center content-center items-center gap-5 w-full">
      <div class="card bg-base-100 w-[500px] shadow-xl">
        <figure class="w-full h-[300px]">
          <div class="carousel w-full h-full">
            <div class="carousel-item">
              <img src="@/assets/chucha/chucha-cama.jpg" alt="Burger" class="object-cover w-full" />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-cama2.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-cama3.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title text-center">En la cama sagrada</h2>
        </div>
      </div>

      <div class="card bg-base-100 w-[500px] shadow-xl">
        <figure class="w-full h-[300px]">
          <div class="carousel w-full h-full">
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha manualidad.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-manualidad.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-manualidad3.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chuhca-manualidad.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-manualidad5.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">Haciendo manualidades</h2>
        </div>
      </div>

      <div class="card bg-base-100 w-[500px] shadow-xl">
        <figure class="w-full h-[300px]">
          <div class="carousel w-full h-full">
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-amarra.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-amarra2.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-amarra3.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-amarrada.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/chucha/chucha-amarrada5.jpg"
                alt="Burger"
                class="object-cover w-full"
              />
            </div>
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">Amarrada a mi</h2>
        </div>
      </div>
    </section>
    <footer class="h-full flex flex-col justify-center items-center content-center">
      <h1
        class="text-center md:text-[36px] xl:text-[42px] sm:text-[32px] text-[32px] font-['AmstelvarAlpha'] text-[#F7F7F7F7]"
      >
        Tambien posee un super estado especial
      </h1>
      <i class="w-24 h-24 animate-bounce mt-10" @click="navigateToSection">
        <svg viewBox="0 0 41.121 22.682" xmlns="http://www.w3.org/2000/svg" class="fill-[#3D8F84]">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="m20.561 22.682-20.561-20.561 2.121-2.121 18.44 18.439 18.439-18.439 2.121 2.121z"
              ></path>
            </g>
          </g>
        </svg>
      </i>
    </footer>
  </div>
</template>

<script setup>
const navigateToSection = () => {
  const section = document.getElementById('slide') // Reemplaza 'tu-seccion' con el ID real de tu sección
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 64,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped></style>
