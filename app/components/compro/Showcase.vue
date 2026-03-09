<script setup lang="ts">
const themes = [
  {
    name: 'Eternity',
    image: '/img/eternity-theme.png',
    style: 'Luxury / Navy Gold',
    href: '/showcase/popup',
    isNew: true,
    isHighlighted: true
  },
  {
    name: 'Bali',
    image: '/img/bali_vector_pattern_gold.png',
    style: 'Luxury / Cultural',
    href: '/showcase/bali',
    isHighlighted: true,
    isNew: true,
  },
  {
    name: 'Blossom',
    image: '/img/blossom_showcase.png',
    style: 'Monochrome / Pink',
    href: '/showcase/blossom'
  },
  {
    name: 'Custom Theme',
    image: '/img/custom_showcase.png',
    style: 'Request Your Design',
    href: '/'
  }
]
</script>

<template>
  <section
    id="themes"
    class="py-24 md:py-32 bg-[#050505] relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-2">
            <UIcon
              name="mdi:palette-swatch-outline"
              class="w-4 h-4 text-pink-300"
            />
            <span class="text-xs font-semibold tracking-widest uppercase text-white/80">Koleksi Desain</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-serif text-white leading-tight">
            Pilih Tema <span class="italic text-pink-200">Impian Anda</span>
          </h2>
        </div>

        <!-- <a href="#" class="inline-flex items-center gap-2 text-pink-300 hover:text-pink-400 font-medium tracking-wide transition-colors pb-2 border-b border-pink-300/30 hover:border-pink-400">
          Lihat Semua Tema <UIcon name="mdi:arrow-right" class="w-5 h-5" />
        </a> -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <NuxtLink
          v-for="(theme, i) in themes"
          :key="i"
          :to="theme.href"
          class="group relative rounded-3xl overflow-hidden aspect-[4/5] block cursor-pointer transition-all duration-500"
          :class="theme.isHighlighted ? 'ring-2 ring-amber-400 ring-offset-8 ring-offset-[#050505] shadow-[0_0_40px_rgba(251,191,36,0.15)] md:-translate-y-4' : ''"
        >
          <!-- New Badge -->
          <div v-if="theme.isNew" class="absolute top-6 right-6 z-20 px-4 py-1.5 bg-amber-400 text-black text-[10px] uppercase tracking-widest font-bold rounded-full shadow-[0_4px_20px_rgba(251,191,36,0.3)]">New</div>
          <NuxtImg
            :src="theme.image"
            :alt="theme.name"
            class="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out"
            format="webp"
            quality="80"
            sizes="sm:100vw md:50vw lg:400px"
            loading="lazy"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          <div class="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-xs font-semibold tracking-widest uppercase text-pink-300 mb-2">{{ theme.style }}</p>
            <h3 class="text-3xl font-serif text-white mb-4">{{ theme.name }}</h3>

            <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:bg-pink-500 hover:border-pink-400">
              <UIcon
                name="mdi:arrow-top-right"
                class="w-5 h-5"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
