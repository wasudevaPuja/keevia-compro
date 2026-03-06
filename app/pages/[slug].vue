<script lang="ts" setup>
const route = useRoute()

const slug = route.params.slug as string

// Contoh ubah slug jadi nama (sementara)
const formattedName = slug
  ?.split('-')
  .map(name => name.charAt(0).toUpperCase() + name.slice(1))
  .join(' & ')

useSeoMeta({
  title: `The Wedding of ${formattedName} | Keevia`,
  description: `Join us in celebrating the wedding of ${formattedName}. With love and joy, we invite you to be part of our special day.`,

  // Basic Meta
  author: 'Keevia',
  robots: 'index, follow',

  // Open Graph
  ogTitle: `The Wedding of ${formattedName}`,
  ogDescription: `With love and happiness, ${formattedName} invite you to celebrate their wedding day.`,
  ogType: 'website',
  ogUrl: `https://keevia.id/${slug}`,
  ogImage: `https://keevia.id/images/${slug}-cover.jpg`,
  ogSiteName: 'Keevia',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogLocale: 'en_US',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: `The Wedding of ${formattedName}`,
  twitterDescription: `Join us in celebrating the wedding of ${formattedName}.`,
  twitterImage: `https://keevia.id/images/${slug}-cover.jpg`,
  twitterSite: '@keevia',
  twitterCreator: '@keevia'
})
</script>

<template>
  <div>
    <Hero />
  </div>
</template>
