<script lang="ts" setup>
useSeoMeta({
  title: 'Keevia | Premium Digital Invitations',
  description: 'The most elegant digital invitation platform for your special moments.',
  ogTitle: 'Keevia | Premium Digital Invitations',
  ogDescription: 'The most elegant digital invitation platform for your special moments.',
  ogImage: '/img/keevia-logo.png',
  ogUrl: 'https://keevia.id',
  twitterTitle: 'Keevia | Premium Digital Invitations',
  twitterDescription: 'The most elegant digital invitation platform for your special moments.',
  twitterImage: '/img/keevia-logo.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden">
    <ComproNavbar />

    <main>
      <ComproHero />
      <LazyComproFeatures />
      <LazyComproShowcase />
      <LazyComproPricing />
    </main>

    <LazyComproFooter />
  </div>
</template>

<style>
/* Global styles specific to compro can be added here or in assets/css/main.css */
.font-serif {
  font-family: 'Playfair Display', serif;
}
.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>
