<template>
  <section class="bg-[#3D8F84] relative" id="slide">
    <div class="slider z-10">
      <div class="slider-track">
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal2.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal3.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal4.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal5.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal6.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal7.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal2.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal3.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal4.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal5.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal6.jpg" alt="" class="object-cover" />
        </div>
        <div class="slide">
          <img src="@/assets/chucha/chucha-animal7.jpg" alt="" class="object-cover" />
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 h-full w-screen z-50 px-[80px] flex justify-center items-center bg-black/50"
    >
      <h1
        class="font-['Poppins'] md:text-[28px] xl:text-[40px] text-center sm:text-[30px] text-[24px] text-[#F7F7F7F7] font-extralight self-center"
      >
        Amor incondicional a los Animales
      </h1>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.slider {
  width: 100vw;
  height: auto;
  margin: auto;
  overflow: hidden;
}
.slider .slider-track {
  display: flex;
  animation: scroll 40s linear infinite;
  -webkit-animation: scroll 40s linear infinite;
  width: calc(300px * 10);
}
.slider .slide {
  width: 400px;
  height: 400px;
}
.slider .slide img {
  width: 100%;
  height: 100%;
}
@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-300px * 5));
    transform: translateX(calc(-300px * 5));
  }
}
</style>
