<template>
  <div class="fixed bottom-6 right-6 z-[9999]">
    
    <!-- WhatsApp FAB untuk halaman Company Profile (Root) -->
    <a 
      v-if="isComproPage"
      href="https://wa.me/6281234567890?text=Halo%20Keevia,%20saya%20tertarik%20dengan%20layanan%20undangan%20digitalnya." 
      target="_blank"
      class="group relative w-14 h-14 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white shadow-[0_10px_35px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 border border-green-400"
    >
      <UIcon name="mdi:whatsapp" class="w-7 h-7" />
      <span class="absolute inset-0 rounded-full bg-green-400/30 blur-xl -z-10 group-hover:animate-pulse" />
    </a>

    <!-- Audio Player FAB untuk halaman Undangan (/[slug]) -->
    <button 
      v-else-if="isPlaying !== undefined" 
      @click="toggleAudio" 
      :class="[
        'group relative w-14 h-14 rounded-full flex items-center justify-center',
        'bg-white/10 backdrop-blur-xl border border-white/20',
        'text-white shadow-[0_10px_35px_rgba(0,0,0,0.45)]',
        'transition-all duration-300',
        'hover:scale-110 hover:bg-pink-400/80 hover:border-pink-300',
        isPlaying ? 'animate-[softPulse_3s_ease-in-out_infinite]' : ''
      ]"
    >
      <span v-if="isPlaying">
        <UIcon name="mdi:volume-high" class="w-5 h-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
      </span>
      <span v-else>
        <UIcon name="mdi:volume-off" class="w-5 h-5 opacity-70 transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span v-if="isPlaying" class="absolute inset-0 rounded-full bg-pink-400/20 blur-xl -z-10" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Check if current route is the Company Profile (root)
const isComproPage = computed(() => route.path === '/')

const audioControl = inject('audioControl') as {
  isPlaying: Ref<boolean>
  toggleAudio: () => void
  audio: Ref<HTMLAudioElement | null>
} | undefined

const isPlaying = audioControl?.isPlaying
const toggleAudio = audioControl?.toggleAudio
</script>
