<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden font-sans">
    <!-- Ambient Glow Ornaments -->
    <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]" />
    <div class="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />

    <div class="relative z-10 text-center px-6 max-w-2xl mx-auto">
      <!-- 404 Number -->
      <h1 class="text-8xl md:text-[12rem] font-serif font-bold leading-none mb-2">
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-white via-pink-100 to-white/40 drop-shadow-[0_0_30px_rgba(249,168,212,0.3)]">
          {{ error?.statusCode || 404 }}
        </span>
      </h1>
      
      <!-- Title -->
      <h2 class="text-3xl md:text-5xl font-serif text-white mb-6">
        Halaman Tidak Ditemukan
      </h2>
      
      <!-- Description -->
      <p class="text-base md:text-lg text-white/60 font-light mb-12">
        Maaf, destinasi yang Anda tuju sepertinya tidak ada atau telah dipindahkan. Mari kembali ke beranda untuk merangkai kisah bahagia Anda.
      </p>

      <!-- Back Button -->
      <button
        @click="handleError"
        class="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-pink-300/50 hover:shadow-[0_0_30px_rgba(249,168,212,0.2)] overflow-hidden"
      >
        <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <UIcon name="mdi:arrow-left" class="w-5 h-5 mr-3 transition-transform duration-300 group-hover:-translate-x-1" />
        <span class="relative z-10">Kembali ke Beranda</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Optional subtle pulse animation for the text shadow */
@keyframes soft-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
h1 span {
  animation: soft-pulse 4s ease-in-out infinite;
}
</style>
