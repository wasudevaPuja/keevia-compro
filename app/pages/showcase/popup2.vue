<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, computed } from 'vue'
import { useRoute } from 'vue-router'








const isOpened = ref(false)
const scrollY = ref(0)
const onScroll = () => { scrollY.value = window.scrollY }

const tiltX = ref(0)
const tiltY = ref(0)
const gyroSupported = ref(false)

const onDeviceOrientation = (e: DeviceOrientationEvent) => {
  tiltX.value = Math.max(-15, Math.min(15, (e.beta ?? 0) - 45))
  tiltY.value = Math.max(-15, Math.min(15, e.gamma ?? 0))
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
  }, { threshold: 0.12 })
  setTimeout(() => {
    document.querySelectorAll('.reveal-item').forEach(el => io.observe(el))
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('deviceorientation', onDeviceOrientation)
})

const photoProgress = computed(() => Math.min(scrollY.value / 700, 1))

const photoScale = computed(() => {
  if (!isOpened.value) return 0.3
  return 0.3 + photoProgress.value * 0.7
})

const photoOpacity = computed(() => {
  if (!isOpened.value) return 0
  return Math.min(scrollY.value / 250, 1)
})

const photoBlur = computed(() => {
  if (!isOpened.value) return 10
  return Math.max(0, 10 - photoProgress.value * 10)
})

const photoTransform = computed(() => {
  const gyroRotZ = isOpened.value ? tiltY.value * 0.3 : 0
  const gyroRotX = isOpened.value ? tiltX.value * 0.2 : 0
  const scale = photoScale.value
  return `perspective(1400px) scale(${scale}) rotateZ(${gyroRotZ}deg) rotateX(${gyroRotX}deg)`
})


const bgFar = computed(() => `scale(${1.1 + scrollY.value * 0.0003}) translateY(${scrollY.value * 0.12}px)`)
const bgNear = computed(() => `translateY(-${scrollY.value * 0.06}px)`)


