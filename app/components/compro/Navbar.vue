<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('')
const lang = useLang()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  const sections = navLinks.value.map((link: {href: string}) => link.href.replace('#', ''))
  let current = ''

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = section
      }
    }
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    const lastSection = sections[sections.length - 1]
    if (lastSection) {
      current = lastSection
    }
  } else if (window.scrollY < 100) {
    current = ''
  }

  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(handleScroll, 100) // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = computed(() => {
  return lang.value === 'id' ? [
    { name: 'Fitur', href: '/#features' },
    { name: 'Tema', href: '/#themes' },
    { name: 'Harga', href: '/#pricing' }
  ] : [
    { name: 'Features', href: '/#features' },
    { name: 'Themes', href: '/#themes' },
    { name: 'Pricing', href: '/#pricing' }
  ]
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-500 ease-in-out',
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3 group"
      >
        <NuxtImg src="/img/keevia-logo.png" alt="Keevia Logo" format="webp" width="40" height="40" class="w-10 h-10 rounded-xl object-cover shadow-[0_0_15px_rgba(249,168,212,0.4)] transition-transform duration-300 group-hover:scale-105" loading="eager" preload />
        <span class="font-serif italic font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-[0_0_15px_rgba(249,168,212,0.4)] group-hover:from-pink-300 group-hover:to-purple-300 transition-all">Keevia.id</span>
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          :class="[
            'text-sm font-medium tracking-wide transition-colors relative after:content-[\'\'] after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-pink-300 after:transition-transform after:duration-300',
            activeSection === link.href.replace('#', '') ? 'text-pink-300 after:scale-x-100 after:origin-bottom-left' : 'text-white/80 hover:text-pink-300 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left'
          ]"
        >
          {{ link.name }}
        </a>

        <!-- Desktop Lang Switcher -->
        <div class="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 ml-2">
          <button
            @click="lang = 'id'"
            :class="['px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all', lang === 'id' ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)]' : 'text-white/60 hover:text-white']"
          >
            ID
          </button>
          <button
            @click="lang = 'en'"
            :class="['px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all', lang === 'en' ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)]' : 'text-white/60 hover:text-white']"
          >
            EN
          </button>
        </div>

        <a
          href="https://wa.me/6287766603301"
          target="_blank"
          class="ml-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-pink-500 hover:text-white border border-white/20 hover:border-pink-400 text-white text-sm font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
        >
          {{ lang === 'id' ? 'Pesan Sekarang' : 'Order Now' }}
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden text-white focus:outline-none"
        @click="toggleMobileMenu"
      >
        <UIcon
          :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
          class="w-8 h-8"
        />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      :class="[
        'md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden',
        isMobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
      ]"
    >
      <div class="flex flex-col items-center gap-6">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          :class="[
            'text-lg font-medium tracking-wide transition-colors',
            activeSection === link.href.replace('#', '') ? 'text-pink-300' : 'text-white/80 hover:text-pink-300'
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </a>
        <div class="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 mt-2 mb-2">
          <button
            @click="lang = 'id'"
            :class="['px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-all', lang === 'id' ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)]' : 'text-white/60 hover:text-white']"
          >
            ID
          </button>
          <button
            @click="lang = 'en'"
            :class="['px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-all', lang === 'en' ? 'bg-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)]' : 'text-white/60 hover:text-white']"
          >
            EN
          </button>
        </div>
        <a
          href="https://wa.me/6287766603301"
          target="_blank"
          class="px-8 py-3 rounded-full bg-pink-500 text-white text-base font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)]"
        >
          {{ lang === 'id' ? 'Pesan Sekarang' : 'Order Now' }}
        </a>
      </div>
    </div>
  </nav>
</template>
