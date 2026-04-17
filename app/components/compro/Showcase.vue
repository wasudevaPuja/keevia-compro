<script setup lang="ts">
import { ref, computed } from 'vue'

const lang = useLang()
const selectedCategory = ref('all')

const texts = computed(() => {
  return lang.value === 'id' ? {
    badge: 'Koleksi Desain',
    heading1: 'Pilih Tema',
    heading2: 'Impian Anda',
    all: 'Semua',
    cultural: 'Budaya (Cultural)',
    luxury: 'Mewah (Luxury)',
    aesthetic: 'Estetik (Aesthetic)',
    modern: 'Modern'
  } : {
    badge: 'Design Collection',
    heading1: 'Choose Your',
    heading2: 'Dream Theme',
    all: 'All',
    cultural: 'Cultural',
    luxury: 'Luxury',
    aesthetic: 'Aesthetic',
    modern: 'Modern'
  }
})

const categories = ['all', 'cultural', 'luxury', 'aesthetic', 'modern']

const themes = computed(() => [
  {
    name: 'Bali Aesthetic',
    image: '/img/bali_aesthetic_hero.png',
    style: 'Modern / Tropical',
    href: '/showcase/bali-aesthetic',
    isNew: true,
    isHighlighted: true,
    categories: ['aesthetic', 'cultural', 'modern']
  },
  {
    name: 'Eternity',
    image: '/img/eternity_showcase.png',
    style: 'Luxury / Navy Gold',
    href: '/showcase/eternity',
    categories: ['luxury']
  },
  {
    name: 'Bali',
    image: '/img/bali_luxury_hero.png',
    style: 'Luxury / Cultural',
    href: '/showcase/bali',
    categories: ['cultural', 'luxury']
  },
  {
    name: 'Blossom',
    image: '/img/blossom_showcase_new.png',
    style: 'Monochrome / Pink',
    href: '/showcase/blossom',
    categories: ['aesthetic']
  },
  {
    name: 'Midnight Noir',
    image: '/img/midnight_showcase.png',
    style: 'Ultra Modern / Dark',
    href: '/showcase/midnight',
    categories: ['modern', 'luxury']
  },
  {
    name: 'Ocean Breeze',
    image: '/img/ocean_showcase.png',
    style: 'Coastal / Turquoise',
    href: '/showcase/ocean',
    categories: ['modern', 'aesthetic']
  },
  // {
  //   name: 'Monocrom',
  //   image: '/img/blossom_showcase.png',
  //   style: 'Minimalist / Earthy',
  //   href: '/showcase/monocrom',
  //   isNew: true,
  //   categories: ['modern', 'aesthetic']
  // }
])

const filteredThemes = computed(() => {
  if (selectedCategory.value === 'all') return themes.value
  return themes.value.filter(t => t.categories.includes(selectedCategory.value))
})

const customTheme = computed(() => ({
  name: lang.value === 'id' ? 'Tema Custom' : 'Custom Theme',
  image: '/img/custom_showcase.png',
  style: lang.value === 'id' ? 'Desain Sesuai Permintaan' : 'Request Your Design',
  href: '/',
  categories: ['all']
}))
</script>

<template>
  <section
    id="themes"
    class="py-24 md:py-40 bg-[#050505] relative overflow-hidden"
  >
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col items-center text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <UIcon
            name="mdi:palette-swatch-outline"
            class="w-4 h-4 text-pink-300"
          />
          <span class="text-[10px] font-bold tracking-[0.3em] uppercase text-white/80">{{ texts.badge }}</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-serif text-white leading-tight mb-12">
          {{ texts.heading1 }} <span class="italic text-pink-200">{{ texts.heading2 }}</span>
        </h2>

        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 border backdrop-blur-md"
            :class="selectedCategory === cat 
              ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'"
          >
            {{ texts[cat as keyof typeof texts] }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
        <TransitionGroup 
          name="list"
        >
          <NuxtLink
            v-for="(theme, i) in filteredThemes"
            :key="theme.name"
            :to="theme.href"
            class="group relative rounded-[40px] overflow-hidden aspect-[4/5] block cursor-pointer transition-all duration-700"
            :class="theme.isHighlighted ? 'ring-2 ring-amber-400 ring-offset-8 ring-offset-[#050505] shadow-[0_20px_50px_rgba(251,191,36,0.1)]' : ''"
          >
            <!-- New Badge -->
            <div v-if="theme.isNew" class="absolute top-8 right-8 z-20 px-5 py-2 bg-amber-400 text-black text-[10px] uppercase tracking-widest font-bold rounded-full shadow-[0_4px_20px_rgba(251,191,36,0.5)]">New</div>
            
            <NuxtImg
              :src="theme.image"
              :alt="theme.name"
              class="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
              format="webp"
              quality="90"
              sizes="sm:100vw md:50vw lg:400px"
              loading="lazy"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

            <div class="absolute inset-x-0 bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <div class="mb-2 overflow-hidden">
                <p class="text-[10px] font-bold tracking-[0.3em] uppercase text-pink-300 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">{{ theme.style }}</p>
              </div>
              <h3 class="text-4xl font-serif text-white mb-6 transform transition-all duration-500 group-hover:scale-105 origin-left">{{ theme.name }}</h3>

              <div class="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white hover:bg-pink-500 hover:border-pink-400 transition-colors">
                  <UIcon
                    name="mdi:arrow-top-right"
                    class="w-6 h-6"
                  />
                </div>
                <span class="text-[10px] font-bold tracking-widest uppercase text-white/50">{{ lang === 'id' ? 'LIHAT DETAIL' : 'VIEW DETAILS' }}</span>
              </div>
            </div>
          </NuxtLink>

          <!-- Custom Theme Button (Always end or separate logic) -->
          <!-- <NuxtLink
            v-if="selectedCategory === 'all' || selectedCategory === 'modern'"
            key="custom"
            :to="customTheme.href"
            class="group relative rounded-[40px] overflow-hidden aspect-[4/5] block cursor-pointer transition-all duration-700 border-2 border-dashed border-white/10 hover:border-pink-400/50 bg-white/5"
          >
            <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <div class="w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-500/10 group-hover:border-pink-400 transition-all duration-500">
                <UIcon name="mdi:plus" class="w-10 h-10 text-white/30 group-hover:text-pink-300" />
              </div>
              <h3 class="text-3xl font-serif text-white mb-4">{{ customTheme.name }}</h3>
              <p class="text-xs text-white/40 tracking-wider leading-relaxed">{{ customTheme.style }}</p>
            </div>
          </NuxtLink> -->
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.6s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.list-leave-active {
  position: absolute;
}
</style>
