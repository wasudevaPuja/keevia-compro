<template>
  <div class="w-full min-h-[100dvh] overflow-x-hidden" style="background: #f8f4f0; color: #1a1a1a; font-family: 'Lora', 'Georgia', serif;">

    <NuxtLink
      to="/"
      class="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium tracking-wide transition-all hover:scale-105"
      style="background: rgba(255,255,255,0.8); border-color: rgba(14,116,144,0.3); color: #0e7490; backdrop-filter: blur(12px);"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4" /> Kembali
    </NuxtLink>

    <!-- COVER: Full-screen centered on light sandy background -->
    <section class="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <!-- Sandy/ocean gradient bg -->
      <div class="absolute inset-0" style="background: linear-gradient(160deg, #e0f4f7 0%, #b3e5ed 30%, #7dd3e0 60%, #0e7490 100%);" />
      <!-- Wave top decoration -->
      <div class="absolute top-0 left-0 right-0 h-24 pointer-events-none wave-cover-top" />
      <!-- Wave bottom decoration -->
      <div class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none wave-cover-bottom" />

      <!-- Floating shell decorations -->
      <div class="absolute top-1/4 left-8 w-16 h-16 rounded-full opacity-20" style="background: rgba(255,255,255,0.4);" />
      <div class="absolute bottom-1/3 right-12 w-10 h-10 rounded-full opacity-20" style="background: rgba(255,255,255,0.4);" />

      <div class="relative z-10 flex flex-col items-center text-center px-6">
        <div class="mb-4 flex items-center gap-3">
          <div class="w-12 h-px" style="background: rgba(255,255,255,0.6);" />
          <p class="text-xs tracking-[0.4em] uppercase" style="color: rgb(26, 74, 90);">{{ t('weddingOf') }}</p>
          <div class="w-12 h-px" style="background: rgba(255,255,255,0.6);" />
        </div>

        <h1 class="text-6xl md:text-8xl font-bold italic leading-tight mb-3 color: rgb(26, 74, 90); drop-shadow-lg">
          Romeo<br><span class="font-light not-italic text-5xl md:text-6xl" style="color: rgb(26, 74, 90);">&amp; Juliet</span>
        </h1>

        <p class="text-xs tracking-[0.35em] uppercase mb-10" style="color: rgb(26, 74, 90);">{{ t('dateFull') }}</p>

        <!-- Guest card -->
        <template v-if="!isOpen">
          <div class="w-full max-w-sm rounded-3xl p-6 text-center" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.4);">
            <p class="text-[10px] tracking-[0.3em] uppercase mb-1" style="color: rgb(26, 74, 90);">{{ t('toYth') }}</p>
            <p class="text-xl font-bold color: rgb(26, 74, 90); mb-1">{{ guestName }}</p>
            <p class="text-xs leading-relaxed mb-5" style="color: rgb(26, 74, 90);">{{ t('openingMsg') }}</p>
            <button
              class="w-full py-3 rounded-2xl text-xs font-bold tracking-[0.3em] uppercase transition-all hover:scale-[1.02] cursor-pointer"
              style="background: white; color: #0e7490;"
              @click="openInvitation"
            >{{ t('openBtn') }}</button>
          </div>
        </template>
        <template v-else>
          <div class="w-full max-w-sm rounded-3xl p-6 text-center" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.4);">
            <p class="text-sm italic leading-relaxed mb-3 color: rgb(26, 74, 90);">{{ t('bibleQuote') }}</p>
            <p class="text-xs tracking-wide" style="color: rgb(26, 74, 90);">{{ t('bibleVerse') }}</p>
          </div>
        </template>
      </div>

      <div v-if="isOpen" class="absolute bottom-8 flex flex-col items-center gap-1" style="color: rgba(255,255,255,0.5);">
        <span class="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <UIcon name="mdi:chevron-double-down" class="w-5 h-5 animate-bounce" />
      </div>
    </section>

    <!-- Content after open -->
    <div v-if="isOpen" style="background: #f8f4f0;">

      <!-- COUPLE: Wide photo cards with ocean-colored overlays, side-by-side full width -->
      <section class="w-full" style="background: #f8f4f0;">
        <div class="grid md:grid-cols-2">
          <!-- Groom -->
          <div class="relative h-[70vh] overflow-hidden group">
            <div class="absolute inset-0" style="background: linear-gradient(135deg, #0e7490, #0891b2);" />
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3), transparent);" />
            <div class="absolute inset-0 flex flex-col justify-end p-10">
              <div class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 text-white">
                <p class="text-[10px] tracking-[0.4em] uppercase mb-4" style="color: rgba(255,255,255,0.6);">{{ t('theGroom') }}</p>
                <h2 class="text-5xl font-bold italic mb-1">Romeo</h2>
                <h3 class="text-2xl font-light mb-6" style="color: rgba(255,255,255,0.7);">Molen</h3>
                <p class="text-sm mb-1" style="color: rgba(255,255,255,0.5);">{{ t('sonOf') }}</p>
                <p class="font-bold text-white mb-6">{{ t('parentsGroom') }}</p>
                <a href="#" class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all hover:bg-white/10" style="border: 1px solid rgba(255,255,255,0.3); color: white;">
                  <UIcon name="mdi:instagram" class="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
        <!-- Wave divider right edge -->
        <div class="absolute right-0 top-0 bottom-0 w-8 hidden md:block wave-couple-right" style="z-index: 5;" />
          </div>
          <!-- Bride -->
          <div class="relative h-[70vh] overflow-hidden group">
            <div class="absolute inset-0" style="background: linear-gradient(135deg, #0891b2, #06b6d4);" />
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3), transparent);" />
            <div class="absolute inset-0 flex flex-col justify-end p-10 items-end text-right">
              <div class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 text-white">
                <p class="text-[10px] tracking-[0.4em] uppercase mb-4" style="color: rgba(255,255,255,0.6);">{{ t('theBride') }}</p>
                <h2 class="text-5xl font-bold italic mb-1">Juliet</h2>
                <h3 class="text-2xl font-light mb-6" style="color: rgba(255,255,255,0.7);">Juliet</h3>
                <p class="text-sm mb-1" style="color: rgba(255,255,255,0.5);">{{ t('daughterOf') }}</p>
                <p class="font-bold text-white mb-6">{{ t('parentsGroom') }}</p>
                <a href="#" class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all hover:bg-white/10" style="border: 1px solid rgba(255,255,255,0.3); color: white;">
                  <UIcon name="mdi:instagram" class="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Wave bottom of couple section -->
        <div class="w-full h-16 wave-couple-bottom" style="margin-top: -1px;" />
      </section>

      <!-- LOVE STORY: Centered timeline on sandy bg -->
      <section class="w-full py-24 px-6" style="background: #f8f4f0;">
        <div class="max-w-2xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 text-center mb-16">
            <p class="text-xs tracking-[0.4em] uppercase mb-2" style="color: #0e7490;">{{ t('journeySub') }}</p>
            <h2 class="text-4xl md:text-5xl font-bold italic" style="color: #1a4a5a;">{{ t('journeyTitle') }}</h2>
          </div>
          <!-- Centered vertical timeline -->
          <div class="relative">
            <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" style="background: linear-gradient(to bottom, #7dd3e0, #0e7490, #7dd3e0);" />
            <div class="space-y-12">
              <div v-for="(ch, i) in chapters" :key="i" class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 relative flex" :class="i % 2 === 0 ? 'justify-start' : 'justify-end'">
                <!-- Dot -->
                <div class="absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full border-2 z-10" style="background: white; border-color: #0e7490;" />
                <!-- Card -->
                <div class="w-[45%] rounded-2xl p-5" :class="i % 2 === 0 ? 'mr-auto' : 'ml-auto'" style="background: white; box-shadow: 0 4px 20px rgba(14,116,144,0.08);">
                  <span class="inline-block text-[10px] tracking-widest uppercase mb-2 px-3 py-1 rounded-full" style="background: rgba(14,116,144,0.08); color: #0e7490;">{{ ch.date }}</span>
                  <h3 class="text-base font-bold mb-2" style="color: #1a4a5a;">{{ ch.title }}</h3>
                  <p class="text-xs leading-relaxed" style="color: rgba(26,74,90,0.6);">{{ ch.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WAVE SEPARATOR: ocean teal -->
      <div class="w-full h-24 wave-in-teal" />

      <!-- SAVE THE DATE: Ocean teal BG with postcard style -->
      <section class="w-full py-24 px-6" style="background: #0e7490;">
        <div class="max-w-3xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate scale-95 duration-700 rounded-3xl overflow-hidden" style="background: white; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
            <!-- Postcard top colored strip -->
            <div class="h-3" style="background: linear-gradient(90deg, #0e7490, #06b6d4, #7dd3fc, #06b6d4, #0e7490);" />
            <div class="p-10 text-center">
              <p class="text-[10px] tracking-[0.4em] uppercase mb-4" style="color: #0e7490;">{{ t('saveOurDate') }}</p>
              <h2 class="text-5xl md:text-7xl font-bold italic mb-2" style="color: #1a4a5a;">{{ t('dateMain') }}</h2>

              <!-- Countdown -->
              <div class="flex justify-center gap-3 my-10">
                <div v-for="(val, key) in countdown" :key="key" class="flex flex-col items-center w-16 h-16 rounded-2xl justify-center" style="background: rgba(14,116,144,0.06); border: 1px solid rgba(14,116,144,0.15);">
                  <span class="text-2xl font-bold" style="color: #0e7490;">{{ val }}</span>
                  <span class="text-[9px] uppercase tracking-widest mt-0.5" style="color: rgba(14,116,144,0.6);">{{ t(key) }}</span>
                </div>
              </div>

              <!-- Events cards -->
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div v-for="(ev, i) in events" :key="i" class="rounded-2xl p-5 text-left" style="background: rgba(14,116,144,0.05); border: 1px solid rgba(14,116,144,0.1);">
                  <h3 class="font-bold text-sm mb-3" style="color: #1a4a5a;">{{ ev.title }}</h3>
                  <p class="text-xs flex items-center gap-2 mb-1" style="color: rgba(26,74,90,0.7);"><UIcon name="mdi:clock-outline" class="w-3.5 h-3.5 text-teal-500" />{{ ev.time }}</p>
                  <p class="text-xs flex items-center gap-2" style="color: rgba(26,74,90,0.7);"><UIcon name="mdi:map-marker-outline" class="w-3.5 h-3.5 text-teal-500" />{{ ev.location }}</p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row justify-center gap-3">
                <a href="/save-the-date.ics" download class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-1" style="background: #0e7490; color: white;">
                  <UIcon name="mdi:calendar-heart" class="w-4 h-4" /> {{ t('saveToCal') }}
                </a>
                <a href="https://www.google.com/maps" target="_blank" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-1" style="background: rgba(14,116,144,0.06); border: 1px solid rgba(14,116,144,0.2); color: #0e7490;">
                  <UIcon name="mdi:google-maps" class="w-4 h-4" /> {{ t('openMap') }}
                </a>
              </div>
            </div>
            <!-- Postcard bottom colored strip -->
            <div class="h-3" style="background: linear-gradient(90deg, #0e7490, #06b6d4, #7dd3fc, #06b6d4, #0e7490);" />
          </div>
        </div>
      </section>

      <!-- WAVE OUT from ocean -->
      <div class="w-full h-24 wave-out-teal" />

      <!-- RSVP: Sandy bg, side by side -->
      <section class="w-full py-24 px-6" style="background: #f8f4f0;">
        <div class="max-w-3xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 text-center mb-12">
            <p class="text-xs tracking-[0.4em] uppercase mb-2" style="color: #0e7490;">{{ t('rsvpSub') }}</p>
            <h2 class="text-4xl md:text-5xl font-bold italic" style="color: #1a4a5a;">{{ t('rsvpTitle') }}</h2>
            <p class="text-sm mt-3 max-w-lg mx-auto" style="color: rgba(26,74,90,0.6);">{{ t('rsvpDesc') }}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <form class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 space-y-4 rounded-3xl p-6" style="background: white; box-shadow: 0 4px 30px rgba(14,116,144,0.08);" @submit.prevent>
              <div>
                <label class="block text-[10px] tracking-widest uppercase mb-2" style="color: #0e7490;">{{ t('fullName') }}</label>
                <input type="text" :placeholder="t('fullNamePlaceholder')" class="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style="background: rgba(14,116,144,0.04); border: 1px solid rgba(14,116,144,0.15); color: #1a4a5a;" required>
              </div>
              <div>
                <p class="text-[10px] tracking-widest uppercase mb-2" style="color: #0e7490;">{{ t('confirmAttendance') }}</p>
                <div class="flex gap-3">
                  <label class="flex-1 cursor-pointer"><input type="radio" name="kehadiran" class="peer sr-only" required><div class="py-3 rounded-xl text-center text-xs transition-all peer-checked:font-bold" style="background: rgba(14,116,144,0.05); border: 1px solid rgba(14,116,144,0.15); color: rgba(26,74,90,0.7);">{{ t('attendYes') }}</div></label>
                  <label class="flex-1 cursor-pointer"><input type="radio" name="kehadiran" class="peer sr-only"><div class="py-3 rounded-xl text-center text-xs transition-all" style="background: rgba(14,116,144,0.05); border: 1px solid rgba(14,116,144,0.1); color: rgba(26,74,90,0.7);">{{ t('attendNo') }}</div></label>
                </div>
              </div>
              <div>
                <label class="block text-[10px] tracking-widest uppercase mb-2" style="color: #0e7490;">{{ t('wishes') }}</label>
                <textarea rows="4" :placeholder="t('wishesPlaceholder')" class="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style="background: rgba(14,116,144,0.04); border: 1px solid rgba(14,116,144,0.15); color: #1a4a5a;" />
              </div>
              <button type="submit" class="w-full py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-1" style="background: #0e7490; color: white;">{{ t('sendBtn') }}</button>
            </form>

            <div class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 rounded-3xl p-6 flex flex-col min-h-[300px]" style="background: white; box-shadow: 0 4px 30px rgba(14,116,144,0.08);">
              <div class="flex items-center gap-3 mb-6 pb-4 border-b" style="border-color: rgba(14,116,144,0.1);">
                <UIcon name="mdi:message-heart-outline" class="w-5 h-5" style="color: #0e7490;" />
                <h3 class="font-bold text-sm" style="color: #1a4a5a;">{{ t('wishesTitle') }}</h3>
              </div>
              <div class="flex-1 flex flex-col items-center justify-center" style="color: rgba(14,116,144,0.4);">
                <UIcon name="mdi:emoticon-happy-outline" class="w-12 h-12 mb-3 opacity-50" />
                <p class="text-xs">{{ t('noWishes') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WAVE IN to teal for gift -->
      <div class="w-full h-16 wave-in-cyan" />

      <!-- GIFT: Light cyan tinted bg -->
      <section class="w-full py-24 px-6" style="background: #cffafe;">
        <div class="max-w-3xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 text-center mb-12">
            <p class="text-xs tracking-[0.4em] uppercase mb-2" style="color: #0e7490;">{{ t('giftSub') }}</p>
            <h2 class="text-4xl font-bold italic" style="color: #1a4a5a;">{{ t('giftTitle') }}</h2>
            <p class="text-sm mt-3 max-w-lg mx-auto" style="color: rgba(26,74,90,0.6);">{{ t('giftDesc') }}</p>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 rounded-2xl p-6" style="background: white; box-shadow: 0 4px 20px rgba(14,116,144,0.08);">
              <UIcon name="mdi:home-heart" class="w-7 h-7 mb-4" style="color: #0e7490;" />
              <h4 class="font-bold text-sm mb-1" style="color: #1a4a5a;">{{ t('physGift') }}</h4>
              <p class="text-xs mb-4" style="color: rgba(26,74,90,0.5);">Jl. Streefood No. 1</p>
              <a href="#" class="inline-flex items-center gap-1 text-xs font-medium" style="color: #0e7490;"><UIcon name="mdi:google-maps" class="w-4 h-4" /> Maps</a>
            </div>
            <div v-for="(gift, i) in gifts" :key="i" class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 rounded-2xl p-6" style="background: white; box-shadow: 0 4px 20px rgba(14,116,144,0.08);">
              <UIcon :name="gift.icon" class="w-7 h-7 mb-4" :style="`color: #0e7490;`" />
              <h4 class="font-bold text-sm mb-1" style="color: #1a4a5a;">{{ gift.title }}</h4>
              <p class="text-xs font-mono mb-4" style="color: rgba(26,74,90,0.5);">{{ gift.info }}</p>
              <button class="inline-flex items-center gap-1 text-xs font-medium" style="color: #0e7490;" @click="copyText(gift.copy)">
                <UIcon name="mdi:content-copy" class="w-3.5 h-3.5" /> {{ t('copyAcc') }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- WAVE OUT from cyan -->
      <div class="w-full h-16 wave-out-cyan" />

      <!-- GALLERY: Sandy bg, full-width masonry -->
      <section class="w-full py-24 px-6" style="background: #f8f4f0;">
        <div class="max-w-4xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 text-center mb-12">
            <p class="text-xs tracking-[0.4em] uppercase mb-2" style="color: #0e7490;">{{ t('memoriesSub') }}</p>
            <h2 class="text-4xl md:text-6xl font-bold italic" style="color: #1a4a5a;">{{ t('memoriesTitle') }}</h2>
          </div>

          <div class="opacity-0 transition-all ease-out scroll-animate scale-95 duration-700">
            <!-- Slider -->
            <div class="relative w-full h-[55vh] rounded-3xl overflow-hidden mb-4" style="box-shadow: 0 8px 40px rgba(14,116,144,0.12);">
              <transition-group name="ocean-fade" tag="div" class="absolute inset-0">
                <div v-for="(img, idx) in images" v-show="current === idx" :key="'main-' + idx" class="absolute inset-0">
                  <img :src="img" class="w-full h-full object-cover cursor-pointer" style="filter: saturate(1.05) brightness(0.95);" @click="openLightbox(img)">
                  <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(14,116,144,0.4), transparent 50%);" />
                </div>
              </transition-group>
              <div class="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
                <button class="w-12 h-12 rounded-full flex items-center justify-center transition-all pointer-events-auto hover:scale-110" style="background: rgba(255,255,255,0.8); color: #0e7490;" @click.stop="prevSlide"><UIcon name="mdi:chevron-left" class="w-7 h-7" /></button>
                <button class="w-12 h-12 rounded-full flex items-center justify-center transition-all pointer-events-auto hover:scale-110" style="background: rgba(255,255,255,0.8); color: #0e7490;" @click.stop="nextSlide"><UIcon name="mdi:chevron-right" class="w-7 h-7" /></button>
              </div>
            </div>
            <div ref="thumbContainer" class="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button v-for="(img, idx) in images" :key="'t-'+idx" :ref="(el: any) => { if (el) thumbs[idx] = el }" class="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all" :style="current === idx ? 'border-color: #0e7490; opacity: 1;' : 'border-color: transparent; opacity: 0.5;'" @click="current = idx">
                <img :src="img" class="w-full h-full object-cover">
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER: Ocean wave BG, light sandy text center -->
      <section class="relative w-full overflow-hidden" style="background: #0e7490;">
        <!-- Wave in -->
        <div class="w-full h-24 wave-footer-in" style="margin-bottom: -1px;" />

        <div class="relative z-10 max-w-2xl mx-auto text-center px-6 py-16">
          <!-- Animated waves background -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20 wave-pulse" style="background: rgba(255,255,255,0.2);" />
          <div class="relative z-10">
            <p class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 text-xl md:text-2xl font-light italic mb-4 text-white">{{ t('thankYouText') }}</p>
            <p class="text-sm mb-8" style="color: rgba(255,255,255,0.6);">{{ t('thankYouSub') }}</p>
            <p class="text-3xl font-bold italic text-white mb-6">Romeo &amp; Juliet</p>
            <div class="flex justify-center mb-6">
              <a href="https://instagram.com/keevia.id" target="_blank" class="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); color: white;">
                <UIcon name="mdi:instagram" class="w-5 h-5" />
              </a>
            </div>
            <p class="text-xs" style="color: rgba(255,255,255,0.4);">&copy; 2026 Keevia.id — All Rights Reserved.</p>
          </div>
        </div>

        <!-- Animated multi-layer waves at bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-20 wave-layer-1 opacity-30" />
        <div class="absolute bottom-0 left-0 right-0 h-16 wave-layer-2 opacity-20" />
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, inject, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

useSeoMeta({
  title: 'Tema Ocean Breeze - Keevia Digital Invitation',
  description: 'Undangan pernikahan digital premium dengan nuansa pantai dan lautan yang menenangkan, turquoise elegan, karya Keevia.',
  ogTitle: 'Tema Ocean Breeze - Keevia Digital Invitation',
  ogDescription: 'Undangan pernikahan digital premium dengan nuansa pantai dan lautan yang menenangkan, turquoise elegan, karya Keevia.',
  ogImage: '/couple-bg.png',
  twitterCard: 'summary_large_image',
})

const route = useRoute()
const audioControl = inject('audioControl') as any
const images = ref<string[]>(Array(6).fill('/img/blossom_showcase.png'))
const current = ref(0)
let _interval: number | undefined
const thumbContainer = ref<HTMLElement | null>(null)
const thumbs = ref<HTMLElement[]>([])

const nextSlide = () => { current.value = (current.value + 1) % images.value.length }
const prevSlide = () => { current.value = (current.value - 1 + images.value.length) % images.value.length }

watch(current, () => {
  nextTick(() => {
    if (!thumbContainer.value || !thumbs.value.length) return
    const c = thumbContainer.value
    const t = thumbs.value[current.value]
    if (!t) return
    c.scrollTo({ left: t.offsetLeft - c.clientWidth / 2 + t.offsetWidth / 2, behavior: 'smooth' })
  })
})

const openLightbox = (src: string) => {
  const lb = document.createElement('div')
  lb.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer'
  lb.innerHTML = `<img src="${src}" class="max-h-[90vh] max-w-[90vw] rounded-2xl" />`
  lb.onclick = () => lb.remove()
  document.body.appendChild(lb)
}
const copyText = (text: string) => navigator.clipboard.writeText(text).catch(() => {})

const dict = {
  weddingOf: 'The Wedding Of', dateFull: 'Selasa, 3 Februari 2026',
  toYth: 'Kepada Yth.', openingMsg: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.',
  openBtn: 'BUKA UNDANGAN', bibleQuote: '"Demikianlah mereka bukan lagi dua, melainkan satu."',
  bibleVerse: 'Matius 19:6', theGroom: 'The Groom', sonOf: 'Putra Pertama dari', parentsGroom: 'Bapak Ahmad & Ibu Siti',
  theBride: 'The Bride', daughterOf: 'Putri Pertama dari',
  journeySub: 'A Journey in Love', journeyTitle: 'Our Story',
  saveOurDate: 'Save Our Date', dateMain: 'Rabu, 25 Maret 2026',
  days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik',
  saveToCal: 'Save Calendar', openMap: 'Google Maps',
  rsvpSub: 'RSVP & Wishes', rsvpTitle: 'Kehadiran Anda',
  rsvpDesc: 'Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.',
  fullName: 'Nama Lengkap', fullNamePlaceholder: 'Tuliskan nama Anda',
  confirmAttendance: 'Konfirmasi Kehadiran', attendYes: 'Ya, Hadir', attendNo: 'Tidak Hadir',
  wishes: 'Ucapan & Doa', wishesPlaceholder: 'Berikan doa terbaik untuk kedua mempelai',
  sendBtn: 'Kirim RSVP', wishesTitle: 'Doa & Ucapan', noWishes: 'Belum ada ucapan.',
  giftSub: 'Wedding Gift', giftTitle: 'Tanda Kasih',
  giftDesc: 'Kehadiran dan doa restu Anda adalah kado terindah bagi kami.',
  copyAcc: 'Salin', memoriesSub: 'Our Memories', memoriesTitle: 'Gallery',
  thankYouText: 'Terima kasih atas doa, cinta, dan kehadiran Anda di hari bahagia kami.',
  thankYouSub: 'Semoga kebahagiaan selalu menyertai kita semua.',
  physGift: 'Kirim Kado Fisik',
}
const t = (key: keyof typeof dict) => dict[key]
const guestName = computed(() => (route.query.to as string) || 'Tamu Undangan')
const isOpen = ref(false)

const countdown = ref({ days: '00', hours: '00', minutes: '00', seconds: '00' })
const weddingDate = new Date('March 25, 2026 08:00:00').getTime()
let countdownInterval: ReturnType<typeof setInterval>

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    const d = weddingDate - Date.now()
    countdown.value.days = String(Math.max(0, Math.floor(d / 86400000))).padStart(2, '0')
    countdown.value.hours = String(Math.max(0, Math.floor((d % 86400000) / 3600000))).padStart(2, '0')
    countdown.value.minutes = String(Math.max(0, Math.floor((d % 3600000) / 60000))).padStart(2, '0')
    countdown.value.seconds = String(Math.max(0, Math.floor((d % 60000) / 1000))).padStart(2, '0')
  }, 1000)
}

const chapters = [
  { date: 'Juli 2023', title: 'The Unexpected Comeback', desc: 'Pada Juli 2023, Romeo & Juliet dipertemukan kembali. Sebuah kebetulan yang menjadi awal dari kisah yang baru.' },
  { date: '2023 – 2025', title: 'The Beautiful Mess', desc: 'Perjalanan dipenuhi warna. Ada tawa, tangis, hingga momen manis yang membentuk fondasi hubungan kami.' },
  { date: 'Maret 2026', title: 'The Forever Chapter', desc: 'Dengan restu Tuhan dan kedua orang tua, kami mantap melangkah bersisian memulai babak baru selamanya.' },
]

const events = [
  { title: 'Holy Matrimony', time: '08.00 – 10.00 WIB', location: 'Gereja Katedral Jakarta' },
  { title: 'Resepsi Pernikahan', time: '18.00 – 21.00 WIB', location: 'Hotel Mulia Senayan' },
]

const gifts = [
  { title: 'BCA – Romeo', info: '1234 5678 90', copy: '1234567890', icon: 'mdi:bank-outline' },
  { title: 'Gopay / Dana', info: '0829-2290-1102', copy: '082922901102', icon: 'mdi:wallet-outline' },
]

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-6', '-translate-y-6', 'scale-95')
        e.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))
}

