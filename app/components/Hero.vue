<template>
  <div class="h-screen flex overflow-hidden">
    <!-- LEFT PANEL (80%) -->
    <div class="hidden md:block md:w-4/5 h-screen relative">
      <!-- Background Image -->
      <img
        src="/img/background-hero.webp"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40" />

      <!-- Text Bottom Left -->
      <div class="absolute bottom-12 left-12 text-white z-10">
        <p class="tracking-[4px] text-sm mb-3">
          THE WEDDING OF
        </p>
        <h1 class="text-5xl font-light">
          Gian & Kristiany
        </h1>
      </div>
    </div>

    <!-- RIGHT PANEL (20%) -->
    <div
      :class="[
        'relative lg:w-1/3 w-full h-screen transition-all duration-700',
        isOpen ? 'overflow-y-auto' : 'overflow-hidden'
      ]"
    >
      <!-- BACKGROUND VIDEO UTAMA -->
      <div class="absolute inset-0 -z-10">
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source
            src="/video/wedding-video.mp4"
            type="video/mp4"
          >
        </video>
        <div class="absolute inset-0 bg-black/50" />
      </div>

      <!-- HERO CONTENT -->
      <div class="relative z-10 h-screen flex flex-col justify-between text-white text-center px-8 py-8">
        <div>
          <p class="tracking-[4px] text-xs mb-3">
            THE WEDDING OF
          </p>
          <h1 class="text-3xl md:text-4xl font-light mb-4">
            Gian & Kristiany
          </h1>
          <p class="mb-6 text-xs">
            Selasa, 3 Februari 2026
          </p>
        </div>

        <div class="max-w-md mx-auto text-center">
          <template v-if="!isOpen">
            <p class="text-xs tracking-widest uppercase opacity-80">
              Kepada
            </p>
            <p class="text-lg font-light mt-2">
              {{ guestName }}
            </p>
            <p class="text-[10px] opacity-60 mt-3 leading-relaxed">
              Kami mohon maaf jika ada kesalahan ejaan nama atau gelar.
            </p>
            <button
              class="mt-4 px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition tracking-widest hover:scale-105 transition cursor-pointer"
              @click="openInvitation"
            >
              BUKA UNDANGAN
            </button>
          </template>

          <template v-else>
            <p class="text-[12px] md:text-sm opacity-90 leading-relaxed">
              “Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak
              boleh diceraikan manusia.”
            </p>
            <p class="text-[10px] mt-2 opacity-70">
              Matius 19:6 & Markus 10:6-8
            </p>
          </template>
        </div>
      </div>

      <!-- SCROLL CONTENT -->
      <div
        v-if="isOpen"
        class="relative z-10 bg-transparent text-white h-screen scroll-smooth overflow-y-auto
           sm:snap-y sm:snap-mandatory"
      >
        <!-- MEMPELAI PRIA (pendek, fullscreen) -->
        <section class="h-screen relative snap-start">
          <img
            src="/img/groom-pria.jpg"
            alt="Groom"
            class="absolute inset-0 w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-black/40" />
          <div class="absolute left-6 bottom-6 text-white max-w-xs space-y-2">
            <p class="text-xs tracking-widest uppercase opacity-80">
              The Groom
            </p>
            <h2 class="text-3xl md:text-4xl font-light">
              Gian Felix Sinaga
            </h2>
            <div class="w-20 h-[2px] bg-white my-2" />
            <p class="text-sm opacity-80">
              Putra Pertama dari Bapak Ahmad & Ibu Siti
            </p>

            <!-- Sosial Media -->
            <div class="flex space-x-4 mt-2">
              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIcon
                  name="mdi:instagram"
                  class="w-6 h-6 text-white hover:text-pink-400 transition"
                />
              </a>
            </div>
          </div>
        </section>

        <!-- MEMPELAI WANITA (pendek, fullscreen) -->
        <section class="h-screen relative snap-start">
          <img
            src="/img/groom-wanita.jpg"
            alt="Bride"
            class="absolute inset-0 w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-black/40" />
          <div class="absolute left-6 bottom-6 text-white max-w-xs space-y-2">
            <p class="text-xs tracking-widest uppercase opacity-80">
              The Bride
            </p>
            <h2 class="text-3xl md:text-4xl font-light">
              Kristiany Munthe
            </h2>
            <div class="w-20 h-[2px] bg-white my-2" />
            <p class="text-sm opacity-80">
              Putri Pertama dari Bapak Ahmad & Ibu Siti
            </p>
            <div class="flex space-x-4 mt-2">
              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIcon
                  name="mdi:instagram"
                  class="w-6 h-6 text-white hover:text-pink-400 transition"
                />
              </a>
            </div>
          </div>
        </section>

        <!-- JOURNEY OF LOVE -->
        <section class="min-h-screen relative snap-start">
          <div class="absolute inset-0 -z-10">
            <video
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover filter brightness-75 contrast-125"
            >
              <source
                src="/video/wedding-video.mp4"
                type="video/mp4"
              >
            </video>
            <div class="absolute inset-0 bg-black/50" />
          </div>

          <div class="relative z-10 max-w-3xl mx-auto text-center space-y-12 text-white px-6 md:px-20 py-12">
            <div class="flex justify-center mb-4">
              <i class="mdi mdi-flower-tulip-outline text-4xl md:text-5xl text-pink-300" />
            </div>

            <div class="bg-white/10 rounded-2xl p-8 md:p-12 space-y-10 text-white">
              <p class="text-xs tracking-widest uppercase opacity-80">
                A Journey in Love
              </p>
              <h2 class="text-3xl md:text-4xl font-light">
                THE UNFINISHED CHAPTER
              </h2>

              <div class="space-y-8 text-sm md:text-base leading-relaxed mt-6">
                <div>
                  <h3 class="text-xl md:text-2xl font-semibold">
                    THE UNEXPECTED COMEBACK
                  </h3>
                  <p class="mt-2">
                    Pada Juli 2023, Gian & Munthe dipertemukan kembali...
                  </p>
                </div>
                <div>
                  <h3 class="text-xl md:text-2xl font-semibold">
                    THE BEAUTIFUL MESS (2023 - 2025)
                  </h3>
                  <p class="mt-2">
                    Sebagai dua individu yang berbeda karakter...
                  </p>
                </div>
                <div>
                  <h3 class="text-xl md:text-2xl font-semibold">
                    THE FOREVER CHAPTER (MARCH 2026)
                  </h3>
                  <p class="mt-2">
                    Perjalanan panjang ini akhirnya membawa Gian & Munthe ke titik tujuan yang indah...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- SAVE OUR DATE -->
        <section class="min-h-screen relative snap-start">
          <div class="absolute inset-0 -z-10">
            <video
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover"
            >
              <source
                src="/video/wedding-video.mp4"
                type="video/mp4"
              >
            </video>
            <div class="absolute inset-0 bg-black/50" />
          </div>

          <div class="relative z-10 max-w-3xl mx-auto text-center px-6 md:px-12 py-12 space-y-8">
            <div class="bg-white/10 rounded-2xl p-8 md:p-20 space-y-1 text-white">
              <div class="flex justify-center">
                <i class="mdi mdi-flower-tulip-outline text-4xl md:text-5xl text-pink-300" />
              </div>

              <div class="space-y-2">
                <h2 class="text-3xl md:text-4xl font-light tracking-widest">
                  SAVE OUR DATE
                </h2>
                <p class="text-xl md:text-2xl font-semibold">
                  RABU, 25 MARET 2026
                </p>
              </div>

              <div class="space-y-4">
                <div class="grid grid-cols-4 gap-4">
                  <div class="space-y-1">
                    <p class="text-2xl md:text-3xl font-bold">
                      {{ countdown.days }}
                    </p>
                    <p class="text-xs uppercase opacity-80">
                      Days
                    </p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-2xl md:text-3xl font-bold">
                      {{ countdown.hours }}
                    </p>
                    <p class="text-xs uppercase opacity-80">
                      Hours
                    </p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-2xl md:text-3xl font-bold">
                      {{ countdown.minutes }}
                    </p>
                    <p class="text-xs uppercase opacity-80">
                      Minutes
                    </p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-2xl md:text-3xl font-bold">
                      {{ countdown.seconds }}
                    </p>
                    <p class="text-xs uppercase opacity-80">
                      Seconds
                    </p>
                  </div>
                </div>

                <a
                  href="/save-the-date.ics"
                  download
                  class="mt-4 inline-block px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition"
                >Save
                  the
                  Date</a>
              </div>

              <div class="space-y-6 text-sm md:text-base opacity-90 mt-6">
                <div>
                  <h3 class="font-semibold text-lg">
                    Pemberkatan
                  </h3>
                  <p>07.00 - 11.00</p>
                  <p>Jl. Batu Luwih Kawan, Br. Bendul, Ds. Wongaya Gede, Penebel, Tabanan</p>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">
                    Wedding Reception
                  </h3>
                  <p>15:00 - 22:00</p>
                  <p>Jl. Tepuh Indah, Gang Kampung Baru, Br. Wongaya Kaja, Ds. Wongaya Gede, Penebel, Tabanan</p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Jl.+Batu+Luwih+Kawan,+Penebel,+Tabanan"
                  target="_blank"
                  class="inline-block px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition"
                >Buka di
                  Google
                  Maps</a>
              </div>
            </div>
          </div>
        </section>

        <!-- RSVP -->
        <section class="min-h-screen relative snap-start">
          <!-- Background Video -->
          <div class="absolute inset-0 -z-10">
            <video
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover"
            >
              <source
                src="/video/wedding-video.mp4"
                type="video/mp4"
              >
            </video>
            <div class="absolute inset-0 bg-black/50" />
          </div>

          <!-- RSVP Form & List -->
          <div class="relative z-10 max-w-3xl mx-auto text-center px-6 md:px-12 py-12 space-y-12">
            <!-- Judul + Intro -->
            <div>
              <h2 class="text-3xl md:text-4xl font-light text-white mb-4">
                RSVP & WISHES
              </h2>
              <p class="text-white/80 mb-8 text-sm md:text-base">
                Mohon bantu kami mempersiapkan acara pernikahan kami dengan mengonfirmasi kehadiran Anda melalui form
                berikut:
              </p>
            </div>

            <!-- Form RSVP -->
            <form
              class="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 space-y-6 text-white"
              @submit.prevent="submitRSVP"
            >
              <!-- Nama Lengkap -->
              <div class="flex flex-col text-left">
                <label
                  for="nama"
                  class="mb-2 text-sm font-semibold"
                >Nama Lengkap</label>
                <input
                  id="nama"
                  v-model="nama"
                  type="text"
                  name="nama"
                  placeholder="Nama Anda"
                  class="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                >
              </div>

              <!-- Konfirmasi Kehadiran -->
              <div class="flex flex-col text-left">
                <p class="mb-2 text-sm font-semibold">
                  Konfirmasi Kehadiran
                </p>
                <div class="flex gap-6">
                  <label class="flex items-center gap-2">
                    <input
                      v-model="kehadiran"
                      type="radio"
                      name="kehadiran"
                      value="Hadir"
                      class="accent-pink-300"
                      required
                    >
                    Hadir
                  </label>
                  <label class="flex items-center gap-2">
                    <input
                      v-model="kehadiran"
                      type="radio"
                      name="kehadiran"
                      value="Tidak Hadir"
                      class="accent-pink-300"
                    >
                    Tidak Hadir
                  </label>
                </div>
              </div>

              <!-- Ucapan & Doa -->
              <div class="flex flex-col text-left">
                <label
                  for="ucapan"
                  class="mb-2 text-sm font-semibold"
                >Ucapan & Doa</label>
                <textarea
                  id="ucapan"
                  v-model="ucapan"
                  name="ucapan"
                  rows="4"
                  placeholder="Tulis pesan atau doa Anda..."
                  class="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <!-- Tombol Kirim -->
              <button
                type="submit"
                class="w-full py-3 bg-pink-300 text-black font-semibold rounded-lg hover:bg-pink-400 transition flex justify-center items-center gap-2"
                :disabled="isSubmitting"
              >
                <!-- Spinner saat submit -->
                <span
                  v-if="isSubmitting"
                  class="animate-spin border-2 border-t-black border-white rounded-full w-5 h-5"
                />

                <!-- Ikon sukses / error -->
                <span
                  v-else-if="submitSuccess === true"
                  class="text-green-500 text-xl"
                >✅</span>
                <span
                  v-else-if="submitSuccess === false"
                  class="text-red-500 text-xl"
                >❌</span>

                <!-- Teks tombol -->
                <span v-else>Kirim Ucapan</span>
              </button>
            </form>

            <!-- List Ucapan Tamu -->
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-left text-white">
              <!-- Judul tetap di atas -->
              <h3 class="text-xl font-semibold mb-4">
                Ucapan & Doa Tamu
              </h3>

              <!-- Container scrollable untuk card -->
              <div class="max-h-[400px] overflow-y-auto space-y-4">
                <template
                  v-for="(entry, index) in guestMessages"
                  :key="index"
                >
                  <div class="bg-white/20 p-4 rounded-lg space-y-1">
                    <div class="flex justify-between items-center">
                      <p class="font-semibold">
                        {{ entry.nama }}
                      </p>
                      <span class="text-sm text-white/80">{{ entry.kehadiran }}</span>
                    </div>
                    <p class="text-white/90 text-sm">
                      {{ entry.ucapan }}
                    </p>
                    <p class="text-xs text-white/60">
                      {{ formatDate(entry.tanggal) }}
                    </p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </section>

        <section class="min-h-screen relative snap-start">
          <!-- Background Video -->
          <div class="absolute inset-0 -z-10">
            <video
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover"
            >
              <source
                src="/video/wedding-video.mp4"
                type="video/mp4"
              >
            </video>
            <div class="absolute inset-0 bg-black/50" />
          </div>

          <!-- Content -->
          <div class="relative z-10 max-w-3xl mx-auto text-center px-6 md:px-12 py-12 space-y-10">
            <!-- Heading -->
            <div class="space-y-2">
              <h2 class="text-3xl md:text-4xl font-light text-white">
                Wedding Gift
              </h2>
              <p class="text-white/80 text-sm md:text-base leading-relaxed">
                Doa restu Anda adalah kado yang paling berharga bagi kami.
                Namun, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada kedua mempelai, dapat melalui alamat atau nomor rekening di bawah ini.
              </p>
            </div>

            <!-- Cards Container -->
            <div class="space-y-6">
              <!-- Card 1: Kirim Kado / Alamat -->
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white grid md:grid-cols-2 items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div class="text-left">
                  <p class="font-semibold text-lg text-white/90">
                    Kirim Kado
                  </p>
                  <p class="text-white/80 mt-1">
                    Jl. Pantai Kedungu No.123, Bali
                  </p>
                </div>
                <div class="flex justify-end gap-3">
                  <a
                    href="https://www.google.com/maps/place/Jl.+Batu+Luwih+Kawan,+Penebel,+Tabanan"
                    target="_blank"
                    class="bg-pink-300 hover:bg-pink-400 text-black px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition"
                  >
                    <UIcon
                      name="mdi:map-marker"
                      class="w-5 h-5"
                    /> Maps
                  </a>
                </div>
              </div>

              <!-- Card 2: Nomor Rekening -->
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white flex justify-between items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <!-- Judul & Nama -->
                <div class="text-left">
                  <p class="font-semibold text-lg text-white/90">
                    Nomor Rekening
                  </p>
                  <p class="text-white/80 mt-1">
                    Wasudewa Puja <br>
                    1234-5678-9012-3456
                  </p>
                </div>

                <!-- Nomor + Tombol -->
                <div class="flex items-center gap-3 justify-end flex-1 text-right">
                  <p class="font-mono text-white/80 text-lg truncate" />
                  <button
                    class="bg-pink-300 hover:bg-pink-400 text-black px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition"
                    @click="copyText('1234-5678-9012-3456')"
                  >
                    <UIcon
                      name="mdi:content-copy"
                      class="w-5 h-5"
                    /> Salin
                  </button>
                </div>
              </div>

              <!-- Card 3: Gopay -->
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white flex justify-between items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <!-- Judul & Nama -->
                <div class="text-left">
                  <p class="font-semibold text-lg text-white/90">
                    Gopay
                  </p>
                  <p class="text-white/80 mt-1">
                    Wasudewa Puja <br>
                    1234-5678-9012-3456
                  </p>
                </div>

                <!-- Nomor + Tombol -->
                <div class="flex items-center gap-3 justify-end flex-1 text-right">
                  <p class="font-mono text-white/80 text-lg truncate" />
                  <button
                    class="bg-pink-300 hover:bg-pink-400 text-black px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition"
                    @click="copyText('1234-5678-9012-3456')"
                  >
                    <UIcon
                      name="mdi:content-copy"
                      class="w-5 h-5"
                    /> Salin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- GALERI -->
        <section class="relative min-h-screen overflow-hidden snap-start">
          <!-- Slides -->
          <div class="relative h-screen w-full">
            <template
              v-for="(img, idx) in images"
              :key="idx"
            >
              <img
                :src="img"
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                :class="current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'"
                @click="openLightbox(img)"
              >
            </template>

            <!-- Overlay gelap -->
            <div class="absolute inset-0 bg-black/40 z-5" />

            <!-- Judul melayang -->
            <h2
              class="absolute top-8 w-full text-3xl md:text-4xl font-light text-white text-center font-light z-20"
            >
              Gallery
            </h2>

            <!-- Panah navigasi -->
            <button
              class="absolute left-4 top-1/2 -translate-y-1/2 text-white-20 hover:text-white-30 z-30 text-3xl"
              @click="prevSlide"
            >
              ‹
            </button>
            <button
              class="absolute right-4 top-1/2 -translate-y-1/2 text-white-20 hover:text-white-30 z-30 text-3xl"
              @click="nextSlide"
            >
              ›
            </button>

            <!-- Pagination -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
              <span
                v-for="(img, idx) in images"
                :key="idx"
                class="w-3 h-3 rounded-full"
                :class="current === idx ? 'bg-pink-300' : 'bg-white/50'"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'

