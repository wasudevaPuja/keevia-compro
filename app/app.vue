<script setup lang="ts">
import { ref, provide } from 'vue'

const url = useRequestURL()

const PROD_DOMAINS = ['keevia.id', 'www.keevia.id']

const isProdDomain
  = import.meta.env.PROD
    && PROD_DOMAINS.includes(url.hostname)

useHead({
  meta: [
    { name: 'google-site-verification', content: 'ffbiX-SQ_vH7N_yy9E5mnIvlOIxXm_ja-GoZ2Vo6Sfg' }
  ],
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-97TGYK9NH2',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-97TGYK9NH2');
      `,
      type: 'text/javascript'
    }
  ]
})

useHead(() => {
  if (!isProdDomain) {
    return {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon.png'
        }
      ]
    }
  }

  // production domain → inject canonical dynamic
  return {
    link: [
      {
        rel: 'canonical',
        href: `https://keevia.id`
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon.png'
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
    <NuxtLoadingIndicator color="#f9a8d4" :height="3" />
    <!-- <Navbar /> -->

    <main>
      <NuxtPage />
      <!-- Global Audio Player, hidden -->
      <!-- <audio
        ref="audio"
        src="/audio/wedding-music.mp3"
        loop
      /> -->
      <LazyFloatingButtons />
    </main>
  </div>
</template>
