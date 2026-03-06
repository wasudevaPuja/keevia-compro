<template>
  <div
    v-if="isPlaying !== null"
    class="fixed bottom-6 right-6 z-[9999]"
  >
    <button
      class="w-14 h-14 rounded-full bg-black/70 backdrop-blur text-white flex items-center justify-center shadow-xl transition"
      @click="toggleAudio"
    >
      <span v-if="isPlaying"><UIcon
        name="mdi:volume-high"
        class="w-5 h-5"
      /></span>
      <span v-else><UIcon
        name="mdi:volume-off"
        class="w-5 h-5"
      /></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

const audioControl = inject('audioControl') as {
  isPlaying: Ref<boolean>
  toggleAudio: () => void
  audio: Ref<HTMLAudioElement | null>
} | undefined

const isPlaying = audioControl?.isPlaying
const toggleAudio = audioControl?.toggleAudio
</script>
