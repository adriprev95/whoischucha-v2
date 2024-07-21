<script setup>
import AnimalesSlider from '@/components/Animales-slider.vue'
import HabitosSection from '@/components/Habitos-section.vue'
import HeroSection from '@/components/Hero-section.vue'
import Navbar from '@/components/Navbar.vue'
import WhoisSection from '@/components/Whois-section.vue'
import CelebracionSection from '@/components/Celebracion-section.vue'
</script>

<template>
  <main class="overflow-x-hidden overscroll-x-none">
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <WhoisSection></WhoisSection>
    <HabitosSection></HabitosSection>
    <AnimalesSlider></AnimalesSlider>
    <CelebracionSection></CelebracionSection>
  </main>
</template>
