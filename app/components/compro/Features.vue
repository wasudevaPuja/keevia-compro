<script setup lang="ts">
const features = [
  {
    icon: 'mdi:translate',
    title: 'Multi-Language Support',
    description: 'Bebas kustomisasi bahasa undangan Anda untuk menyambut tamu dari berbagai latar belakang dunia.'
  },
  {
    icon: 'mdi:music-note-outline',
    title: 'Background Music',
    description: 'Beri sentuhan emosi dengan musik latar pilihan yang otomatis terputar saat undangan dibuka.'
  },
  {
    icon: 'mdi:email-heart-outline',
    title: 'RSVP & Guestbook',
    description: 'Catat kehadiran tamu dan terima ucapan doa restu secara langsung di dashboard Anda.'
  },
  {
    icon: 'mdi:image-multiple-outline',
    title: 'Exclusive Gallery',
    description: 'Tampilkan momen pre-wedding terbaik Anda dalam galeri bergaya eksklusif dan estetik.'
  },
  {
    icon: 'mdi:map-marker-radius-outline',
    title: 'Interactive Maps',
    description: 'Permudah tamu menemukan lokasi acara dengan integrasi Google Maps yang responsif.'
  },
  {
    icon: 'mdi:gift-outline',
    title: 'Digital Gift',
    description: 'Terima tanda kasih dari tamu melalui transfer bank atau e-wallet dengan aman dan praktis.'
  },
  {
    icon: 'mdi:timer-sand',
    title: 'Countdown Timer',
    description: 'Hitung mundur menuju hari bahagia Anda dengan tampilan waktu yang elegan.'
  }
]
</script>

<template>
  <section
    id="features"
    class="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden"
  >
    <!-- Ornaments -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[100px]" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-2">
          <UIcon
            name="mdi:star-four-points-outline"
            class="w-4 h-4 text-pink-300"
          />
          <span class="text-xs font-semibold tracking-widest uppercase text-white/80">Fitur Unggulan</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-serif text-white leading-tight">
          Lebih Dari Sekadar <span class="italic text-pink-200">Undangan</span>
        </h2>
        <p class="text-base md:text-lg text-white/60 font-light">
          Setiap detail dirancang untuk memberikan pengalaman tak terlupakan bagi Anda dan para tamu undangan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, i) in features"
          :key="i"
          :class="[
            'group p-8 rounded-3xl relative overflow-hidden transition-all duration-500',
            i === 0 
              ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/10 border-pink-400/50 shadow-[0_0_30px_rgba(249,168,212,0.2)] md:col-span-2 lg:col-span-3 scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,168,212,0.3)]' 
              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:-translate-y-2'
          ]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <!-- Special glow for highlighted feature -->
          <div v-if="i === 0" class="absolute -right-20 -top-20 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]" />

          <div :class="['relative z-10', i === 0 ? 'flex flex-col md:flex-row md:items-center gap-6' : '']">
            <div :class="['rounded-2xl flex flex-shrink-0 items-center justify-center transition-transform duration-500', i === 0 ? 'w-20 h-20 bg-pink-400/20 border border-pink-300/50 mb-0 md:mr-6' : 'w-14 h-14 bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:border-pink-300/30']">
              <UIcon
                :name="feature.icon"
                :class="['text-pink-300', i === 0 ? 'w-10 h-10' : 'w-7 h-7']"
              />
            </div>

            <div>
              <div v-if="i === 0" class="inline-block px-3 py-1 mb-3 rounded-full bg-pink-300/20 text-pink-200 text-xs font-semibold tracking-widest uppercase">New Feature</div>
              <h3 :class="['font-serif text-white mb-3', i === 0 ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl']">
                {{ feature.title }}
              </h3>
              <p :class="['font-light leading-relaxed', i === 0 ? 'text-white/80 text-base md:text-lg max-w-3xl' : 'text-sm text-white/60']">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
