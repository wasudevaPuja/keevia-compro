<script setup lang="ts">
const faqs = [
  {
    icon: 'mdi:translate',
    question: 'Apakah undangan mendukung lebih dari satu bahasa (Multi-Language Support)?',
    answer: 'Ya, Anda bebas mengkustomisasi bahasa undangan Anda untuk menyambut tamu dari berbagai latar belakang budaya di seluruh dunia.'
  },
  {
    icon: 'mdi:music-note-outline',
    question: 'Bisakah saya memasang musik di undangan (Background Music)?',
    answer: 'Tentu saja! Anda dapat memberikan sentuhan emosi dengan musik latar (background music) sesuai pilihan Anda, yang akan otomatis terputar saat undangan dibuka oleh tamu.'
  },
  {
    icon: 'mdi:email-heart-outline',
    question: 'Bagaimana cara konfirmasi kehadiran (RSVP) & Guestbook bekerja?',
    answer: 'Tamu dapat mencatat kehadiran mereka dengan mudah melalui form elektronik dan juga meninggalkan ucapan serta doa restu secara langsung yang dapat Anda tinjau di dashboard.'
  },
  {
    icon: 'mdi:image-multiple-outline',
    question: 'Apakah kami bisa menampilkan foto / video pre-wedding?',
    answer: 'Keevia menyediakan Exclusive Gallery. Anda dapat menampilkan momen pre-wedding terbaik Anda dalam susunan galeri bergaya eksklusif dan estetik.'
  },
  {
    icon: 'mdi:map-marker-radius-outline',
    question: 'Apakah lokasi acara terintegrasi dengan peta?',
    answer: 'Ya, undangan digital Anda akan memiliki Interactive Maps menggunakan Google Maps yang mempermudah tamu menemukan lokasi acara langsung di ponsel mereka.'
  },
  {
    icon: 'mdi:gift-outline',
    question: 'Apa itu fitur Digital Gift?',
    answer: 'Melalui fitur Digital Gift, Anda dapat menerima tanda kasih dari tamu melalui transfer bank atau e-wallet (seperti GoPay, OVO, dll) dengan aman, tanpa menyebarkan amplop cetak.'
  },
  {
    icon: 'mdi:timer-sand',
    question: 'Apa fungsi Countdown Timer?',
    answer: 'Fitur Countdown Timer secara elegan menghitung mundur waktu menuju hari bahagia Anda, membuat tamu menantikan momen bersejarah tersebut.'
  }
]

useSeoMeta({
  title: 'FAQ Fitur - Keevia',
  description: 'Penjelasan lengkap mengenai fitur-fitur pada paket undangan digital premium dari Keevia.',
})
</script>

<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden relative">
    <ComproNavbar />

    <!-- Ambient / Ornaments -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div class="absolute top-[10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-500/10 rounded-full blur-[100px]" />
      <div class="absolute bottom-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
    </div>

    <!-- Main Content -->
    <main class="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-2">
            <UIcon
              name="mdi:frequently-asked-questions"
              class="w-4 h-4 text-pink-300"
            />
            <span class="text-xs font-semibold tracking-widest uppercase text-white/80">Penjelasan Fitur</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Frequently <span class="italic text-pink-200">Asked Questions</span>
          </h1>
          <p class="text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto">
            Temukan jawaban lengkap bagaimana fitur premium Keevia bekerja untuk menyempurnakan hari bahagia Anda.
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-6">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-pink-500/10 border border-pink-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UIcon
                  :name="faq.icon"
                  class="w-5 h-5 text-pink-300"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg md:text-xl font-medium text-white mb-3 font-serif">
                  {{ faq.question }}
                </h3>
                <p class="text-white/70 font-light leading-relaxed text-sm md:text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <LazyComproFooter class="relative z-10" />
    <LazyFloatingButtons />
  </div>
</template>
