<template>
  <div class="w-full min-h-[100dvh]" style="background: #050505; color: white; font-family: 'Space Grotesk', 'Inter', sans-serif;">

    <NuxtLink
      to="/"
      class="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium tracking-wide transition-all hover:scale-105"
      style="background: rgba(139,92,246,0.1); border-color: rgba(139,92,246,0.3); color: #c4b5fd; backdrop-filter: blur(12px);"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4" /> Kembali
    </NuxtLink>

    <!-- COVER: Full-screen typographic hero -->
    <section class="relative w-full h-[100dvh] flex flex-col overflow-hidden">
      <!-- Neon grid -->
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px); background-size: 48px 48px;" />
      <!-- Corner glows -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style="background: radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%); transform: translate(30%, -30%);" />
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style="background: radial-gradient(circle, rgba(239,68,68,0.08), transparent 70%); transform: translate(-30%, 30%);" />

      <!-- Big decorative text -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span class="text-[20vw] font-bold leading-none tracking-tighter" style="color: rgba(139,92,246,0.04);">NOIR</span>
      </div>

      <!-- Center content -->
      <div class="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center">
        <div class="mb-4 flex items-center gap-3">
          <div class="w-16 h-px" style="background: linear-gradient(to right, transparent, #7c3aed);" />
          <span class="text-xs tracking-[0.4em] uppercase" style="color: rgba(196,181,253,0.6);">{{ t('weddingOf') }}</span>
          <div class="w-16 h-px" style="background: linear-gradient(to left, transparent, #7c3aed);" />
        </div>

        <h1 class="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6" style="background: linear-gradient(135deg, #fff 0%, #c4b5fd 50%, #a78bfa 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
          Romeo<br><span style="font-weight:300; font-style: italic; background: linear-gradient(135deg, #f87171 0%, #c084fc 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">&amp; Juliet</span>
        </h1>

        <p class="text-xs tracking-[0.35em] uppercase mb-12" style="color: rgba(255,255,255,0.4);">{{ t('dateFull') }}</p>

        <!-- Guest card / open button -->
        <div class="w-full max-w-sm rounded-2xl p-px" style="background: linear-gradient(135deg, rgba(139,92,246,0.5), rgba(239,68,68,0.3));">
          <div class="rounded-2xl p-6 text-left" style="background: rgba(10,10,20,0.9); backdrop-filter: blur(20px);">
            <template v-if="!isOpen">
              <p class="text-[10px] tracking-[0.3em] uppercase mb-1" style="color: rgba(196,181,253,0.5);">{{ t('toYth') }}</p>
              <p class="text-xl font-semibold text-white mb-1">{{ guestName }}</p>
              <p class="text-xs leading-relaxed mb-5" style="color: rgba(255,255,255,0.35);">{{ t('openingMsg') }}</p>
              <button
                class="w-full py-3 rounded-xl text-xs font-bold tracking-[0.3em] uppercase transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] cursor-pointer"
                style="background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white;"
                @click="openInvitation"
              >{{ t('openBtn') }}</button>
            </template>
            <template v-else>
              <p class="text-sm italic leading-relaxed mb-3" style="color: rgba(255,255,255,0.7);">{{ t('bibleQuote') }}</p>
              <p class="text-xs tracking-wide" style="color: #a78bfa;">{{ t('bibleVerse') }}</p>
            </template>
          </div>
        </div>
      </div>

      <div v-if="isOpen" class="relative z-10 pb-6 flex flex-col items-center gap-1" style="color: rgba(196,181,253,0.4);">
        <span class="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <UIcon name="mdi:chevron-double-down" class="w-5 h-5 animate-bounce" />
      </div>
    </section>

    <!-- Content after open -->
    <div v-if="isOpen">

      <!-- COUPLE: Side-by-side cards (no image, bold type) -->
      <section class="relative w-full py-24 px-6 overflow-hidden">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px); background-size: 48px 48px;" />
        <div class="relative z-10 max-w-4xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 text-center mb-16">
            <p class="text-[10px] tracking-[0.4em] uppercase mb-3" style="color: rgba(196,181,253,0.5);">The Couple</p>
            <h2 class="text-4xl md:text-5xl font-bold" style="background: linear-gradient(90deg, #c4b5fd, #f87171); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Romeo &amp; Juliet</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Groom card -->
            <div class="opacity-0 transition-all ease-out scroll-animate translate-x-[-40px] duration-700 rounded-2xl p-px" style="background: linear-gradient(135deg, rgba(139,92,246,0.6), rgba(139,92,246,0.1));">
              <div class="rounded-2xl p-8 h-full" style="background: rgba(10,5,20,0.95);">
                <p class="text-[10px] tracking-[0.4em] uppercase mb-6" style="color: rgba(196,181,253,0.5);">{{ t('theGroom') }}</p>
                <div class="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-3xl font-bold" style="background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05)); border: 1px solid rgba(139,92,246,0.3); color: #c4b5fd;">R</div>
                <h3 class="text-4xl font-bold text-white mb-1">Romeo</h3>
                <p class="text-lg font-light mb-4" style="color: #a78bfa; font-style: italic;">Molen</p>
                <p class="text-sm mb-1" style="color: rgba(255,255,255,0.4);">{{ t('sonOf') }}</p>
                <p class="text-sm font-medium text-white mb-6">{{ t('parentsGroom') }}</p>
                <a href="#" class="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-all hover:opacity-70" style="color: #a78bfa;">
                  <UIcon name="mdi:instagram" class="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
            <!-- Bride card -->
            <div class="opacity-0 transition-all ease-out scroll-animate translate-x-[40px] duration-700 rounded-2xl p-px" style="background: linear-gradient(135deg, rgba(239,68,68,0.5), rgba(239,68,68,0.1));">
              <div class="rounded-2xl p-8 h-full" style="background: rgba(20,5,5,0.95);">
                <p class="text-[10px] tracking-[0.4em] uppercase mb-6" style="color: rgba(252,165,165,0.5);">{{ t('theBride') }}</p>
                <div class="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-3xl font-bold" style="background: linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.05)); border: 1px solid rgba(239,68,68,0.3); color: #fca5a5;">J</div>
                <h3 class="text-4xl font-bold text-white mb-1">Juliet</h3>
                <p class="text-lg font-light mb-4" style="color: #f87171; font-style: italic;">Juliet</p>
                <p class="text-sm mb-1" style="color: rgba(255,255,255,0.4);">{{ t('daughterOf') }}</p>
                <p class="text-sm font-medium text-white mb-6">{{ t('parentsGroom') }}</p>
                <a href="#" class="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-all hover:opacity-70" style="color: #f87171;">
                  <UIcon name="mdi:instagram" class="w-4 h-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SEPARATOR: neon line -->
      <div class="w-full h-px" style="background: linear-gradient(to right, transparent, rgba(139,92,246,0.4), rgba(239,68,68,0.3), transparent);" />

      <!-- LOVE STORY: Numbered timeline horizontal cards -->
      <section class="relative w-full py-24 px-6 overflow-hidden">
        <div class="absolute top-0 left-1/2 w-px h-full" style="background: linear-gradient(to bottom, rgba(139,92,246,0.2), transparent);" />
        <div class="relative z-10 max-w-4xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 mb-16">
            <p class="text-[10px] tracking-[0.4em] uppercase mb-2" style="color: rgba(196,181,253,0.5);">{{ t('journeySub') }}</p>
            <h2 class="text-5xl font-bold text-white">{{ t('journeyTitle') }}</h2>
          </div>

          <div class="space-y-4">
            <div v-for="(ch, i) in chapters" :key="i" class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 flex gap-6">
              <div class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg" style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3); color: #c4b5fd;">{{ String(i+1).padStart(2,'0') }}</div>
              <div class="flex-1 rounded-xl p-5" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);">
                <span class="inline-block text-[10px] tracking-widest uppercase mb-2 px-3 py-1 rounded-full" style="background: rgba(139,92,246,0.1); color: #a78bfa;">{{ ch.date }}</span>
                <h3 class="text-lg font-bold text-white mb-2">{{ ch.title }}</h3>
                <p class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.5);">{{ ch.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SAVE THE DATE: Bold centered with countdown inline -->
      <section class="relative w-full py-24 px-6 overflow-hidden">
        <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(139,92,246,0.05), rgba(239,68,68,0.03));" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full" style="background: radial-gradient(ellipse, rgba(139,92,246,0.06), transparent 70%);" />
        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <p class="text-[10px] tracking-[0.4em] uppercase mb-6" style="color: rgba(196,181,253,0.5);">{{ t('saveOurDate') }}</p>
          <div class="opacity-0 transition-all ease-out scroll-animate scale-95 duration-700 text-7xl md:text-9xl font-black text-white leading-none mb-4 tracking-tighter">25<br><span style="font-size: 0.4em; font-weight: 300; color: #a78bfa; font-style: italic;">Maret 2026</span></div>
          <p class="text-sm mb-12" style="color: rgba(255,255,255,0.4);">{{ t('dateMain') }}</p>

          <!-- Countdown inline -->
          <div class="opacity-0 transition-all ease-out scroll-animate translate-y-6 duration-700 flex justify-center gap-2 mb-12">
            <div v-for="(val, key) in countdown" :key="key" class="flex flex-col items-center justify-center w-20 h-20 rounded-2xl" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(139,92,246,0.2);">
              <span class="text-2xl font-bold text-white">{{ val }}</span>
              <span class="text-[9px] uppercase tracking-widest mt-1" style="color: rgba(196,181,253,0.5);">{{ t(key) }}</span>
            </div>
          </div>

          <!-- Events: horizontal on desktop -->
          <div class="grid md:grid-cols-2 gap-4 mb-10">
            <div v-for="(ev, i) in events" :key="i" class="opacity-0 transition-all ease-out scroll-animate translate-y-6 duration-700 rounded-xl p-5 text-left" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(139,92,246,0.15);">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-2 h-2 rounded-full" style="background: #7c3aed; box-shadow: 0 0 8px #7c3aed;" />
                <h3 class="font-bold text-white text-sm tracking-wide">{{ ev.title }}</h3>
              </div>
              <p class="text-xs mb-1 flex items-center gap-2" style="color: rgba(255,255,255,0.5);"><UIcon name="mdi:clock-outline" class="w-3 h-3 text-violet-400" />{{ ev.time }}</p>
              <p class="text-xs flex items-center gap-2" style="color: rgba(255,255,255,0.5);"><UIcon name="mdi:map-marker-outline" class="w-3 h-3 text-violet-400" />{{ ev.location }}</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/save-the-date.ics" download class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-1" style="background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white;">
              <UIcon name="mdi:calendar-heart" class="w-4 h-4" /> {{ t('saveToCal') }}
            </a>
            <a href="https://www.google.com/maps" target="_blank" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all hover:-translate-y-1" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: white;">
              <UIcon name="mdi:google-maps" class="w-4 h-4 text-violet-400" /> {{ t('openMap') }}
            </a>
          </div>
        </div>
      </section>

      <!-- SEPARATOR -->
      <div class="w-full h-px" style="background: linear-gradient(to right, transparent, rgba(239,68,68,0.3), rgba(139,92,246,0.4), transparent);" />

      <!-- RSVP: Full-width split layout -->
      <section class="relative w-full py-24 px-6 overflow-hidden">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px); background-size: 48px 48px;" />
        <div class="relative z-10 max-w-4xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 mb-12">
            <p class="text-[10px] tracking-[0.4em] uppercase mb-2" style="color: rgba(196,181,253,0.5);">{{ t('rsvpSub') }}</p>
            <h2 class="text-5xl font-bold text-white">{{ t('rsvpTitle') }}</h2>
            <p class="text-sm mt-3" style="color: rgba(255,255,255,0.4);">{{ t('rsvpDesc') }}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <form class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 space-y-4" @submit.prevent>
              <div>
                <label class="block text-[10px] tracking-widest uppercase mb-2" style="color: rgba(196,181,253,0.6);">{{ t('fullName') }}</label>
                <input type="text" :placeholder="t('fullNamePlaceholder')" class="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 focus:outline-none text-sm" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(139,92,246,0.25);" required>
              </div>
              <div>
                <p class="text-[10px] tracking-widest uppercase mb-2" style="color: rgba(196,181,253,0.6);">{{ t('confirmAttendance') }}</p>
                <div class="flex gap-3">
                  <label class="flex-1 cursor-pointer"><input type="radio" name="kehadiran" class="peer sr-only" required><div class="py-3 rounded-xl text-center text-sm transition-all peer-checked:font-bold" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(139,92,246,0.2); color: rgba(255,255,255,0.5);">{{ t('attendYes') }}</div></label>
                  <label class="flex-1 cursor-pointer"><input type="radio" name="kehadiran" class="peer sr-only"><div class="py-3 rounded-xl text-center text-sm transition-all" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.5);">{{ t('attendNo') }}</div></label>
                </div>
              </div>
              <div>
                <label class="block text-[10px] tracking-widest uppercase mb-2" style="color: rgba(196,181,253,0.6);">{{ t('wishes') }}</label>
                <textarea rows="4" :placeholder="t('wishesPlaceholder')" class="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 focus:outline-none text-sm resize-none" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(139,92,246,0.25);" />
              </div>
              <button type="submit" class="w-full py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all hover:-translate-y-1" style="background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white;">
                {{ t('sendBtn') }}
              </button>
            </form>

            <div class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 rounded-2xl p-6 flex flex-col min-h-[350px]" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(139,92,246,0.15);">
              <div class="flex items-center gap-3 mb-6 pb-4 border-b" style="border-color: rgba(139,92,246,0.15);">
                <UIcon name="mdi:message-heart-outline" class="w-5 h-5 text-violet-400" />
                <h3 class="font-bold text-white text-sm">{{ t('wishesTitle') }}</h3>
              </div>
              <div class="flex-1 flex flex-col items-center justify-center" style="color: rgba(255,255,255,0.2);">
                <UIcon name="mdi:emoticon-happy-outline" class="w-12 h-12 mb-3 opacity-40" />
                <p class="text-xs">{{ t('noWishes') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GIFT: 3-column mini cards -->
      <section class="relative w-full py-24 px-6">
        <div class="absolute inset-0" style="background: linear-gradient(to bottom, transparent, rgba(139,92,246,0.04), transparent);" />
        <div class="relative z-10 max-w-4xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 mb-12">
            <p class="text-[10px] tracking-[0.4em] uppercase mb-2" style="color: rgba(196,181,253,0.5);">{{ t('giftSub') }}</p>
            <h2 class="text-5xl font-bold text-white">{{ t('giftTitle') }}</h2>
            <p class="text-sm mt-3 max-w-lg" style="color: rgba(255,255,255,0.4);">{{ t('giftDesc') }}</p>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 rounded-2xl p-6" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);">
              <UIcon name="mdi:home-heart" class="w-6 h-6 mb-4 text-violet-400" />
              <h4 class="font-bold text-white text-sm mb-1">{{ t('physGift') }}</h4>
              <p class="text-xs mb-4" style="color: rgba(255,255,255,0.4);">Jl. Streefood No. 1</p>
              <a href="#" class="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300">
                <UIcon name="mdi:google-maps" class="w-4 h-4" /> Maps
              </a>
            </div>
            <div v-for="(gift, i) in gifts" :key="i" class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 rounded-2xl p-6" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);">
              <UIcon :name="gift.icon" class="w-6 h-6 mb-4" :style="`color: rgb(${gift.color});`" />
              <h4 class="font-bold text-white text-sm mb-1">{{ gift.title }}</h4>
              <p class="text-xs font-mono mb-4" style="color: rgba(255,255,255,0.5);">{{ gift.info }}</p>
              <button class="inline-flex items-center gap-1 text-xs hover:opacity-70 transition-all" :style="`color: rgb(${gift.color});`" @click="copyText(gift.copy)">
                <UIcon name="mdi:content-copy" class="w-4 h-4" /> {{ t('copyAcc') }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- GALLERY: Masonry grid + fullscreen slider -->
      <section class="relative w-full py-24 px-6 overflow-hidden">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px); background-size: 48px 48px;" />
        <div class="relative z-10 max-w-4xl mx-auto">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-6 duration-700 mb-12">
            <p class="text-[10px] tracking-[0.4em] uppercase mb-2" style="color: rgba(196,181,253,0.5);">{{ t('memoriesSub') }}</p>
            <h2 class="text-5xl font-bold text-white">{{ t('memoriesTitle') }}</h2>
          </div>

          <!-- Masonry 3-col grid -->
          <div class="opacity-0 transition-all ease-out scroll-animate scale-95 duration-700 columns-2 md:columns-3 gap-3 mb-4">
            <div v-for="(img, idx) in images.slice(0, 6)" :key="idx" class="mb-3 break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative" @click="openLightbox(img)">
              <img :src="img" class="w-full object-cover transition-transform duration-700 group-hover:scale-105" :class="idx % 3 === 0 ? 'aspect-square' : idx % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <UIcon name="mdi:magnify-plus-outline" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER: Big type -->
      <section class="relative w-full py-24 px-6 overflow-hidden" style="background: #030303;">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(to right, transparent, rgba(139,92,246,0.4), rgba(239,68,68,0.3), transparent);" />
          <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full" style="background: radial-gradient(ellipse, rgba(139,92,246,0.08), transparent 70%);" />
        </div>

        <!-- Big decorative text -->
        <div class="absolute bottom-0 left-0 right-0 text-center leading-none select-none pointer-events-none overflow-hidden" style="color: rgba(139,92,246,0.04); font-size: 18vw; font-weight: 900; line-height: 0.8;">EVER</div>

        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <p class="opacity-0 transition-all ease-out scroll-animate translate-y-8 duration-700 text-xl md:text-2xl font-light italic mb-4" style="color: rgba(255,255,255,0.7);">{{ t('thankYouText') }}</p>
          <p class="text-sm mb-8" style="color: rgba(255,255,255,0.3);">{{ t('thankYouSub') }}</p>
          <p class="text-4xl font-bold mb-6" style="background: linear-gradient(135deg, #c4b5fd, #f87171); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Romeo &amp; Juliet</p>
          <div class="flex justify-center mb-8">
            <a href="https://instagram.com/keevia.id" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3); color: #c4b5fd;">
              <UIcon name="mdi:instagram" class="w-5 h-5" />
            </a>
          </div>
          <p class="text-xs" style="color: rgba(255,255,255,0.15);">&copy; 2026 Keevia.id — All Rights Reserved.</p>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, inject, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

useSeoMeta({
  title: 'Tema Midnight Noir - Keevia Digital Invitation',
  description: 'Undangan pernikahan digital premium bergaya ultra-modern dengan estetika noir gelap, neon violet, dan tipografi bold karya Keevia.',
  ogTitle: 'Tema Midnight Noir - Keevia Digital Invitation',
  ogDescription: 'Undangan pernikahan digital premium bergaya ultra-modern dengan estetika noir gelap, neon violet, dan tipografi bold karya Keevia.',
  ogImage: '/couple-bg.png',
  twitterCard: 'summary_large_image',
})

const route = useRoute()
const audioControl = inject('audioControl') as any
const images = ref<string[]>(Array(6).fill('/img/blossom_showcase.png'))
const current = ref(0)
let _interval: number | undefined

const nextSlide = () => { current.value = (current.value + 1) % images.value.length }
const prevSlide = () => { current.value = (current.value - 1 + images.value.length) % images.value.length }

const openLightbox = (src: string) => {
  const lb = document.createElement('div')
  lb.className = 'fixed inset-0 bg-black/95 z-50 flex items-center justify-center cursor-pointer'
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
  rsvpSub: 'RSVP & Wishes', rsvpTitle: 'Your Presence',
  rsvpDesc: 'Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
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
  { date: '2023 – 2025', title: 'The Beautiful Mess', desc: 'Perjalanan kami dipenuhi warna. Ada tawa, tangis, hingga momen-momen manis yang membentuk fondasi hubungan kami.' },
  { date: 'Maret 2026', title: 'The Forever Chapter', desc: 'Dengan restu Tuhan dan kedua orang tua, kami mantap melangkah bersisian memulai babak baru selamanya.' },
]

const events = [
  { title: 'Holy Matrimony', time: '08.00 – 10.00 WIB', location: 'Gereja Katedral Jakarta' },
  { title: 'Resepsi Pernikahan', time: '18.00 – 21.00 WIB', location: 'Hotel Mulia Senayan' },
]

const gifts = [
  { title: 'BCA – Romeo', info: '1234 5678 90', copy: '1234567890', icon: 'mdi:bank-outline', color: '139,92,246' },
  { title: 'Gopay / Dana', info: '0829-2290-1102', copy: '082922901102', icon: 'mdi:wallet-outline', color: '239,68,68' },
]

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-6', '-translate-y-6', 'translate-x-[-40px]', 'translate-x-[40px]', 'scale-95')
        e.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
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
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
.scroll-animate { will-change: opacity, transform; }
</style>
