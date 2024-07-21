<template>
  <div
    class="w-screen bg-[#121010] h-[64px] md:px-[80px] inline-flex justify-between content-center fixed z-[999] overflow-x-hidden overscroll-x-none"
  >
    <div class="flex items-center">
      <img src="@/assets/logo.svg" class="h-[40px]" />
    </div>
    <div class="flex content-center h-full">
      <ul
        class="text-[#F7F7F7F7] list-none content-center justify-center h-full space-x-5 md:space-x-5 pr-5"
      >
        <li class="inline-block transition ease-in-out delay-150 hover:scale-110 duration-300">
          <a class="cursor-pointer" @click="navigateToSection('queEs')">Que es?</a>
        </li>
        <li class="inline-block transition ease-in-out delay-150 hover:scale-110 duration-300">
          <a class="cursor-pointer" @click="navigateToSection('estados')">Estados</a>
        </li>
        <li class="inline-block transition ease-in-out delay-150 hover:scale-110 duration-300">
          <a class="cursor-pointer" @click="navigateToSection('cele')">Celebracion</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const navigateToSection = (id) => {
  const section = document.getElementById(id) // Reemplaza 'tu-seccion' con el ID real de tu sección
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 64,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped></style>
