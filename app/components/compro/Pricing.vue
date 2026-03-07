<script setup lang="ts">
const packages = [
  {
    name: 'Basic',
    price: '150',
    description: 'Sempurna untuk undangan digital yang simpel dan elegan.',
    features: [
      'Default 1 Bahasa',
      'Galeri Max 10 Foto',
      'Video Pre-Wedding Integration',
      'Custom Background Music',
      'Navigasi Peta (Google Maps)',
      'Hitung Mundur (Countdown)',
      'Konsultasi Tema'
    ],
    highlight: false
  },
  {
    name: 'Basic + 1 Bahasa',
    price: '200',
    description: 'Pilihan terpopuler dengan tambahan opsi bahasa untuk hari bahagia Anda.',
    features: [
      'Default + 1 Bahasa Tambahan',
      'Galeri Max 15 Foto',
      'Video Pre-Wedding Integration',
      'Custom Background Music',
      'Fitur RSVP',
      'Navigasi Peta (Google Maps)',
      'Fitur Amplop Digital (Gift)',
      'Hitung Mundur (Countdown)',
      'Konsultasi Tema'
    ],
    highlight: true
  },
  {
    name: 'Custom Template',
    price: 'Custom',
    description: 'Desain khusus dan eksklusif persis sesuai keinginan Anda.',
    features: [
      'Multi-bahasa',
      'Desain Tema Custom/Eksklusif',
      'Galeri Foto Unlimited',
      'Navigasi Peta (Google Maps)',
      'Hitung Mundur (Countdown)',
      'Video Pre-Wedding Integration',
      'Custom Domain (namaanda.com)',
      'Revisi Sepuasnya'
    ],
    highlight: false
  }
]
</script>

<template>
  <section
    id="pricing"
    class="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden"
  >
    <!-- Grid Pattern Background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-2">
          <UIcon
            name="mdi:tag-outline"
            class="w-4 h-4 text-pink-300"
          />
          <span class="text-xs font-semibold tracking-widest uppercase text-white/80">Paket & Harga</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-serif text-white leading-tight">
          Investasi Untuk <span class="italic text-pink-200">Momen Berharga</span>
        </h2>
        <p class="text-base md:text-lg text-white/60 font-light">
          Pilih paket yang paling sesuai dengan kebutuhan hari bahagia Anda. Transparan tanpa biaya tersembunyi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        <div
          v-for="(pkg, i) in packages"
          :key="i"
          :class="[
            'relative p-8 md:p-10 rounded-3xl border transition-all duration-500 overflow-hidden group',
            pkg.highlight
              ? 'bg-gradient-to-br from-pink-900/40 to-black border-pink-500/50 shadow-[0_0_50px_rgba(249,168,212,0.15)] md:-translate-y-4 z-10'
              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
          ]"
        >
          <!-- Highlight Glow -->
          <div
            v-if="pkg.highlight"
            class="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] -z-10"
          />

          <!-- Most Popular Badge -->
          <div
            v-if="pkg.highlight"
            class="absolute top-0 right-8 bg-pink-500 text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-4 rounded-b-lg"
          >
            Populer
          </div>

          <div class="mb-8">
            <h3 class="text-2xl font-serif text-white mb-2">
              {{ pkg.name }}
            </h3>
            <p class="text-sm text-white/60 font-light h-10">
              {{ pkg.description }}
            </p>
          </div>

          <div class="mb-8 flex items-end gap-1">
            <template v-if="pkg.price === 'Custom'">
              <span class="text-3xl lg:text-4xl font-serif text-white">Hubungi Kami</span>
            </template>
            <template v-else>
              <span class="text-xl text-white/60 font-medium">Rp</span>
              <span class="text-5xl font-serif text-white">{{ pkg.price }}</span>
              <span class="text-white/60 mb-1">k</span>
            </template>
          </div>


          <div class="space-y-4 mb-10">
            <div
              v-for="(feature, j) in pkg.features"
              :key="j"
              class="flex items-center gap-3"
            >
              <UIcon
                name="mdi:check-circle"
                :class="pkg.highlight ? 'text-pink-400 w-5 h-5' : 'text-white/40 w-5 h-5'"
              />
              <span class="text-sm text-white/80 font-light">{{ feature }}</span>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            :class="[
              'w-full py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2',
              pkg.highlight
                ? 'bg-pink-500 hover:bg-pink-400 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:-translate-y-1'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
            ]"
          >
            Pilih {{ pkg.name }} <UIcon
              name="mdi:arrow-right"
              class="w-4 h-4"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
