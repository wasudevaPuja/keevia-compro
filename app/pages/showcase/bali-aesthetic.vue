<template>
  <div class="flex flex-col w-full min-h-[100dvh] bg-[#fdfaf5] text-[#4a3f35] font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
    
    <!-- Top Progress Bar -->
    <div 
      class="fixed top-0 left-0 h-1 bg-amber-400/50 z-[60] transition-all duration-300 pointer-events-none"
      :style="{ width: scrollProgress + '%' }"
    />

    <!-- Navigation -->
    <NuxtLink
      to="/"
      class="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white/40 backdrop-blur-xl rounded-full border border-white/40 text-[#4a3f35]/80 hover:text-[#4a3f35] hover:bg-white/60 hover:scale-105 active:scale-95 transition-all duration-300 font-medium text-xs tracking-widest shadow-sm group"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      BACK
    </NuxtLink>

    <!-- Music Toggle (Simulated via provide/inject) -->
    <button
      @click="audioControl?.toggleAudio()"
      class="fixed top-6 right-6 z-50 flex items-center justify-center w-10 h-10 bg-white/40 backdrop-blur-xl rounded-full border border-white/40 text-[#4a3f35]/80 hover:text-[#4a3f35] transition-all hover:rotate-12 group shadow-sm"
    >
      <UIcon 
        :name="audioControl?.isPlaying.value ? 'mdi:volume-high' : 'mdi:volume-off'" 
        class="w-5 h-5" 
      />
    </button>

    <!-- 1. HERO SECTION -->
    <section class="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <!-- Background Image with Parallax & Ken Burns Effect -->
      <NuxtImg
        src="/img/bali_aesthetic_hero.png"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] linear scale-110"
        :class="{ 'scale-100': isOpening }"
        format="webp"
        quality="90"
      />
      
      <!-- Sophisticated Overlay: Deepened for better contrast -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#fdfaf5]" />
      <div class="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <div 
          class="scroll-animate opacity-0 translate-y-10 duration-1000 delay-300"
          :class="{ 'opacity-100 translate-y-0': hasMounted }"
        >
          <span class="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.5em] uppercase font-bold text-white mb-10 shadow-sm">
            The Wedding Celebration
          </span>
          
          <h1 class="text-7xl md:text-9xl font-serif font-light tracking-tight leading-[0.9] mb-8 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Romeo <br class="md:hidden">
            <span class="italic text-amber-300 font-serif block h-6 md:h-12 text-5xl md:text-6xl my-6 md:my-8 drop-shadow-sm">&</span> 
            <br class="md:hidden"> Juliet
          </h1>

          <p class="text-xs md:text-sm tracking-[0.4em] font-medium uppercase text-white/90 mb-20 drop-shadow-md">
            Saturday, 25 October 2025
          </p>

          <!-- Invitation Card -->
          <div 
            class="relative w-full max-w-sm mx-auto transition-all duration-1000"
            :class="isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'"
          >
            <div class="p-10 rounded-[40px] bg-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_32px_64px_-16px_rgba(74,63,53,0.15)] ring-1 ring-white/20 overflow-hidden group">
              <!-- Decorative Motif -->
              <NuxtImg 
                src="/img/bali_motif.png" 
                class="absolute -top-10 -right-10 w-40 h-40 opacity-5 group-hover:rotate-12 transition-transform duration-[3s]" 
              />
              
              <p class="text-[10px] tracking-[0.4em] uppercase font-bold text-[#4a3f35]/40 mb-4">Dear Honored Guest</p>
              <h3 class="text-2xl font-serif text-[#4a3f35] mb-6 tracking-wide">{{ guestName }}</h3>
              
              <button
                @click="openInvitation"
                class="relative overflow-hidden w-full px-8 py-4 bg-[#4a3f35] text-white rounded-2xl hover:bg-[#5a4f45] transition-all font-semibold tracking-[0.2em] text-[10px] group shadow-xl active:scale-95"
              >
                <span class="relative z-10">OPEN INVITATION</span>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>

          <!-- Scroll Indicator -->
          <div 
            v-if="isOpen"
            class="animate-bounce mt-10"
          >
            <UIcon name="mdi:chevron-down" class="w-8 h-8 text-[#4a3f35]/30" />
          </div>
        </div>
      </div>
    </section>

    <div v-if="isOpen" class="w-full relative">
      <!-- 2. OPENING MESSAGE -->
      <section class="w-full py-32 px-6 flex flex-col items-center">
        <div class="max-w-3xl text-center scroll-animate opacity-0 translate-y-10 duration-1000">
          <NuxtImg src="/img/bali_motif.png" class="w-20 mx-auto mb-10 opacity-60" />
          <h2 class="text-3xl md:text-4xl font-serif font-light text-[#4a3f35] mb-8 italic">Om Swastiastu</h2>
          <p class="text-base md:text-lg font-light leading-relaxed text-[#4a3f35]/80 font-serif">
            With the grace of God, we joyfully invite you to join us as we celebrate the union of our lives and families.
          </p>
        </div>
      </section>

      <!-- 3. THE COUPLE -->
      <section class="w-full py-24 px-6 md:px-12 bg-white/50 relative">
        <!-- Floating Motifs -->
        <NuxtImg src="/img/bali_motif.png" class="absolute top-0 left-10 w-32 opacity-[0.03] rotate-12 pointer-events-none" />
        <NuxtImg src="/img/bali_motif.png" class="absolute bottom-10 right-10 w-48 opacity-[0.03] -rotate-45 pointer-events-none" />

        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-2 gap-20 items-center">
            
            <!-- Groom -->
            <div class="scroll-animate opacity-0 -translate-x-10 duration-[1200ms] flex flex-col items-center md:items-end text-center md:text-right">
              <div class="relative w-full aspect-[4/5] rounded-[60px] overflow-hidden mb-10 shadow-2xl group border-[12px] border-white ring-1 ring-[#4a3f35]/5">
                <NuxtImg 
                  src="/img/bali_aesthetic_hero.png" 
                  class="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#4a3f35]/40 to-transparent" />
              </div>
              <span class="text-[10px] tracking-[0.5em] uppercase font-bold text-amber-600/60 mb-3">The Groom</span>
              <h2 class="text-6xl font-serif font-light text-[#4a3f35] mb-4">Romeo</h2>
              <p class="text-sm font-light text-[#4a3f35]/60 max-w-sm md:ml-auto">
                The beloved son of <br/>
                <strong class="text-[#4a3f35] font-semibold">Mr. Wayan Romeo Sr. & Mrs. Ni Luh Juliet</strong>
              </p>
            </div>

            <!-- Bride -->
            <div class="scroll-animate opacity-0 translate-x-10 duration-[1200ms] flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-40">
              <div class="relative w-full aspect-[4/5] rounded-[60px] overflow-hidden mb-10 shadow-2xl group border-[12px] border-white ring-1 ring-[#4a3f35]/5 order-first md:order-none">
                <NuxtImg 
                  src="/img/bali_aesthetic_hero.png" 
                  class="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#4a3f35]/40 to-transparent" />
              </div>
              <span class="text-[10px] tracking-[0.5em] uppercase font-bold text-amber-600/60 mb-3">The Bride</span>
              <h2 class="text-6xl font-serif font-light text-[#4a3f35] mb-4">Juliet</h2>
              <p class="text-sm font-light text-[#4a3f35]/60 max-w-sm">
                The beloved daughter of <br/>
                <strong class="text-[#4a3f35] font-semibold">Mr. Gusti Juliet Sr. & Mrs. Ketut Romeo</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. QUOTE -->
      <section class="w-full py-32 px-6 flex justify-center bg-[#fdfaf5]">
        <div class="max-w-3xl text-center scroll-animate opacity-0 scale-95 duration-1000">
           <p class="text-xl md:text-2xl font-serif italic text-[#4a3f35]/90 leading-relaxed mb-6">
            "Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair naptrbhih, modamanau sve grhe."
          </p>
          <div class="w-12 h-[1px] bg-amber-400 mx-auto mb-6" />
          <p class="text-[11px] tracking-[0.2em] font-bold uppercase text-amber-600/70">Rg Veda X.85.42</p>
        </div>
      </section>

      <!-- 5. EVENTS -->
      <section class="w-full py-24 px-6 md:px-12 relative overflow-hidden">
        <div class="max-w-6xl mx-auto relative z-10">
          <div class="text-center mb-20 scroll-animate opacity-0 -translate-y-10 duration-1000">
            <span class="text-[10px] tracking-[0.4em] uppercase font-bold text-amber-600/60 mb-4 block underline underline-offset-8">Information</span>
            <h2 class="text-5xl md:text-6xl font-serif font-light text-[#4a3f35]">The Celebration</h2>
          </div>

          <!-- Countdown -->
          <div class="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-20 scroll-animate opacity-0 scale-95 duration-1000 delay-200">
            <div 
              v-for="(val, unit) in countdown" 
              :key="unit"
              class="flex flex-col items-center p-6 bg-white rounded-[24px] shadow-sm border border-[#4a3f35]/5 group hover:shadow-xl transition-all"
            >
              <span class="text-4xl md:text-6xl font-serif font-light text-[#4a3f35] group-hover:text-amber-600 transition-colors">{{ val }}</span>
              <span class="text-[9px] tracking-widest uppercase font-bold text-[#4a3f35]/40 mt-3">{{ unit }}</span>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 items-stretch">
            <!-- Event 1 -->
             <div class="scroll-animate opacity-0 translate-y-10 duration-1000 delay-300 p-12 bg-white rounded-[48px] border border-[#4a3f35]/5 shadow-sm hover:shadow-2xl transition-all group">
                <div class="flex items-center gap-4 mb-10">
                  <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 group-hover:rotate-12 transition-transform">
                    <UIcon name="mdi:calendar-heart" class="w-6 h-6" />
                  </div>
                  <h3 class="text-3xl font-serif text-[#4a3f35]">Pawiwahan</h3>
                </div>
                
                <div class="space-y-6 mb-12">
                  <div class="flex items-start gap-4">
                    <UIcon name="mdi:clock-outline" class="w-5 h-5 text-amber-600/50 mt-0.5" />
                    <div>
                      <p class="text-sm font-bold text-[#4a3f35]">Saturday, 25 Oct 2025</p>
                      <p class="text-xs text-[#4a3f35]/60 mt-1">08.00 AM - 11.00 AM WITA</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <UIcon name="mdi:map-marker-outline" class="w-5 h-5 text-amber-600/50 mt-0.5" />
                    <div>
                      <p class="text-sm font-bold text-[#4a3f35]">The Aman Bali Resort</p>
                      <p class="text-xs text-[#4a3f35]/60 mt-1 leading-relaxed italic">Jl. Raya Nusa Dua No. 88, Badung, Bali</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="#" 
                  class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4a3f35]/5 text-[#4a3f35] rounded-xl font-bold tracking-[0.15em] text-[10px] hover:bg-[#4a3f35] hover:text-white transition-all w-full justify-center group/btn"
                >
                  MAP DIRECTION
                  <UIcon name="mdi:arrow-top-right" class="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
             </div>

             <!-- Event 2 -->
             <div class="scroll-animate opacity-0 translate-y-10 duration-1000 delay-400 p-12 bg-white rounded-[48px] border border-[#4a3f35]/5 shadow-sm hover:shadow-2xl transition-all group">
                <div class="flex items-center gap-4 mb-10">
                  <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 group-hover:rotate-12 transition-transform">
                    <UIcon name="mdi:glass-wine" class="w-6 h-6" />
                  </div>
                  <h3 class="text-3xl font-serif text-[#4a3f35]">Reception</h3>
                </div>
                
                <div class="space-y-6 mb-12">
                  <div class="flex items-start gap-4">
                    <UIcon name="mdi:clock-outline" class="w-5 h-5 text-amber-600/50 mt-0.5" />
                    <div>
                      <p class="text-sm font-bold text-[#4a3f35]">Saturday, 25 Oct 2025</p>
                      <p class="text-xs text-[#4a3f35]/60 mt-1">17.00 PM - 22.00 PM WITA</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <UIcon name="mdi:map-marker-outline" class="w-5 h-5 text-amber-600/50 mt-0.5" />
                    <div>
                      <p class="text-sm font-bold text-[#4a3f35]">The Royal Water Palace</p>
                      <p class="text-xs text-[#4a3f35]/60 mt-1 leading-relaxed italic">Uluwatu Cliffs, Pecatu, Bali</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="#" 
                  class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4a3f35]/5 text-[#4a3f35] rounded-xl font-bold tracking-[0.15em] text-[10px] hover:bg-[#4a3f35] hover:text-white transition-all w-full justify-center group/btn"
                >
                  MAP DIRECTION
                  <UIcon name="mdi:arrow-top-right" class="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
             </div>
          </div>
        </div>
      </section>

      <!-- 6. RSVP FORM -->
      <section class="w-full py-32 px-6 flex justify-center overflow-hidden">
        <div class="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center bg-white rounded-[60px] p-8 md:p-16 shadow-2xl border border-[#4a3f35]/5">
          <div class="scroll-animate opacity-0 -translate-x-10 duration-1000">
            <h2 class="text-4xl font-serif text-[#4a3f35] mb-6">Will You Join Us?</h2>
            <p class="text-sm text-[#4a3f35]/60 leading-relaxed mb-10">
              Please RSVP by completing the form so we can prepare for your presence at our celebration.
            </p>
            <form @submit.prevent class="space-y-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                class="w-full px-6 py-4 rounded-2xl bg-[#fdfaf5] border-none focus:ring-2 focus:ring-amber-400 outline-none text-sm transition-all"
              />
              <div class="flex gap-4">
                <button class="flex-1 py-4 px-6 rounded-2xl bg-amber-100/50 text-[#4a3f35] text-xs font-bold border border-amber-200 hover:bg-amber-100 transition-all">ATTENDING</button>
                <button class="flex-1 py-4 px-6 rounded-2xl bg-[#fdfaf5] text-[#4a3f35]/40 text-xs font-bold hover:bg-[#eee] transition-all">UNABLE TO ATTEND</button>
              </div>
              <textarea 
                placeholder="Your Beautiful Wishes" 
                rows="4" 
                class="w-full px-6 py-4 rounded-2xl bg-[#fdfaf5] border-none focus:ring-2 focus:ring-amber-400 outline-none text-sm transition-all resize-none"
              ></textarea>
              <button class="w-full py-4 bg-[#4a3f35] text-white rounded-2xl font-bold tracking-[0.2em] text-[10px] shadow-lg hover:shadow-2xl transition-all">SEND RSVP</button>
            </form>
          </div>
          <div class="scroll-animate opacity-0 translate-x-10 duration-[1200ms] hidden md:block h-full min-h-[500px]">
            <NuxtImg src="/img/bali_aesthetic_hero.png" class="w-full h-full object-cover rounded-[40px] shadow-inner" />
          </div>
        </div>
      </section>

      <!-- 7. GIFT -->
      <section class="w-full py-24 px-6 text-center">
         <div class="max-w-3xl mx-auto scroll-animate opacity-0 translate-y-10 duration-1000">
            <span class="text-[10px] tracking-[0.4em] uppercase font-bold text-amber-600/60 mb-4 block">Wedding Gift</span>
            <h2 class="text-5xl font-serif text-[#4a3f35] mb-6">Token of Love</h2>
            <p class="text-sm text-[#4a3f35]/60 mb-12">Your presence is enough for us, but if you wish to give a token of love, you may do so through the gift card below.</p>
            
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="p-10 rounded-[40px] bg-white shadow-xl flex flex-col items-center group">
                <UIcon name="mdi:bank-outline" class="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
                <p class="text-xs font-bold text-[#4a3f35]/40 tracking-widest mb-1">BCA - ROMEO</p>
                <p class="text-2xl font-mono text-[#4a3f35] mb-8 tracking-tighter">123.456.789</p>
                <button class="px-8 py-3 bg-[#4a3f35]/5 rounded-xl text-[10px] font-bold tracking-widest hover:bg-[#4a3f35] hover:text-white transition-all">COPY ACCOUNT</button>
              </div>
              <div class="p-10 rounded-[40px] bg-white shadow-xl flex flex-col items-center group">
                <UIcon name="mdi:home-heart" class="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
                <p class="text-xs font-bold text-[#4a3f35]/40 tracking-widest mb-1">SHIPPING ADDRESS</p>
                <p class="text-sm font-medium text-[#4a3f35] mb-8 leading-relaxed max-w-[150px]">Romeo's Home, Jimbaran, South Kuta, Bali</p>
                <button class="px-8 py-3 bg-[#4a3f35]/5 rounded-xl text-[10px] font-bold tracking-widest hover:bg-[#4a3f35] hover:text-white transition-all uppercase">GIFT REGISTRY</button>
              </div>
            </div>
         </div>
      </section>

      <!-- 8. GALLERY -->
      <section class="w-full py-32 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-20 scroll-animate opacity-0 -translate-y-10 duration-[1200ms]">
            <span class="text-[10px] tracking-[0.5em] uppercase font-bold text-amber-600/60 mb-4 block">Capturing Moments</span>
            <h2 class="text-5xl md:text-6xl font-serif font-light text-[#4a3f35]">A Journey in Love</h2>
          </div>

          <div class="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 scroll-animate opacity-0 translate-y-20 duration-1000">
            <div 
              v-for="(img, i) in galleryImages" 
              :key="i"
              class="relative group cursor-pointer overflow-hidden rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700 bg-white"
              @click="openLightbox(img)"
            >
              <NuxtImg 
                :src="img" 
                class="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
                format="webp"
              />
              <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                  <UIcon name="mdi:magnify-plus-outline" class="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- LIGHTBOX -->
      <Teleport to="body">
        <div 
          v-if="activeImage" 
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          @click="activeImage = null"
        >
          <button class="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
            <UIcon name="mdi:close" class="w-10 h-10" />
          </button>
          <NuxtImg 
            :src="activeImage" 
            class="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500" 
          />
        </div>
      </Teleport>

      <!-- 9. FOOTER -->
      <section class="w-full py-32 px-6 bg-white text-center flex flex-col items-center">
        <div class="scroll-animate opacity-0 translate-y-10 duration-1000">
           <NuxtImg src="/img/bali_motif.png" class="w-24 opacity-20 mb-12" />
           <p class="text-sm font-serif italic text-[#4a3f35]/60 mb-10">We look forward to seeing you at our big day.</p>
           <h2 class="text-5xl font-serif text-[#4a3f35] mb-20 tracking-tighter">Romeo & Juliet</h2>
           
           <div class="flex flex-col items-center gap-6">
             <a href="https://keevia.id" class="px-8 py-4 bg-[#4a3f35] text-white rounded-full text-[10px] font-bold tracking-[0.3em] flex items-center gap-2 group shadow-xl">
               CREATE YOURS
               <UIcon name="mdi:sparkles" class="text-amber-400 group-hover:rotate-45 transition-transform" />
             </a>
             <p class="text-[9px] tracking-[0.3em] uppercase text-[#4a3f35]/30">© 2026 KEEVIA.ID</p>
           </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, inject, nextTick, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const guestName = computed(() => (route.query.to as string) || 'Tamu Undangan')
const audioControl = inject('audioControl') as any

const hasMounted = ref(false)
const isOpening = ref(false)
const isOpen = ref(false)
const scrollProgress = ref(0)
const activeImage = ref<string | null>(null)

const galleryImages = [
  '/img/bali_aesthetic_hero.png',
  '/img/bali_gallery_1.png',
  '/img/bali_gallery_2.png',
  '/img/bali_aesthetic_hero.png',
  '/img/bali_gallery_1.png',
  '/img/bali_gallery_2.png'
]

const openLightbox = (imgPath: string) => {
  activeImage.value = imgPath
}

const countdown = ref({
  DAYS: '00',
  HOURS: '00',
  MINUTES: '00',
  SECONDS: '00'
})

const targetDate = new Date('October 25, 2025 08:00:00').getTime()
let timerInterval: any

const startTimer = () => {
  timerInterval = setInterval(() => {
    const now = new Date().getTime()
    const dist = targetDate - now
    if (dist < 0) {
      clearInterval(timerInterval)
      return
    }
    countdown.value.DAYS = String(Math.floor(dist / (1000 * 60 * 60 * 24))).padStart(2, '0')
    countdown.value.HOURS = String(Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
    countdown.value.MINUTES = String(Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    countdown.value.SECONDS = String(Math.floor((dist % (1000 * 60)) / 1000)).padStart(2, '0')
  }, 1000)
}

const openInvitation = () => {
  isOpening.value = true
  setTimeout(() => {
    isOpen.value = true
    startTimer()
    if (audioControl && !audioControl.isPlaying.value) {
      audioControl.toggleAudio()
    }
    nextTick(() => {
      initScrollAnimations()
    })
  }, 100)
}

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10', '-translate-y-10', 'translate-x-10', '-translate-x-10', 'scale-95')
        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))
}

const updateScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

onMounted(() => {
  hasMounted.value = true
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  if (timerInterval) clearInterval(timerInterval)
})

useSeoMeta({
  title: 'Bali Aesthetic Theme - KEEVIA.ID',
  description: 'Premium Tropical Balinese wedding invitation with modern aesthetic.',
  ogImage: '/img/bali_aesthetic_hero.png'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@100;300;400;500;600;700&display=swap');

.font-serif {
  font-family: 'Cormorant Garamond', serif;
}

.font-sans {
  font-family: 'Montserrat', sans-serif;
}

.scroll-animate {
  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Simulated opening animation */
@keyframes kenburns {
  0% { transform: scale(1.1); }
  100% { transform: scale(1.2); }
}
</style>