// Daftar gambar
const images = ref<string[]>([
  '/img/groom-pria.jpg',
  '/img/groom-wanita.jpg'
])

const current = ref(0)
let _interval: number | undefined

const nextSlide = () => {
  current.value = (current.value + 1) % images.value.length
}

const prevSlide = () => {
  current.value
    = (current.value - 1 + images.value.length) % images.value.length
}

// Simple Lightbox
const openLightbox = (src: string) => {
  const lightbox = document.createElement('div')
  lightbox.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer'
  lightbox.innerHTML = `<img src="${src}" class="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-lg" />`
  lightbox.onclick = () => lightbox.remove()
  document.body.appendChild(lightbox)
}

// AUDIO CONTROL
const audioControl = inject('audioControl') as {
  isPlaying: Ref<boolean>
  toggleAudio: () => void
  audio: Ref<HTMLAudioElement | null>
} | undefined

const route = useRoute()
const guestName = computed(() => (route.query.to as string) || 'Tamu Undangan')

const isOpen = ref(false)
const openInvitation = () => {
  isOpen.value = true
  document.body.classList.remove('overflow-hidden')

  if (audioControl?.audio.value && !audioControl.isPlaying.value) {
    audioControl.audio.value.play()
    audioControl.isPlaying.value = true
  }

  startCountdown()
}

