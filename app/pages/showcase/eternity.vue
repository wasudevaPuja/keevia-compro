<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, computed } from 'vue'
import { useRoute } from 'vue-router'

useSeoMeta({
  title: 'Tema Eternity - Keevia Digital Invitation',
  description: 'Undangan pernikahan digital premium dengan nuansa navy gold yang elegan, efek paralaks 3D, dan fitur interaktif lengkap karya Keevia.',
  ogTitle: 'Tema Eternity - Keevia Digital Invitation',
  ogDescription: 'Undangan pernikahan digital premium dengan nuansa navy gold yang elegan, efek paralaks 3D, dan fitur interaktif lengkap karya Keevia.',
  ogImage: '/couple-bg.png',
  twitterCard: 'summary_large_image',
})

const isOpened = ref(false)

const scrollY = ref(0)
const onScroll = () => { scrollY.value = window.scrollY }

const tiltX = ref(0)
const tiltY = ref(0)
const gyroSupported = ref(false)

const onDeviceOrientation = (e: DeviceOrientationEvent) => {
  tiltX.value = Math.max(-20, Math.min(20, (e.beta ?? 0) - 45))
  tiltY.value = Math.max(-20, Math.min(20, e.gamma ?? 0))
}

const requestGyroPermission = async () => {
  if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
    try {
      const res = await (DeviceOrientationEvent as any).requestPermission()
      if (res === 'granted') {
        window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true })
        gyroSupported.value = true
      }
    } catch (_) {}
  } else if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true })
    gyroSupported.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.body.classList.add('overflow-hidden')
  if (window.DeviceOrientationEvent && typeof (DeviceOrientationEvent as any).requestPermission !== 'function') {
    window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true })
    gyroSupported.value = true
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.15 })
  setTimeout(() => {
    document.querySelectorAll('.reveal-section').forEach(el => io.observe(el))
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('deviceorientation', onDeviceOrientation)
})

const photoScale = computed(() => {
  if (!isOpened.value) return 1
  return 1 - (Math.min(scrollY.value / 600, 1) * 0.15)
})
const photoTransform = computed(() => {
  const gyroRotX = isOpened.value ? tiltX.value * 0.4 : 0
  const gyroRotY = isOpened.value ? tiltY.value * 0.5 : 0
  return `perspective(1200px) rotateX(${gyroRotX}deg) rotateY(${gyroRotY}deg) scale(${photoScale.value})`
})

const bgLayer1 = computed(() => {
  const tiltTrans = `translateX(${tiltY.value * 2.5}px) translateY(${tiltX.value * 1.5}px)`
  return `translateY(${scrollY.value * 0.15}px) ${tiltTrans}`
})
const bgLayer3 = computed(() => {
  const tiltTrans = `translateX(${tiltY.value * 1.5}px) translateY(${tiltX.value * 0.8}px)`
  return `translateY(-${scrollY.value * 0.08}px) ${tiltTrans}`
})