const openInvitation = () => {
  isOpen.value = true
  document.body.classList.remove('overflow-hidden')
  nextTick(() => setTimeout(initScrollAnimations, 100))
  if (audioControl?.audio?.value && !audioControl.isPlaying?.value) {
    audioControl.audio.value.play().catch(() => {})
    audioControl.isPlaying.value = true
  }
  _interval = window.setInterval(nextSlide, 4000)
  startCountdown()
}

onMounted(() => {
  document.body.classList.add('overflow-hidden')
  setTimeout(initScrollAnimations, 500)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap');
.wave-cover-top {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'><path fill='%23f8f4f0' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z'/></svg>") no-repeat top / 100% 100%;
}
.wave-cover-bottom {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'><path fill='%23f8f4f0' d='M0,50 C360,100 720,10 1080,50 C1260,70 1380,30 1440,50 L1440,100 L0,100 Z'/></svg>") no-repeat bottom / 100% 100%;
}
.wave-couple-right {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 400' preserveAspectRatio='none'><path fill='%23f8f4f0' d='M40,0 C20,50 40,100 20,150 C0,200 40,250 20,300 C0,350 20,380 40,400 L40,400 L40,0 Z'/></svg>") no-repeat right / 100% 100%;
}
.wave-couple-bottom {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60'><path fill='%23f8f4f0' d='M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z'/></svg>") no-repeat top / 100% 100%;
}
.wave-in-teal {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'><path fill='%230e7490' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z'/></svg>") no-repeat top / 100% 100%;
}
.wave-out-teal {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'><path fill='%23f8f4f0' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z'/></svg>") no-repeat bottom / 100% 100%;
  background-color: #0e7490;
}
.wave-in-cyan {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60'><path fill='%23cffafe' d='M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z'/></svg>") no-repeat top / 100% 100%;
  background-color: #f8f4f0;
}
.wave-out-cyan {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60'><path fill='%23f8f4f0' d='M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z'/></svg>") no-repeat bottom / 100% 100%;
  background-color: #cffafe;
}
.wave-footer-in {
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'><path fill='%230e7490' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z'/></svg>") no-repeat top / 100% 100%;
  background-color: #f8f4f0;
}
.ocean-fade-enter-active, .ocean-fade-leave-active { transition: opacity 0.8s ease; }
.ocean-fade-enter-from, .ocean-fade-leave-to { opacity: 0; }
.ocean-fade-leave-active { position: absolute; }
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
@keyframes waveMove {
  0% { transform: translateX(0); }
  50% { transform: translateX(-3%); }
  100% { transform: translateX(0); }
}
@keyframes wavePulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.1; }
}
.wave-pulse { animation: wavePulse 4s ease-in-out infinite; }
.wave-layer-1 {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'%3E%3Cpath fill='rgba(255,255,255,0.3)' d='M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z'/%3E%3C/svg%3E") repeat-x bottom / 150% 100%;
  animation: waveMove 6s ease-in-out infinite;
}
.wave-layer-2 {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'%3E%3Cpath fill='rgba(255,255,255,0.2)' d='M0,50 C360,20 720,80 1080,50 C1260,35 1380,65 1440,50 L1440,80 L0,80 Z'/%3E%3C/svg%3E") repeat-x bottom / 150% 100%;
  animation: waveMove 9s ease-in-out infinite reverse;
}
</style>