onMounted(() => {
  document.body.classList.add('overflow-hidden')
  _interval = window.setInterval(nextSlide, 4000)
})

// Countdown
const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
})

const saveOurDate = new Date('March 25, 2026 07:00:00').getTime()
let countdownInterval: ReturnType<typeof setInterval>

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    const now = new Date().getTime()
    const distance = saveOurDate - now

    countdown.value.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0')
    countdown.value.hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
    countdown.value.minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    countdown.value.seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0')

    if (distance < 0) {
      clearInterval(countdownInterval)
      countdown.value.days = countdown.value.hours = countdown.value.minutes = countdown.value.seconds = '00'
    }
  }, 1000)
}

//  Firebase
interface FirebasePlugin {
  db: ReturnType<typeof import('firebase/firestore').getFirestore>
  collection: typeof import('firebase/firestore').collection
  addDoc: typeof import('firebase/firestore').addDoc
  serverTimestamp: typeof import('firebase/firestore').serverTimestamp
}

const nuxtApp = useNuxtApp()
const firebase = nuxtApp.$firebase as FirebasePlugin
if (!firebase) throw new Error('Firebase plugin tidak tersedia')

// Collection reference
const rsvpCollection = firebase?.collection(firebase.db, 'rsvp_messages')

//  Form state
const nama = ref('')
const kehadiran = ref('')
const ucapan = ref('')

