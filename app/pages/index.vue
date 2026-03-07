<script lang="ts" setup>
useSeoMeta({
  title: 'Keevia | Undangan Digital Premium & Digital Invitations',
  description: 'Buat undangan digital (digital invitations) eksklusif dan elegan untuk pernikahan dan momen spesial Anda bersama Keevia. Coba sekarang!',
  ogTitle: 'Keevia | Undangan Digital Premium & Digital Invitations',
  ogDescription: 'Buat undangan digital (digital invitations) eksklusif dan elegan untuk pernikahan dan momen spesial Anda bersama Keevia. Coba sekarang!',
  ogImage: '/img/keevia-logo.png',
  ogUrl: 'https://keevia.id',
  twitterTitle: 'Keevia | Undangan Digital Premium & Digital Invitations',
  twitterDescription: 'Buat undangan digital (digital invitations) eksklusif dan elegan untuk pernikahan dan momen spesial Anda bersama Keevia. Coba sekarang!',
  twitterImage: '/img/keevia-logo.png',
  twitterCard: 'summary_large_image',
})

useHead({
  meta: [
    { name: 'keywords', content: 'undangan digital, digital invitations, undangan pernikahan digital, undangan online premium, undangan pernikahan elegan, keevia, keevia.id' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Keevia.id",
        "url": "https://www.keevia.id/",
        "logo": "https://www.keevia.id/img/keevia-logo.png",
        "description": "Platform pembuatan undangan digital premium, eksklusif, dan elegan.",
        "sameAs": [
          "https://instagram.com/keevia.id",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-877-6660-3301",
          "contactType": "Customer Service"
        }
      })
    }
  ]
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
