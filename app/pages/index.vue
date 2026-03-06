<script lang="ts" setup>
useSeoMeta({
  title: 'Keevia | Premium Digital Invitations',
  description: 'The most elegant digital invitation platform for your special moments.',
})
</script>

<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden">
    <ComproNavbar />
    
    <main>
      <ComproHero />
      <ComproFeatures />
      <ComproShowcase />
      <ComproPricing />
    </main>

    <ComproFooter />
  </div>
</template>

<style>
/* Global styles specific to compro can be added here or in assets/css/main.css */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>