// Guest messages type
interface GuestMessage {
  nama: string
  kehadiran: 'Hadir' | 'Tidak Hadir'
  ucapan: string
  tanggal: Date
}

const guestMessages = ref<GuestMessage[]>([])

//  Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyrdbUN4Bg_r_ZV7n4FUhaHIcFX5UTUSMBqWAj9PFmiZnQkUQ45698GJSjfGvFU93Cq/exec'

//  Submit RSVP
const isSubmitting = ref(false)
const submitSuccess = ref<boolean | null>(null) // null = idle, true = sukses, false = error

const submitRSVP = async () => {
  if (!nama.value || !kehadiran.value) return

  isSubmitting.value = true
  submitSuccess.value = null

  try {
    await firebase?.addDoc(rsvpCollection, {
      nama: nama.value,
      kehadiran: kehadiran.value,
      ucapan: ucapan.value,
      tanggal: firebase?.serverTimestamp()
    })

    // Google Sheet
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama: nama.value, kehadiran: kehadiran.value })
    })

    submitSuccess.value = true
  } catch (err) {
    console.error(err)
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false

    // reset form & ikon sukses/error setelah 2 detik
    setTimeout(() => {
      submitSuccess.value = null
      nama.value = ''
      kehadiran.value = ''
      ucapan.value = ''
    }, 2000)
  }
}

