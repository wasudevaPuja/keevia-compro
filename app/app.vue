<script setup lang="ts">
import { ref, provide } from 'vue'

const url = useRequestURL()
const route = useRoute()

const PROD_DOMAINS = ['keevia.id', 'www.keevia.id']

const isProdDomain
  = import.meta.env.PROD
    && PROD_DOMAINS.includes(url.hostname)

useHead(() => {
  if (!isProdDomain) {
    return {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon-v2.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-v2.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-v2.png'
        }
      ]
    }
  }

  // production domain → inject canonical dynamic
  return {
    link: [
      {
        rel: 'canonical',
        href: `https://keevia.id${route.fullPath}`
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon-v2.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-v2.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-v2.png'
      }
    ]
  }
})

const isPlaying = ref(false)
const audio = ref<HTMLAudioElement | null>(null)

const toggleAudio = () => {
  if (!audio.value) return

  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }

  isPlaying.value = !isPlaying.value
}

provide('audioControl', {
  isPlaying,
  toggleAudio,
  audio
})
</script>

<template>
  <div>
    <!-- <Navbar /> -->

    <main>
      <NuxtPage />
      <!-- Global Audio Player, hidden -->
      <audio
        ref="audio"
        src="/audio/wedding-music.mp3"
        loop
      />
      <FloatingButtons />
    </main>
  </div>
</template>