const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7.3 + 5) % 100}%`,
  delay: `${(i * 0.6) % 8}s`,
  duration: `${6 + (i % 5)}s`,
  size: `${10 + (i % 8)}px`,
  opacity: 0.25 + (i % 4) * 0.12,
  rotate: `${(i * 37) % 360}deg`,
}))

const route = useRoute()
const guestName = computed(() => (route.query.to as string) || 'Tamu Undangan')
const audioControl = inject('audioControl') as any

const openInvitation = async () => {
  await requestGyroPermission()
  isOpened.value = true
  document.body.classList.remove('overflow-hidden')
  if (audioControl?.audio.value && !audioControl.isPlaying.value) {
    audioControl.audio.value.play().catch(() => {})
    audioControl.isPlaying.value = true
  }
}

const rsvpAttendance = ref<'yes' | 'no' | ''>('')
const rsvpName = ref('')
const rsvpMessage = ref('')
const rsvpSubmitted = ref(false)

const wishes = ref([
  { name: 'Budi Santoso', attendance: true,  msg: 'Semoga rumah tangga kalian diberkahi kebahagiaan dan cinta yang abadi. Aamiin!' },
  { name: 'Sari Dewi',    attendance: true,  msg: 'Selamat menempuh hidup baru! Semoga selalu sakinah, mawaddah, warahmah.' },
  { name: 'Andi Pratama', attendance: false, msg: 'Mohon maaf tidak bisa hadir, doaku selalu menyertai kalian berdua. 🤍' },
  { name: 'Rina Kusuma',  attendance: true,  msg: 'Bahagia selalu ya! Semoga pernikahan ini jadi awal dari kisah indah yang tiada akhir.' },
  { name: 'Hendra Wijaya',attendance: false, msg: 'Selamat & bahagia! Semoga diberi keturunan yang soleh dan soleha.' },
])

const submitRsvp = () => {
  if (!rsvpName.value.trim() || !rsvpAttendance.value) return
  wishes.value.unshift({
    name: rsvpName.value.trim(),
    attendance: rsvpAttendance.value === 'yes',
    msg: rsvpMessage.value.trim() || '—',
  })
  rsvpSubmitted.value = true
}
</script>

<template>
  
  <div
    class="min-h-screen text-[#F5ECD7] font-sans relative"
    style="font-family: 'Georgia', serif; background: #253C54;"
    :class="isOpened ? '' : 'h-screen overflow-hidden'"
  >

    
    <NuxtLink
      to="/"
      class="fixed top-6 left-6 z-50 flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm hover:scale-105 transition-transform border"
      style="background: rgba(201,169,110,0.12); border-color: rgba(201,169,110,0.3); color: #C9A96E; backdrop-filter: blur(12px);"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4" /> Kembali
    </NuxtLink>

    <div
      v-if="!isOpened"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden cover-overlay"
      :class="{ 'cover-closing': isOpened }"
      style="background: linear-gradient(160deg, #253C54 0%, #2E4A60 60%, #344F68 100%);"
    >
        
        <div
          class="absolute -inset-[5%] z-0 will-change-transform"
          :style="{ transform: `translateX(${tiltY * 2.5}px) translateY(${tiltX * 1.5}px)`, transition: 'transform 0.8s cubic-bezier(0.23,1,0.32,1)' }"
        >
          <img src="/couple-bg.png" class="w-full h-full object-cover scale-110" style="opacity:1; filter: brightness(1.15) saturate(1.05);" />
          
          <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(37,60,84,0.97) 0%, rgba(37,60,84,0.75) 30%, rgba(37,60,84,0.3) 55%, transparent 100%);" />
          <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(37,60,84,0.2) 0%, transparent 25%);" />
          
          <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 60%);" />
        </div>

        
        <div class="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <span
            v-for="p in petals"
            :key="p.id"
            class="petal absolute"
            :style="{ left: p.left, top: '-20px', width: p.size, height: p.size, opacity: p.opacity, animationDelay: p.delay, animationDuration: p.duration, transform: `rotate(${p.rotate})` }"
          >🌸</span>
        </div>

        
        <div
          class="relative z-20 flex flex-col items-center text-center px-8 will-change-transform"
          :style="{ transform: `translateX(${-tiltY * 5}px) translateY(${-tiltX * 3}px)`, transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)' }"
        >
          

          <div class="cover-text-enter flex items-center gap-4 mb-8">
            <div class="h-px w-16" style="background: linear-gradient(to right, transparent, #C9A96E);"></div>
            <span class="text-[9px] tracking-[0.6em] uppercase" style="color:#C9A96E;">The Wedding Of</span>
            <div class="h-px w-16" style="background: linear-gradient(to left, transparent, #C9A96E);"></div>
          </div>

          <h1 class="cover-text-enter text-6xl md:text-8xl mb-2" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300; letter-spacing:0.04em; animation-delay:0.15s;">Julian</h1>
          <p class="cover-text-enter text-2xl mb-2" style="color:#C9A96E; font-style:italic; letter-spacing:0.15em; animation-delay:0.25s;">&</p>
          <h1 class="cover-text-enter text-6xl md:text-8xl mb-8" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300; letter-spacing:0.04em; animation-delay:0.35s;">Alisa</h1>

          <p class="cover-text-enter text-xs tracking-[0.5em] uppercase mb-12" style="color:#A89880; animation-delay:0.45s;">12 . 12 . 2026</p>

          
          <div class="cover-bottom-enter p-8 rounded-3xl border mb-10 w-72" style="background: rgba(245,236,215,0.04); border-color: rgba(201,169,110,0.2); backdrop-filter: blur(16px);">
            <p class="text-[9px] tracking-widest uppercase mb-3" style="color:#A89880;">Kepada Yang Terhormat</p>
            <p class="text-xl tracking-widest" style="color:#F5ECD7; font-family:'Georgia',serif;">{{ guestName }}</p>
          </div>

          <button
            @click="openInvitation"
            class="cover-bottom-enter relative px-12 py-4 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 group"
            style="background: linear-gradient(135deg, #C9A96E, #B8924A); color: #0D1B2A; box-shadow: 0 0 40px rgba(201,169,110,0.35), 0 8px 24px rgba(0,0,0,0.4); animation-delay: 0.2s;"
          >
            <span class="relative z-10">Buka Undangan</span>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style="background: linear-gradient(135deg, #D4B87A, #C9A96E);"></div>
          </button>
        </div>

        
        <p v-if="gyroSupported" class="absolute bottom-6 text-[9px] tracking-widest uppercase z-20" style="color: rgba(201,169,110,0.3);"> Miringkan HP untuk efek 3D </p>
    </div>

    <div class="w-full min-h-screen" style="background: linear-gradient(160deg, #253C54 0%, #2E4A60 50%, #344F68 100%); color:#F5ECD7;">

      
      <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute -inset-[5%] will-change-transform" :style="{ transform: bgLayer1 }">
          <img src="/couple-bg.png" class="w-full h-full object-cover scale-110" style="opacity:0.1; filter: blur(3px) brightness(0.4) saturate(0.7);" />
        </div>
        
        <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 20%, #0D1B2A 100%);"></div>
        
        <div class="absolute -inset-[5%] overflow-hidden" :style="{ transform: bgLayer3 }">
          <span
            v-for="p in petals.slice(0, 8)"
            :key="'main-' + p.id"
            class="petal-slow absolute"
            :style="{ left: p.left, top: '-20px', width: p.size, height: p.size, opacity: p.opacity * 0.4, animationDelay: p.delay, animationDuration: `${parseInt(p.duration) + 5}s` }"
          >🌸</span>
        </div>
      </div>

      
      <div
        v-show="isOpened && scrollY > 80"
        class="fixed inset-0 pointer-events-none flex items-center justify-center z-10"
        style="transition: opacity 0.6s ease;"
      >
        <div
          class="relative w-64 md:w-80 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden transform-gpu"
          :style="{
            transform: photoTransform,
            opacity: Math.min((scrollY - 80) / 200, 1),
            transition: 'transform 0.3s ease, opacity 0.6s ease',
            boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(201,169,110,0.12)',
            border: '1px solid rgba(201,169,110,0.2)',
          }"
        >
          
          <div
            class="absolute inset-0 z-20 pointer-events-none"
            :style="{
              background: `radial-gradient(circle at ${50 + tiltY * 1.5}% ${50 + tiltX * 1.5}%, rgba(201,169,110,0.1) 0%, transparent 65%)`,
              transition: 'background 0.3s ease',
            }"
          />
          <img src="/couple-bg.png" class="absolute inset-0 w-full h-full object-cover" style="filter: brightness(0.8) saturate(0.9);" />
          
          <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,21,32,0.9) 0%, rgba(10,21,32,0.2) 50%, transparent 100%);"></div>
          <div class="absolute bottom-8 left-0 right-0 text-center">
            <div class="h-px w-12 mx-auto mb-3" style="background: linear-gradient(to right, transparent, #C9A96E, transparent);"></div>
            <h2 class="text-3xl" style="font-family:'Georgia',serif; color:#C9A96E; font-weight:300; letter-spacing:0.15em;">J & A</h2>
          </div>
        </div>
      </div>

      
      <div class="absolute top-[80vh] w-full text-center z-20 pointer-events-none animate-bounce">
        <p class="text-[9px] tracking-widest uppercase mb-2" style="color: rgba(168,152,128,0.6);">Scroll untuk melihat keajaiban</p>
        <UIcon name="mdi:chevron-double-down" class="w-5 h-5 mx-auto" style="color: rgba(201,169,110,0.4);" />
      </div>

      
      <div class="h-[100vh]" />

      <div class="max-w-7xl mx-auto px-6 relative z-20 py-32 space-y-[40vh] md:space-y-[60vh]">

        <div class="w-full flex justify-end reveal-section">
          <div
            class="md:w-5/12 p-10 rounded-[2rem] text-right mr-4 md:mr-0 hover:-translate-x-2 transition-transform"
            style="background: rgba(13,27,42,0.75); backdrop-filter: blur(20px); border: 1px solid rgba(201,169,110,0.15); box-shadow: 0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,169,110,0.1);"
          >
            <p class="text-[9px] tracking-[0.5em] uppercase mb-1" style="color:#C9A96E;">The Ceremony</p>
            <div class="h-px mb-6 ml-auto w-16" style="background: linear-gradient(to left, #C9A96E, transparent);"></div>
            <h2 class="text-4xl mb-4" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300;">Holy Matrimony</h2>
            <p class="text-sm mb-1" style="color:#A89880;">Minggu, 12 Desember 2026</p>
            <p class="text-sm pb-8 mb-8" style="color: rgba(168,152,128,0.7); border-bottom: 1px solid rgba(201,169,110,0.1); font-weight:300; line-height:1.8;">
              08.00 – 10.00 WIB<br>Gereja Katedral Jakarta
            </p>
            <p class="text-[9px] tracking-[0.5em] uppercase mb-1" style="color:#C9A96E;">The Reception</p>
            <div class="h-px mb-6 ml-auto w-16" style="background: linear-gradient(to left, #C9A96E, transparent);"></div>
            <h2 class="text-4xl mb-4" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300;">Wedding Party</h2>
            <p class="text-sm mb-1" style="color:#A89880;">Minggu, 12 Desember 2026</p>
            <p class="text-sm pb-8 mb-8" style="color: rgba(168,152,128,0.7); border-bottom: 1px solid rgba(201,169,110,0.1); font-weight:300; line-height:1.8;">
              18.00 – 21.00 WIB<br>Hotel Mulia Senayan
            </p>
            <a href="#" class="inline-flex items-center gap-2 text-[10px] uppercase font-semibold tracking-widest transition-colors hover:opacity-80" style="color:#C9A96E;">
              <UIcon name="mdi:google-maps" class="w-4 h-4" /> Buka Google Maps
            </a>
          </div>
        </div>

        <div class="w-full flex justify-start reveal-section">
          <div
            class="md:w-5/12 p-10 rounded-[2rem] text-left ml-4 md:ml-0 hover:translate-x-2 transition-transform"
            style="background: linear-gradient(135deg, rgba(201,169,110,0.08), rgba(13,27,42,0.6)); backdrop-filter: blur(20px); border: 1px solid rgba(201,169,110,0.18); box-shadow: 0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,169,110,0.15);"
          >
            <UIcon name="mdi:gift-outline" class="w-10 h-10 mb-6" style="color:#C9A96E;" />
            <p class="text-[9px] tracking-[0.5em] uppercase mb-1" style="color:#C9A96E;">Tanda Kasih</p>
            <div class="h-px mb-6 w-16" style="background: linear-gradient(to right, #C9A96E, transparent);"></div>
            <h2 class="text-4xl mb-4" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300;">Wedding Gift</h2>
            <p class="text-sm mb-8 leading-relaxed" style="color:#A89880; font-weight:300;">
              Kehadiran Anda adalah hadiah terindah. Namun jika Anda ingin memberikan hadiah, silakan gunakan detail berikut.
            </p>
            <div class="p-6 rounded-2xl mb-6" style="background: rgba(10,21,32,0.6); border: 1px solid rgba(201,169,110,0.12);">
              <p class="text-xl mb-1" style="font-family:'Georgia',serif; color:#F5ECD7;">BCA</p>
              <p class="text-[9px] uppercase tracking-widest mb-2" style="color:#A89880;">a.n Julian</p>
              <p class="text-2xl font-mono tracking-widest mb-4" style="color:#C9A96E;">1234 567 890</p>
              <button class="w-full py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all hover:opacity-90" style="background: rgba(201,169,110,0.15); border: 1px solid rgba(201,169,110,0.25); color:#C9A96E;">
                <UIcon name="mdi:content-copy" class="inline w-3 h-3 mr-1" /> Salin Rekening
              </button>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center reveal-section">
          <div
            class="w-full md:w-8/12 p-10 rounded-[2rem] text-left"
            style="background: linear-gradient(135deg, #C9A96E, #B8924A); box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 60px rgba(201,169,110,0.15);"
          >
            <p class="text-[9px] tracking-[0.5em] uppercase mb-1 font-bold" style="color: rgba(10,21,32,0.6);">Kehadiran</p>
            <div class="h-px mb-6 w-16" style="background: rgba(10,21,32,0.25);"></div>
            <h2 class="text-4xl mb-8" style="font-family:'Georgia',serif; color:#0D1B2A; font-weight:400;">Form RSVP</h2>
            <form class="space-y-5" @submit.prevent="submitRsvp">
              <div>
                <label class="block text-[9px] font-bold tracking-widest uppercase mb-2" style="color: rgba(10,21,32,0.55);">Nama Lengkap</label>
                <input v-model="rsvpName" type="text" placeholder="Nama Anda" class="w-full px-5 py-4 rounded-xl text-sm font-medium outline-none transition-colors placeholder:opacity-40" style="background: rgba(10,21,32,0.08); border: 1px solid rgba(10,21,32,0.15); color:#0D1B2A;" required />
              </div>
              <div>
                <label class="block text-[9px] font-bold tracking-widest uppercase mb-3" style="color: rgba(10,21,32,0.55);">Konfirmasi Kehadiran</label>
                <div class="flex gap-3">
                  <label
                    class="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer transition-all text-sm font-semibold"
                    :style="rsvpAttendance === 'yes'
                      ? 'background:#0D1B2A; color:#C9A96E; border:2px solid #0D1B2A;'
                      : 'background:rgba(10,21,32,0.06); color:rgba(10,21,32,0.5); border:2px solid rgba(10,21,32,0.12);'"
                  >
                    <input type="radio" v-model="rsvpAttendance" value="yes" class="sr-only" />
                    <span v-if="rsvpAttendance === 'yes'">✓</span>
                    <span>Hadir</span>
                  </label>
                  <label
                    class="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer transition-all text-sm font-semibold"
                    :style="rsvpAttendance === 'no'
                      ? 'background:#0D1B2A; color:#C9A96E; border:2px solid #0D1B2A;'
                      : 'background:rgba(10,21,32,0.06); color:rgba(10,21,32,0.5); border:2px solid rgba(10,21,32,0.12);'"
                  >
                    <input type="radio" v-model="rsvpAttendance" value="no" class="sr-only" />
                    <span v-if="rsvpAttendance === 'no'">✓</span>
                    <span>Tidak Hadir</span>
                  </label>
                </div>
              </div>
              <div>
                <label class="block text-[9px] font-bold tracking-widest uppercase mb-2" style="color: rgba(10,21,32,0.55);">Ucapan & Doa <span style="font-weight:400; text-transform:none; letter-spacing:0;">(opsional)</span></label>
                <textarea v-model="rsvpMessage" rows="3" placeholder="Tuliskan ucapan untuk pengantin..." class="w-full px-5 py-3 rounded-xl text-sm outline-none resize-none transition-colors placeholder:opacity-40" style="background: rgba(10,21,32,0.08); border: 1px solid rgba(10,21,32,0.15); color:#0D1B2A;"></textarea>
              </div>
              <div v-if="rsvpSubmitted" class="py-3 rounded-xl text-center text-sm font-semibold" style="background:rgba(10,21,32,0.15); color:#0D1B2A;">
                🎉 Terima kasih! Konfirmasi berhasil dikirim.
              </div>
              <button v-else type="submit" class="w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]" style="background:#0D1B2A; color:#C9A96E;">
                Kirim Konfirmasi
              </button>
            </form>
          </div>
        </div>

        <div class="w-full flex justify-center reveal-section">
          <div
            class="w-full md:w-8/12 p-10 rounded-[2rem]"
            style="background: rgba(28,46,66,0.7); backdrop-filter: blur(20px); border: 1px solid rgba(201,169,110,0.15);"
          >
            <p class="text-[9px] tracking-[0.5em] uppercase mb-1" style="color:#C9A96E;">Wishes</p>
            <div class="h-px mb-6 w-16" style="background: linear-gradient(to right, #C9A96E, transparent);"></div>
            <h2 class="text-4xl mb-8" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300;">Ucapan & Doa</h2>
            <div class="space-y-4 max-h-80 overflow-y-auto pr-2 mb-8 scrollbar-none">
              <transition-group name="wish-list" tag="div" class="space-y-4">
                <div
                  v-for="(w, i) in wishes"
                  :key="i"
                  class="p-5 rounded-2xl"
                  style="background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.12);"
                >
                  <div class="flex items-center justify-between mb-2">
                    <p class="font-semibold text-sm" style="color:#F5ECD7;">{{ w.name }}</p>
                    <span
                      class="text-[9px] px-3 py-1 rounded-full font-bold tracking-widest uppercase"
                      :style="w.attendance
                        ? 'background:rgba(201,169,110,0.2); color:#C9A96E;'
                        : 'background:rgba(255,255,255,0.06); color:rgba(245,236,215,0.4);'"
                    >{{ w.attendance ? '✓ Hadir' : '✗ Tidak Hadir' }}</span>
                  </div>
                  <p class="text-sm leading-relaxed" style="color:#A89880; font-weight:300;">{{ w.msg }}</p>
                </div>
              </transition-group>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col items-center pt-32 pb-[20vh] reveal-section">
          <div class="text-center mb-16">
            <p class="text-[9px] tracking-[0.6em] uppercase mb-3" style="color:#C9A96E;">Gallery</p>
            <div class="flex items-center gap-4 justify-center mb-4">
              <div class="h-px w-12" style="background: linear-gradient(to right, transparent, #C9A96E);"></div>
              <h2 class="text-4xl" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300;">Our Memories</h2>
              <div class="h-px w-12" style="background: linear-gradient(to left, transparent, #C9A96E);"></div>
            </div>
          </div>
          <div class="w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-none z-20">
            <div class="flex md:grid md:grid-cols-4 gap-4 px-4 md:px-0 w-max md:w-full">
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-square rounded-[2rem] overflow-hidden md:mt-20 hover:opacity-100 transition-opacity" style="opacity:0.82; border: 1px solid rgba(201,169,110,0.12);">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.75);" >
              </div>
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-[3/4] rounded-[2rem] overflow-hidden hover:opacity-100 transition-opacity" style="opacity:0.82; border: 1px solid rgba(201,169,110,0.12);">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.75);" >
              </div>
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-square rounded-[2rem] overflow-hidden md:mt-32 hover:opacity-100 transition-opacity" style="opacity:0.82; border: 1px solid rgba(201,169,110,0.12);">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.75);" >
              </div>
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-video rounded-[2rem] overflow-hidden hover:opacity-100 transition-opacity" style="opacity:0.82; border: 1px solid rgba(201,169,110,0.12);">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.75);" >
              </div>
            </div>
          </div>
        </div>

      </div>


      <footer class="py-24 text-center relative z-50" style="background: #09131D; border-top: 1px solid rgba(201,169,110,0.1);">
        <div class="h-px w-32 mx-auto mb-16" style="background: linear-gradient(to right, transparent, #C9A96E, transparent);"></div>
        <h2 class="text-3xl mb-4" style="font-family:'Georgia',serif; color:#F5ECD7; font-weight:300; font-style:italic; line-height:1.6;">Terima Kasih Atas Doa<br>& Kehadiran Anda.</h2>

        <p class="text-sm mb-12" style="color:#A89880; font-style:italic;">— Julian & Alisa —</p>
        <div class="flex justify-center mb-8">
          <a
            href="https://instagram.com/keevia.id"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110"
            style="background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.25);"
          >
            <UIcon name="mdi:instagram" class="w-5 h-5" style="color:#C9A96E;" />
          </a>
        </div>
        <p class="text-[9px] tracking-widest uppercase" style="color: rgba(168,152,128,0.4);">© 2026 Keevia.id — All Rights Reserved</p>
      </footer>
    </div>
  </div>
</template>

<style>
html { scroll-behavior: smooth; }


.content-fade-enter-active { transition: opacity 0.8s ease; }
.content-fade-leave-active { transition: opacity 0.3s ease; }
.content-fade-enter-from, .content-fade-leave-to { opacity: 0; }


@keyframes slideFromTop {
  from { opacity: 0; transform: translateY(-28px); }
  to   { opacity: 1; transform: translateY(0); }
}
.cover-text-enter {
  animation: slideFromTop 0.9s cubic-bezier(0.23, 1, 0.32, 1) both;
}


@keyframes slideFromBottom {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
}
.cover-bottom-enter {
  animation: slideFromBottom 0.9s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 0.6s;
}


.fade-enter-active, .fade-leave-active { transition: opacity 0.6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes petalFall {
  0%   { transform: translateY(-20px) rotate(0deg) scale(0.5); opacity: 0; }
  15%  { opacity: 1; transform: translateY(8vh) rotate(90deg) scale(1); }
  85%  { opacity: 0.6; }
  100% { transform: translateY(112vh) rotate(540deg) translateX(30px) scale(0.7); opacity: 0; }
}
.petal {
  animation: petalFall linear infinite;
  user-select: none;
  font-size: 0.75rem;
  line-height: 1;
  color: #C9A96E;
}
.petal-slow {
  animation: petalFall linear infinite;
  user-select: none;
  font-size: 0.6rem;
  line-height: 1;
  color: #C9A96E;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(50px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.reveal-section {
  opacity: 0;
  animation: revealUp 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-play-state: paused;
}
.reveal-section.visible {
  animation-play-state: running;
}

.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }

.wish-list-enter-active { transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
.wish-list-enter-from { opacity: 0; transform: translateY(-16px) scale(0.97); }
</style>