//  Fetch guest messages realtime
const fetchGuestMessages = async () => {
  const { query, orderBy, onSnapshot } = await import('firebase/firestore')

  const q = query(rsvpCollection, orderBy('tanggal', 'desc'))
  onSnapshot(q, (snapshot) => {
    guestMessages.value = snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        nama: data.nama,
        kehadiran: data.kehadiran,
        ucapan: data.ucapan,
        tanggal: data.tanggal?.toDate?.() || new Date()
      }
    })
  })
}

// Format tanggal
const formatDate = (d: Date) => new Date(d).toLocaleString('id-ID', {
  dateStyle: 'medium',
  timeStyle: 'short'
})

onMounted(() => {
  fetchGuestMessages()
})

const copyText = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      showToast(`Berhasil disalin`)
    })
    .catch(() => {
      showToast('Gagal menyalin', true)
    })
}

const showToast = (message: string, _isError = false) => {
  const toast = document.createElement('div')
  toast.textContent = message
  toast.className = `
    fixed top-6 left-1/2 transform -translate-x-1/2
    z-50 px-6 py-3 rounded-2xl text-white backdrop-blur-md bg-white/10
    font-medium text-center
    shadow-lg
    transition-all duration-300
  `
  document.body.appendChild(toast)

  // otomatis fade out dan hilang setelah 2 detik
  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translate(-50%, -20px)'
    setTimeout(() => toast.remove(), 300)
  }, 2000)
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
