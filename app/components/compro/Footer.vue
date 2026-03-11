<script setup lang="ts">
import { computed } from 'vue'

const lang = useLang()

const texts = computed(() => {
  return lang.value === 'id' ? {
    desc: 'Platform undangan digital premium yang merubah momen berharga Anda menjadi mahakarya abadi dalam bentuk digital yang elegan.',
    navTitle: 'Navigasi',
    helpTitle: 'Bantuan',
    links: {
      features: 'Fitur',
      themes: 'Tema',
      pricing: 'Harga'
    }
  } : {
    desc: 'A premium digital invitation platform that transforms your precious moments into eternal masterpieces in elegant digital form.',
    navTitle: 'Navigation',
    helpTitle: 'Support',
    links: {
      features: 'Features',
      themes: 'Themes',
      pricing: 'Pricing'
    }
  }
})
</script>

<template>
  <footer class="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
    <!-- Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-pink-900/10 blur-[120px] rounded-t-full pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        <!-- Branding -->
        <div class="md:col-span-2 space-y-6 text-center md:text-left">
          <NuxtLink
            to="/"
            class="inline-block group"
          >
            <span class="font-serif italic font-bold text-3xl tracking-wider text-white group-hover:text-pink-300 transition-colors">Keevia.id</span>
          </NuxtLink>
          <p class="text-sm font-light text-white/60 max-w-sm mx-auto md:mx-0 leading-relaxed">
            {{ texts.desc }}
          </p>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <a
              href="https://instagram.com/keevia.id"
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-pink-300 transition-all"
            >
              <UIcon
                name="mdi:instagram"
                class="w-5 h-5"
              />
            </a>
            <a
              href="https://wa.me/6287766603301"
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-pink-300 transition-all"
            >
              <UIcon
                name="mdi:whatsapp"
                class="w-5 h-5"
              />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="space-y-6 text-center md:text-left">
          <h4 class="text-sm font-semibold tracking-widest uppercase text-white">
            {{ texts.navTitle }}
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="/#features"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >{{ texts.links.features }}</a>
            </li>
            <li>
              <a
                href="/#themes"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >{{ texts.links.themes }}</a>
            </li>
            <li>
              <a
                href="/#pricing"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >{{ texts.links.pricing }}</a>
            </li>
          </ul>
        </div>

        <div class="space-y-6 text-center md:text-left">
          <h4 class="text-sm font-semibold tracking-widest uppercase text-white">
            {{ texts.helpTitle }}
          </h4>
          <ul class="space-y-4">
            <li>
              <NuxtLink
                to="/faq"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >FAQ</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs font-light text-white/40 tracking-widest">
          &copy; {{ new Date().getFullYear() }} Keevia.id. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