const leaves = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 8.5 + 3) % 100}%`,
  delay: `${(i * 0.9) % 9}s`,
  duration: `${8 + (i % 6)}s`,
  size: `${14 + (i % 10)}px`,
  opacity: 0.4 + (i % 3) * 0.15,
  swing: `${(i % 2 === 0 ? 1 : -1) * (15 + i % 20)}px`,
}))


const route = useRoute()
const guestName = computed(() => (route.query.to as string) || 'Tamu Undangan')
const audioControl = inject('audioControl') as any

const rsvpAttendance = ref<'yes' | 'no' | ''>('')
const rsvpName = ref('')
const rsvpMessage = ref('')
const rsvpSubmitted = ref(false)

const wishes = ref([
  { name: 'Budi Santoso',   attendance: true,  msg: 'Semoga rumah tangga kalian diberkahi kebahagiaan dan cinta yang abadi. Aamiin!' },
  { name: 'Sari Dewi',      attendance: true,  msg: 'Selamat menempuh hidup baru! Semoga selalu sakinah, mawaddah, warahmah.' },
  { name: 'Andi Pratama',   attendance: false, msg: 'Mohon maaf tidak bisa hadir, doaku selalu menyertai kalian berdua. 🤍' },
  { name: 'Rina Kusuma',    attendance: true,  msg: 'Bahagia selalu ya! Semoga pernikahan ini jadi awal dari kisah indah yang tiada akhir.' },
  { name: 'Hendra Wijaya',  attendance: false, msg: 'Selamat & bahagia! Semoga diberi keturunan yang soleh dan soleha.' },
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

const openInvitation = async () => {
  await requestGyroPermission()
  isOpened.value = true
  document.body.classList.remove('overflow-hidden')
  if (audioControl?.audio.value && !audioControl.isPlaying.value) {
    audioControl.audio.value.play().catch(() => {})
    audioControl.isPlaying.value = true
  }
}
</script>

<template>
  <div
    class="min-h-screen font-sans relative overflow-x-hidden"
    style="background: linear-gradient(160deg, #111A10 0%, #1A2318 55%, #1E2A1C 100%); color: #F5EDD7;"
    :class="isOpened ? '' : 'h-screen overflow-hidden'"
  >

    <NuxtLink
      v-if="!isOpened"
      to="/"
      class="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase hover:scale-105 transition-transform border"
      style="background: rgba(74,124,111,0.15); border-color: rgba(74,124,111,0.35); color: #4A7C6F; backdrop-filter: blur(12px);"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4" /> Batal
    </NuxtLink>

    
    <transition name="fade-cover">
      <div v-if="!isOpened" class="fixed inset-0 z-50 flex overflow-hidden">

        
        <div
          class="relative w-full md:w-[45%] h-full overflow-hidden will-change-transform"
          :style="{ transform: `translateX(${tiltY * 1.5}px) translateY(${tiltX * 0.8}px)`, transition: 'transform 0.9s cubic-bezier(0.23,1,0.32,1)' }"
        >
          <img src="/couple-bg2.png" class="w-full h-full object-cover scale-110" style="filter: brightness(0.75) saturate(0.95);" />
          <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(17,26,16,0.2) 0%, rgba(17,26,16,0.6) 100%);"></div>
          <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(17,26,16,0.9) 0%, transparent 40%);"></div>

          <div class="absolute bottom-10 left-8 right-8 md:hidden text-center">
            <p class="text-[9px] tracking-[0.5em] uppercase mb-2" style="color: #4A7C6F;">The Wedding Of</p>
            <h1 class="text-5xl mb-1" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300;">Julian & Alisa</h1>
            <p class="text-xs tracking-[0.4em]" style="color:#A8967E;">12 . 12 . 2026</p>
          </div>
        </div>

        
        <div
          class="hidden md:flex flex-col justify-center px-12 lg:px-16 w-[55%] relative"
          style="background: linear-gradient(135deg, #1A2318 0%, #1E2A1C 100%);"
        >
          
          <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <span
              v-for="l in leaves.slice(0,6)"
              :key="'cover-' + l.id"
              class="leaf absolute"
              :style="{ left: l.left, top: '-20px', fontSize: l.size, opacity: l.opacity, animationDelay: l.delay, animationDuration: l.duration }"
            >🍃</span>
          </div>

          <div
            class="relative z-10 will-change-transform"
            :style="{ transform: `translateX(${-tiltY * 4}px) translateY(${-tiltX * 2}px)`, transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)' }"
          >
            <div class="flex items-center gap-3 mb-10">
              <div class="w-8 h-px" style="background:#C1604A;"></div>
              <span class="text-[9px] tracking-[0.6em] uppercase" style="color:#C1604A;">The Wedding Of</span>
            </div>

            <h1 class="text-7xl lg:text-8xl mb-2 leading-none" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300; letter-spacing:-0.01em;">Julian</h1>
            <p class="text-3xl mb-2" style="color:#4A7C6F; font-family:'Georgia',serif; font-style:italic;">&</p>
            <h1 class="text-7xl lg:text-8xl mb-10 leading-none" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300; letter-spacing:-0.01em;">Alisa</h1>

            <div class="flex items-center gap-3 mb-12">
              <div class="h-px flex-1" style="background: linear-gradient(to right, #C1604A, transparent);"></div>
              <p class="text-xs tracking-[0.4em] uppercase" style="color:#A8967E;">12 . 12 . 2026</p>
              <div class="h-px flex-1" style="background: linear-gradient(to left, #C1604A, transparent);"></div>
            </div>

            <div class="p-6 rounded-2xl border mb-10" style="background: rgba(74,124,111,0.06); border-color: rgba(74,124,111,0.2);">
              <p class="text-[9px] tracking-widest uppercase mb-2" style="color:#A8967E;">Kepada Yang Terhormat</p>
              <p class="text-xl tracking-wider" style="color:#F5EDD7; font-family:'Georgia',serif;">{{ guestName }}</p>
            </div>

            <button
              @click="openInvitation"
              class="group relative px-10 py-4 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95"
              style="background: linear-gradient(135deg, #4A7C6F, #3A6860); color:#F5EDD7; box-shadow: 0 0 40px rgba(74,124,111,0.3), 0 8px 24px rgba(0,0,0,0.4);"
            >
              <span class="relative z-10">Buka Undangan</span>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style="background: linear-gradient(135deg, #5A8C7F, #4A7C6F);"></div>
            </button>

            <p v-if="gyroSupported" class="mt-8 text-[9px] tracking-widest uppercase" style="color: rgba(74,124,111,0.4);">Miringkan HP untuk efek 3D</p>
          </div>
        </div>

        
        <div class="md:hidden fixed bottom-8 left-0 right-0 flex flex-col items-center z-[60] gap-4">
          <div class="p-5 rounded-2xl border text-center mx-6" style="background: rgba(17,26,16,0.8); border-color: rgba(74,124,111,0.2); backdrop-filter: blur(16px);">
            <p class="text-[9px] tracking-widest uppercase mb-1" style="color:#A8967E;">Kepada Yang Terhormat</p>
            <p class="text-lg tracking-wider" style="color:#F5EDD7; font-family:'Georgia',serif;">{{ guestName }}</p>
          </div>
          <button
            @click="openInvitation"
            class="px-10 py-4 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:scale-105"
            style="background: linear-gradient(135deg, #4A7C6F, #3A6860); color:#F5EDD7; box-shadow: 0 0 30px rgba(74,124,111,0.4);"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </transition>

    
    <div v-show="isOpened" class="w-full">

      
      <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute inset-0 will-change-transform" :style="{ transform: bgFar }">
          <img src="/couple-bg2.png" class="w-full h-full object-cover" style="opacity:0.12; filter: blur(4px) saturate(0.6) brightness(0.5);" />
        </div>
        <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 15%, #1A2318 100%);"></div>
        
        <div class="absolute inset-0 overflow-hidden" :style="{ transform: bgNear }">
          <span
            v-for="l in leaves.slice(0,8)"
            :key="'bg-' + l.id"
            class="leaf-slow absolute"
            :style="{ left: l.left, top: '-20px', fontSize: l.size, opacity: l.opacity * 0.3, animationDelay: l.delay, animationDuration: `${parseInt(l.duration) + 6}s` }"
          >🍃</span>
        </div>
      </div>

      
      <div class="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
        <div
          class="relative w-56 md:w-72 h-[380px] md:h-[480px] rounded-[2.5rem] overflow-hidden transform-gpu"
          :style="{
            transform: photoTransform,
            opacity: photoOpacity,
            filter: `blur(${photoBlur}px)`,
            transition: 'filter 0.2s ease, opacity 0.3s ease',
            boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(74,124,111,0.15)',
            border: '1px solid rgba(74,124,111,0.25)',
          }"
        >
          
          <div
            class="absolute inset-0 z-20 pointer-events-none"
            :style="{
              background: `radial-gradient(circle at ${50 + tiltY * 2}% ${50 + tiltX * 2}%, rgba(193,96,74,0.12) 0%, transparent 60%)`,
              transition: 'background 0.3s ease',
            }"
          />
          <img src="/couple-bg2.png" class="absolute inset-0 w-full h-full object-cover" style="filter: brightness(0.85) saturate(0.9);" />
          <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(17,26,16,0.9) 0%, rgba(17,26,16,0.15) 55%, transparent 100%);"></div>
          <div class="absolute bottom-7 left-0 right-0 text-center">
            <div class="h-px w-10 mx-auto mb-2" style="background: linear-gradient(to right, transparent, #C1604A, transparent);"></div>
            <h2 class="text-2xl" style="font-family:'Georgia',serif; color:#C1604A; font-weight:300; letter-spacing:0.2em;">J & A</h2>
          </div>
        </div>
      </div>

      
      <div class="absolute top-[80vh] w-full text-center z-20 pointer-events-none animate-bounce">
        <p class="text-[9px] tracking-widest uppercase mb-2" style="color: rgba(168,150,126,0.5);">Scroll untuk melihat keajaiban</p>
        <UIcon name="mdi:chevron-double-down" class="w-5 h-5 mx-auto" style="color: rgba(74,124,111,0.4);" />
      </div>

      <div class="h-[100vh]" />

      
      <div class="w-full relative z-20 py-24">
        <div class="max-w-6xl mx-auto px-4">

          
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style="background: linear-gradient(to bottom, transparent, rgba(74,124,111,0.3) 10%, rgba(74,124,111,0.3) 90%, transparent);"></div>

          <div class="space-y-[35vh] md:space-y-[50vh]">

            
            <div class="reveal-item timeline-right">
              <div class="timeline-dot">
                <div class="dot-inner" style="background:#C1604A;"></div>
              </div>
              <div class="timeline-card" style="background: rgba(17,26,16,0.8); backdrop-filter: blur(20px); border: 1px solid rgba(74,124,111,0.2); box-shadow: 0 24px 60px rgba(0,0,0,0.5);">
                <div class="flex items-center gap-2 mb-4">
                  <UIcon name="mdi:church" class="w-5 h-5" style="color:#C1604A;" />
                  <p class="text-[9px] tracking-[0.5em] uppercase" style="color:#C1604A;">The Ceremony</p>
                </div>
                <h2 class="text-3xl md:text-4xl mb-3" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300;">Holy Matrimony</h2>
                <p class="text-sm mb-1" style="color:#A8967E;">Minggu, 12 Desember 2026</p>
                <p class="text-sm mb-6 leading-relaxed" style="color: rgba(168,150,126,0.7); font-weight:300;">
                  08.00 – 10.00 WIB<br>Gereja Katedral Jakarta
                </p>
                <div class="h-px mb-6" style="background: linear-gradient(to right, rgba(74,124,111,0.3), transparent);"></div>
                <div class="flex items-center gap-2 mb-4">
                  <UIcon name="mdi:party-popper" class="w-5 h-5" style="color:#C1604A;" />
                  <p class="text-[9px] tracking-[0.5em] uppercase" style="color:#C1604A;">The Reception</p>
                </div>
                <h2 class="text-3xl md:text-4xl mb-3" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300;">Wedding Party</h2>
                <p class="text-sm mb-1" style="color:#A8967E;">Minggu, 12 Desember 2026</p>
                <p class="text-sm mb-6 leading-relaxed" style="color: rgba(168,150,126,0.7); font-weight:300;">
                  18.00 – 21.00 WIB<br>Hotel Mulia Senayan
                </p>
                <a href="#" class="inline-flex items-center gap-2 text-[10px] uppercase font-semibold tracking-widest hover:opacity-80 transition-opacity" style="color:#4A7C6F;">
                  <UIcon name="mdi:google-maps" class="w-4 h-4" /> Buka Google Maps
                </a>
              </div>
            </div>

            
            <div class="reveal-item timeline-left">
              <div class="timeline-dot">
                <div class="dot-inner" style="background:#4A7C6F;"></div>
              </div>
              <div class="timeline-card" style="background: linear-gradient(135deg, rgba(74,124,111,0.1), rgba(17,26,16,0.7)); backdrop-filter: blur(20px); border: 1px solid rgba(74,124,111,0.25); box-shadow: 0 24px 60px rgba(0,0,0,0.5);">
                <div class="flex items-center gap-2 mb-4">
                  <UIcon name="mdi:gift-outline" class="w-5 h-5" style="color:#4A7C6F;" />
                  <p class="text-[9px] tracking-[0.5em] uppercase" style="color:#4A7C6F;">Tanda Kasih</p>
                </div>
                <h2 class="text-3xl md:text-4xl mb-3" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300;">Wedding Gift</h2>
                <p class="text-sm mb-6 leading-relaxed" style="color:#A8967E; font-weight:300;">
                  Kehadiran Anda adalah hadiah terindah bagi kami. Namun jika Anda ingin memberikan hadiah, silakan gunakan detail berikut.
                </p>
                <div class="p-5 rounded-2xl" style="background: rgba(10,18,10,0.5); border: 1px solid rgba(74,124,111,0.15);">
                  <p class="text-lg mb-1" style="font-family:'Georgia',serif; color:#F5EDD7;">BCA</p>
                  <p class="text-[9px] uppercase tracking-widest mb-2" style="color:#A8967E;">a.n Julian</p>
                  <p class="text-2xl font-mono tracking-widest mb-4" style="color:#C1604A;">1234 567 890</p>
                  <button class="w-full py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:opacity-80 transition-opacity" style="background: rgba(74,124,111,0.15); border: 1px solid rgba(74,124,111,0.3); color:#4A7C6F;">
                    <UIcon name="mdi:content-copy" class="inline w-3 h-3 mr-1" /> Salin Rekening
                  </button>
                </div>
              </div>
            </div>

            
            <div class="reveal-item timeline-right">
              <div class="timeline-dot">
                <div class="dot-inner" style="background:#C1604A;"></div>
              </div>
              <div class="timeline-card" style="background: linear-gradient(135deg, #C1604A, #A84A38); box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 50px rgba(193,96,74,0.15);">
                <div class="flex items-center gap-2 mb-4">
                  <UIcon name="mdi:calendar-check" class="w-5 h-5" style="color: rgba(245,237,215,0.7);" />
                  <p class="text-[9px] tracking-[0.5em] uppercase font-bold" style="color: rgba(245,237,215,0.6);">Kehadiran</p>
                </div>
                <h2 class="text-3xl md:text-4xl mb-6" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:400;">Form RSVP</h2>
                <form class="space-y-4" @submit.prevent="submitRsvp">
                  <div>
                    <label class="block text-[9px] font-bold tracking-widest uppercase mb-2" style="color: rgba(245,237,215,0.55);">Nama Lengkap</label>
                    <input v-model="rsvpName" type="text" placeholder="Nama Anda" class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors placeholder:opacity-40" style="background: rgba(245,237,215,0.1); border: 1px solid rgba(245,237,215,0.2); color:#F5EDD7;" required />
                  </div>
                  <div>
                    <label class="block text-[9px] font-bold tracking-widest uppercase mb-3" style="color: rgba(245,237,215,0.55);">Konfirmasi Kehadiran</label>
                    <div class="flex gap-3">
                      <label class="flex-1 flex items-center justify-center gap-1 py-3 rounded-xl cursor-pointer transition-all text-sm font-semibold"
                        :style="rsvpAttendance === 'yes' ? 'background:rgba(245,237,215,0.9); color:#C1604A; border:2px solid rgba(245,237,215,0.9);' : 'background:rgba(245,237,215,0.1); color:rgba(245,237,215,0.6); border:2px solid rgba(245,237,215,0.15);'">
                        <input type="radio" v-model="rsvpAttendance" value="yes" class="sr-only" />
                        <span v-if="rsvpAttendance === 'yes'">✓ </span><span>Hadir</span>
                      </label>
                      <label class="flex-1 flex items-center justify-center gap-1 py-3 rounded-xl cursor-pointer transition-all text-sm font-semibold"
                        :style="rsvpAttendance === 'no' ? 'background:rgba(245,237,215,0.9); color:#C1604A; border:2px solid rgba(245,237,215,0.9);' : 'background:rgba(245,237,215,0.1); color:rgba(245,237,215,0.6); border:2px solid rgba(245,237,215,0.15);'">
                        <input type="radio" v-model="rsvpAttendance" value="no" class="sr-only" />
                        <span v-if="rsvpAttendance === 'no'">✓ </span><span>Tidak Hadir</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[9px] font-bold tracking-widest uppercase mb-2" style="color: rgba(245,237,215,0.55);">Ucapan <span style="font-weight:400; text-transform:none; letter-spacing:0;">(opsional)</span></label>
                    <textarea v-model="rsvpMessage" rows="3" placeholder="Tuliskan ucapan untuk pengantin..." class="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors placeholder:opacity-40" style="background: rgba(245,237,215,0.1); border: 1px solid rgba(245,237,215,0.2); color:#F5EDD7;"></textarea>
                  </div>
                  <div v-if="rsvpSubmitted" class="py-3 rounded-xl text-center text-sm font-semibold" style="background:rgba(245,237,215,0.15); color:#F5EDD7;">🎉 Terima kasih! Konfirmasi berhasil dikirim.</div>
                  <button v-else type="submit" class="w-full py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity" style="background: rgba(17,26,16,0.7); color:#F5EDD7;">Kirim Konfirmasi</button>
                </form>
              </div>
            </div>

            
            <div class="reveal-item timeline-left">
              <div class="timeline-dot">
                <div class="dot-inner" style="background:#4A7C6F;"></div>
              </div>
              <div class="timeline-card" style="background: rgba(17,26,16,0.8); backdrop-filter: blur(20px); border: 1px solid rgba(74,124,111,0.2); box-shadow: 0 24px 60px rgba(0,0,0,0.5);">
                <div class="flex items-center gap-2 mb-4">
                  <UIcon name="mdi:message-heart-outline" class="w-5 h-5" style="color:#4A7C6F;" />
                  <p class="text-[9px] tracking-[0.5em] uppercase" style="color:#4A7C6F;">Wishes</p>
                </div>
                <h2 class="text-3xl md:text-4xl mb-6" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300;">Ucapan & Doa</h2>
                <div class="space-y-3 max-h-72 overflow-y-auto pr-1 scrollbar-none">
                  <transition-group name="wish-slide" tag="div" class="space-y-3">
                    <div v-for="(w, i) in wishes" :key="i" class="p-4 rounded-2xl" style="background: rgba(74,124,111,0.07); border: 1px solid rgba(74,124,111,0.15);">
                      <div class="flex items-center justify-between mb-1">
                        <p class="font-semibold text-sm" style="color:#F5EDD7;">{{ w.name }}</p>
                        <span class="text-[8px] px-2 py-1 rounded-full font-bold tracking-widest uppercase"
                          :style="w.attendance ? 'background:rgba(74,124,111,0.2); color:#4A7C6F;' : 'background:rgba(255,255,255,0.05); color:rgba(245,237,215,0.35);'"
                        >{{ w.attendance ? '✓ Hadir' : '✗ Tidak' }}</span>
                      </div>
                      <p class="text-sm leading-relaxed" style="color:#A8967E; font-weight:300;">{{ w.msg }}</p>
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>

          </div>
        </div>

        
        <div class="max-w-6xl mx-auto px-4 pt-[28vh] pb-[15vh] reveal-item">
          <div class="text-center mb-12">
            <p class="text-[9px] tracking-[0.6em] uppercase mb-3" style="color:#C1604A;">Gallery</p>
            <div class="flex items-center gap-4 justify-center">
              <div class="h-px w-12" style="background: linear-gradient(to right, transparent, #4A7C6F);"></div>
              <h2 class="text-4xl" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300;">Our Memories</h2>
              <div class="h-px w-12" style="background: linear-gradient(to left, transparent, #4A7C6F);"></div>
            </div>
          </div>
          <div class="w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-none">
            <div class="flex md:grid md:grid-cols-4 gap-4 px-4 md:px-0 w-max md:w-full">
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-square rounded-[2rem] overflow-hidden md:mt-16 hover:opacity-100 transition-opacity" style="opacity:0.8; border: 1px solid rgba(74,124,111,0.15);">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.8) brightness(0.9);" >
              </div>
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-[3/4] rounded-[2rem] overflow-hidden hover:opacity-100 transition-opacity" style="opacity:0.8; border: 1px solid rgba(74,124,111,0.15);">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.8) brightness(0.9);" >
              </div>
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-square rounded-[2rem] overflow-hidden md:mt-28 hover:opacity-100 transition-opacity" style="opacity:0.8; border: 1px solid rgba(74,124,111,0.15);">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.8) brightness(0.9);" >
              </div>
              <div class="snap-center flex-shrink-0 w-64 md:w-auto aspect-video rounded-[2rem] overflow-hidden hover:opacity-100 transition-opacity" style="opacity:0.8; border: 1px solid rgba(74,124,111,0.15);">
                <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400" class="w-full h-full object-cover" style="filter:saturate(0.8) brightness(0.9);" >
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <footer class="py-24 text-center relative z-50" style="background: #0D1510; border-top: 1px solid rgba(74,124,111,0.12);">
        <div class="h-px w-28 mx-auto mb-16" style="background: linear-gradient(to right, transparent, #C1604A, transparent);"></div>
        <h2 class="text-3xl mb-4" style="font-family:'Georgia',serif; color:#F5EDD7; font-weight:300; font-style:italic; line-height:1.6;">Terima Kasih Atas Doa<br>& Kehadiran Anda.</h2>
        <p class="text-sm mb-12" style="color:#A8967E; font-style:italic;">— Julian & Alisa —</p>
        <div class="flex justify-center gap-3 mb-8">
          <a href="https://instagram.com/keevia.id" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110"
            style="background: rgba(74,124,111,0.1); border: 1px solid rgba(74,124,111,0.25);">
            <UIcon name="mdi:instagram" class="w-5 h-5" style="color:#4A7C6F;" />
          </a>
        </div>
        <p class="text-[9px] tracking-widest uppercase" style="color: rgba(168,150,126,0.35);">© 2026 Keevia.id — All Rights Reserved</p>
      </footer>
    </div>
  </div>
</template>

<style>

.fade-cover-enter-active, .fade-cover-leave-active { transition: opacity 1.2s ease; }
.fade-cover-enter-from, .fade-cover-leave-to { opacity: 0; }


@keyframes leafFall {
  0%   { transform: translateY(-20px) rotate(0deg) translateX(0px); opacity: 0; }
  10%  { opacity: 1; }
  50%  { transform: translateY(50vh) rotate(180deg) translateX(20px); }
  90%  { opacity: 0.7; }
  100% { transform: translateY(115vh) rotate(400deg) translateX(-15px); opacity: 0; }
}
.leaf, .leaf-slow {
  animation: leafFall ease-in-out infinite;
  user-select: none;
  pointer-events: none;
  line-height: 1;
}
.leaf { animation-timing-function: ease-in-out; }
.leaf-slow { animation-timing-function: ease-in-out; }


@keyframes revealFade {
  from { opacity: 0; transform: translateY(45px); }
  to   { opacity: 1; transform: translateY(0); }
}
.reveal-item {
  opacity: 0;
  animation: revealFade 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-play-state: paused;
}
.reveal-item.visible { animation-play-state: running; }


.timeline-right, .timeline-left {
  position: relative;
  display: flex;
  align-items: flex-start;
}


.timeline-dot {
  display: none;
}
@media (min-width: 768px) {
  .timeline-dot {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 2rem;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(17,26,16,0.9);
    border: 2px solid rgba(74,124,111,0.4);
    z-index: 10;
  }
  .dot-inner {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .timeline-right { justify-content: flex-end; }
  .timeline-left  { justify-content: flex-start; }
  .timeline-card  { width: 45%; }
}

.timeline-card {
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 2rem;
}


.wish-slide-enter-active { transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
.wish-slide-enter-from   { opacity: 0; transform: translateY(-14px); }


.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
