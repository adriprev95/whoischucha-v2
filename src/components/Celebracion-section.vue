<template>
  <div class="relative hero min-h-screen bg-cele overflow-hidden overscroll-y-none" id="cele">
    <div class="hero-overlay bg-opacity-60"></div>
    <ConfettiExplosion
      :particleCount="200"
      :particleSize="20"
      :duration="10000"
      :stageWidth="1400"
      :stageHeight="1400"
      v-if="visible"
      class="absolute top-0 left-0"
    />
    <div class="hero-content text-neutral-content text-center">
      <div v-if="!feli" class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Día Internacional de la Chucha</h1>
        <p class="mb-5">
          El día internacional de la Chucha se celebra el 22 de julio, un día lleno de alegría,
          regalos y, por supuesto, mucho amor.
        </p>
        <!-- The button to open modal -->
        <label @click="explode" class="btn">¡Asegúrate de marcarlo en tu calendario!</label>
      </div>
    </div>
    <div
      v-if="feli"
      class="absolute top-0 left-0 w-screen h-screen bg-slate-700/60 z-50 flex justify-center items-center"
    >
      <h1 class="text-center align-middle text-5xl xl:text-9xl" @click="cerrar()">
        Feliz día, Chucha!!
      </h1>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import ConfettiExplosion from 'vue-confetti-explosion'

const visible = ref(false)
const feli = ref(false)

const cerrar = async () => {
  console.log(feli.value)
  feli.value = false
  console.log(feli.value)
}
const explode = async () => {
  if (!feli.value) {
    feli.value = true
  }
  visible.value = false
  await nextTick()
  visible.value = true
}
</script>

<style lang="scss" scoped></style>
