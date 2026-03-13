<template>
  <div class="flex flex-col w-full min-h-[100dvh] bg-[#0a0a0a] text-white">
    
    <NuxtLink
      to="/"
      class="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/20 text-white/90 hover:text-white hover:bg-black/50 hover:scale-105 transition-all duration-300 font-light text-sm tracking-wide shadow-lg"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4" />
      Kembali
    </NuxtLink>

    
    <section class="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000">
      
      <NuxtImg
        src="/img/bali_luxury_hero.png"
        class="absolute inset-0 w-full h-full object-cover scale-105 opacity-80"
        format="webp"
        quality="100"
        sizes="sm:100vw lg:100vw"
        loading="lazy"
      />

      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div v-for="i in 15" :key="i" class="particle" :style="generateParticleStyle()"></div>
      </div>

      
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]" />

      
      <div
        class="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto"
      >
        <p class="tracking-[0.4em] text-[11px] mb-6 uppercase text-white/80">{{ t("weddingOf") }}</p>

        <h1 class="text-6xl md:text-9xl font-light font-serif tracking-tighter leading-tight mb-4 text-shimmer">
          Romeo <br class="md:hidden"><span class="text-amber-200/60 text-5xl md:text-7xl">&</span><br class="md:hidden"> Juliet
        </h1>

        <p class="text-sm tracking-[0.25em] uppercase text-white/80 mb-12">{{ t("dateFull") }}</p>

        <div class="relative w-full max-w-sm flex flex-col items-center">
          
          <div
            class="w-full p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-1000"
            :class="isOpen ? 'opacity-0 scale-90 pointer-events-none absolute' : 'opacity-100 scale-100 relative delay-300'"
          >
            <p class="text-xs tracking-[0.3em] uppercase text-white/70">{{ t("toYth") }}</p>

            <p class="text-xl font-light mt-3 text-amber-100 uppercase tracking-widest">
              {{ guestName }}
            </p>

            <p class="text-[11px] text-white/60 mt-4 leading-relaxed">{{ t("openingMsg") }}</p>

            <button
              class="mt-8 w-full px-8 py-4 bg-amber-400/20 backdrop-blur-md border border-amber-300/50 text-amber-100 rounded-full hover:bg-amber-400/30 transition-all font-medium tracking-[0.2em] text-xs hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.15)]"
              @click="openInvitation"
            >{{ t("openBtn") }}</button>
          </div>

          
          <div
            class="transition-all duration-1000 mt-8"
            :class="isOpen ? 'opacity-100 translate-y-0 relative delay-500' : 'opacity-0 translate-y-10 absolute pointer-events-none'"
          >
            <p class="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4 items-center flex flex-col gap-2">
              Scroll Down
              <UIcon name="mdi:chevron-down" class="w-8 h-8 text-amber-200 animate-bounce" />
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <div
      v-if="isOpen"
      class="relative z-20 w-full animate-fade-in-up"
    >

    
      <section class="w-full py-16 px-6 text-center max-w-2xl mx-auto">
        <div class="opacity-0 transition-all ease-out transform-gpu scroll-animate translate-y-10 duration-[1000ms]">
          <h2 class="text-2xl font-serif text-amber-200 mb-6 font-light">Om Swastyastu</h2>
          <p class="text-sm md:text-base font-light leading-relaxed text-white/80">
            Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Pawiwahan (Pernikahan) Putra dan Putri kami.
          </p>
        </div>
      </section>

      
      <section class="w-full py-16 md:py-24 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            
            <div class="opacity-0 transition-all ease-out scroll-animate translate-y-10 duration-[1000ms] text-center w-full max-w-xs md:max-w-md">
              
              <div class="flex justify-center mb-6">
                <svg class="w-24 h-10 text-amber-300/80 drop-shadow-md" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M50,0 C55,10 65,15 85,15 C65,15 55,20 50,30 C45,20 35,15 15,15 C35,15 45,10 50,0 Z M50,5 C53,11 58,13 70,13 C58,13 53,16 50,23 C47,16 42,13 30,13 C42,13 47,11 50,5 Z" />
                </svg>
              </div>
              <div class="relative w-72 h-[360px] md:w-80 md:h-[400px] mx-auto mb-8 rounded-[40px] overflow-hidden border border-white/10 group">
                
                <transition-group name="fade">
                  <NuxtImg
                    :key="groomImgIndex"
                    :src="groomImages[groomImgIndex]"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    format="webp"
                  />
                </transition-group>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>
              <p class="text-xs tracking-[0.3em] uppercase text-amber-200 mb-3">{{ t("theGroom") }}</p>
              <h2 class="text-4xl font-light font-serif text-white mb-4">Romeo</h2>
              <p class="text-sm text-white/60 font-light">{{ t("sonOf") }}<br><span class="text-white/90">{{ t("parentsGroom") }}</span></p>
              <a href="#" class="inline-block mt-4 text-white/40 hover:text-amber-300 transition-colors"><UIcon name="mdi:instagram" class="w-5 h-5" /></a>
            </div>

            <div class="text-amber-200 font-serif font-light text-6xl md:text-8xl opacity-0 transition-all ease-out scroll-animate scale-50 duration-[1000ms] delay-200">&</div>

            
            <div class="opacity-0 transition-all ease-out scroll-animate translate-y-10 duration-[1000ms] delay-100 text-center w-full max-w-xs md:max-w-md">
              
              <div class="flex justify-center mb-6">
                <svg class="w-24 h-10 text-amber-300/80 drop-shadow-md" viewBox="0 0 100 30" fill="currentColor">
                  <path d="M50,0 C55,10 65,15 85,15 C65,15 55,20 50,30 C45,20 35,15 15,15 C35,15 45,10 50,0 Z M50,5 C53,11 58,13 70,13 C58,13 53,16 50,23 C47,16 42,13 30,13 C42,13 47,11 50,5 Z" />
                </svg>
              </div>
              <div class="relative w-72 h-[360px] md:w-80 md:h-[400px] mx-auto mb-8 rounded-[40px] overflow-hidden border border-white/10 group">
                
                <transition-group name="fade">
                  <NuxtImg
                    :key="brideImgIndex"
                    :src="brideImages[brideImgIndex]"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    format="webp"
                  />
                </transition-group>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>
              <p class="text-xs tracking-[0.3em] uppercase text-amber-200 mb-3">{{ t("theBride") }}</p>
              <h2 class="text-4xl font-light font-serif text-white mb-4">Juliet</h2>
              <p class="text-sm text-white/60 font-light">{{ t("daughterOf") }}<br><span class="text-white/90">{{ t("parentsGroom") }}</span></p>
              <a href="#" class="inline-block mt-4 text-white/40 hover:text-amber-300 transition-colors"><UIcon name="mdi:instagram" class="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </section>

      
      <section class="w-full py-20 px-6 text-center max-w-3xl mx-auto">
        <div class="opacity-0 transition-all ease-out transform-gpu scroll-animate translate-y-10 duration-[1000ms]">
          <UIcon name="mdi:leaf-maple" class="w-8 h-8 text-amber-300/50 mx-auto mb-6" />
          <div class="space-y-6">
            <p class="text-sm md:text-base italic leading-relaxed text-white/90">"Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair naptrbhih, modamanau sve grhe."</p>
            <p class="text-[11px] md:text-sm font-light text-white/70 leading-relaxed">{{ t("bibleQuote") }}</p>
          </div>
          <p class="text-xs mt-8 text-amber-200 tracking-[0.2em] font-medium uppercase">{{ t("bibleVerse") }}</p>
        </div>
      </section>


      
      <section class="relative w-full py-24 px-6 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-[-20%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div class="absolute bottom-0 left-[-20%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>

        <div class="max-w-4xl mx-auto text-center relative z-10">
          <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-10 duration-[1000ms] mb-16">
            <h2 class="text-xs font-medium tracking-[0.4em] uppercase text-amber-200/80 mb-4">{{ t("saveOurDate") }}</h2>
            <p class="text-4xl md:text-5xl font-serif font-light text-white">{{ t("dateMain") }}</p>
          </div>

          
          <div class="grid grid-cols-4 gap-4 max-w-xl mx-auto mb-20 opacity-0 transition-all ease-out scroll-animate scale-95 duration-[1000ms] delay-200">
            <div v-for="(val, key) in countdown" :key="key" class="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <span class="text-3xl md:text-5xl font-light font-serif text-white">{{ val }}</span>
              <span class="text-[9px] md:text-xs tracking-widest uppercase text-amber-200/70 mt-2">{{ t(key) }}</span>
            </div>
            
            <div class="col-span-4 mt-8">
              <a href="/save-the-date.ics" download class="inline-flex items-center gap-2 px-8 py-3 bg-amber-200 hover:bg-amber-300 text-[#0a0a0a] rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]"><UIcon name="mdi:calendar-check" class="w-4 h-4" /> {{ t("saveToCal") }}</a>
            </div>
          </div>

          
          <div class="grid md:grid-cols-2 gap-8 opacity-0 transition-all ease-out scroll-animate translate-y-10 duration-[1000ms] delay-300">
            
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors text-left relative overflow-hidden">
               <div class="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
               <h3 class="text-2xl font-serif text-white mb-6 pb-4 border-b border-white/10">{{ t("pemberkatanTitle") }}</h3>
               <div class="space-y-4 font-light text-white/80 text-sm">
                 <p class="flex items-center gap-3"><UIcon name="mdi:clock" class="text-amber-300 w-5 h-5 flex-shrink-0" /> {{ t("pemberkatanTime") }}</p>
                 <p class="flex items-start gap-3"><UIcon name="mdi:map-marker" class="text-amber-300 w-5 h-5 mt-0.5 flex-shrink-0" /> <span class="leading-relaxed">{{ t("pemberkatanLocation") }}</span></p>
               </div>
               <a href="#" target="_blank" class="mt-8 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-amber-200 hover:text-amber-300"><UIcon name="mdi:navigation" class="w-4 h-4"/> {{ t("openMap") }}</a>
            </div>

            
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors text-left relative overflow-hidden">
               <div class="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
               <h3 class="text-2xl font-serif text-white mb-6 pb-4 border-b border-white/10">{{ t("resepsiTitle") }}</h3>
               <div class="space-y-4 font-light text-white/80 text-sm">
                 <p class="flex items-center gap-3"><UIcon name="mdi:clock" class="text-amber-300 w-5 h-5 flex-shrink-0" /> {{ t("resepsiTime") }}</p>
                 <p class="flex items-start gap-3"><UIcon name="mdi:map-marker" class="text-amber-300 w-5 h-5 mt-0.5 flex-shrink-0" /> <span class="leading-relaxed">{{ t("resepsiLocation") }}</span></p>
               </div>
               <a href="#" target="_blank" class="mt-8 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-amber-200 hover:text-amber-300"><UIcon name="mdi:navigation" class="w-4 h-4"/> {{ t("openMap") }}</a>
            </div>
          </div>
        </div>
      </section>

      
      <section class="w-full py-24 px-6 bg-[#111]">
        <div class="max-w-4xl mx-auto">
           <div class="text-center mb-16 opacity-0 transition-all ease-out scroll-animate -translate-y-10 duration-[1000ms]">
              <h2 class="text-xs font-medium tracking-[0.4em] uppercase text-amber-200/80 mb-4">{{ t("rsvpSub") }}</h2>
              <p class="text-4xl font-serif text-white mb-4">{{ t("rsvpTitle") }}</p>
              <p class="text-sm text-white/60 font-light max-w-xl mx-auto">{{ t("rsvpDesc") }}</p>
           </div>

           <div class="grid md:grid-cols-2 gap-8">
              
              <form class="opacity-0 transition-all ease-out scroll-animate translate-x-10 duration-[1000ms] space-y-5 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
                <div>
                  <label class="block text-[10px] tracking-widest uppercase text-amber-200/80 mb-2 ml-1">{{ t("fullName") }}</label>
                  <input type="text" :placeholder="t('fullNamePlaceholder')" class="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-light text-white outline-none focus:border-amber-300/50" required />
                </div>
                <div>
                  <label class="block text-[10px] tracking-widest uppercase text-amber-200/80 mb-2 ml-1">{{ t("confirmAttendance") }}</label>
                  <div class="flex gap-4">
                    <label class="flex-1">
                      <input type="radio" name="attend" class="peer sr-only" required>
                      <div class="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-light text-white/60 peer-checked:bg-amber-400/20 peer-checked:border-amber-300/50 peer-checked:text-amber-100 cursor-pointer transition-all">{{ t("attendYes") }}</div>
                    </label>
                    <label class="flex-1">
                      <input type="radio" name="attend" class="peer sr-only">
                      <div class="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-light text-white/60 peer-checked:bg-white/20 peer-checked:border-white/30 peer-checked:text-white cursor-pointer transition-all">{{ t("attendNo") }}</div>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-[10px] tracking-widest uppercase text-amber-200/80 mb-2 ml-1">{{ t("wishes") }}</label>
                  <textarea rows="4" :placeholder="t('wishesPlaceholder')" class="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-light text-white outline-none focus:border-amber-300/50 resize-none" required></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-amber-200 hover:bg-amber-300 text-black font-semibold uppercase tracking-widest text-xs rounded-2xl mt-4 transition-all shadow-[0_4px_20px_rgba(251,191,36,0.15)]">{{ t("sendBtn") }}</button>
              </form>

              
              <div class="opacity-0 transition-all ease-out scroll-animate -translate-x-10 duration-[1000ms] delay-200 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col h-full max-h-[600px]">
                 <h3 class="text-lg font-serif text-white mb-6 pb-4 border-b border-white/10 flex items-center justify-center gap-3"><UIcon name="mdi:message-heart" class="text-amber-300"/> {{ t("wishesTitle") }}</h3>
                 <div class="flex-1 flex items-center justify-center text-center text-white/40 text-sm font-light pt-10">
                    <div class="flex flex-col items-center">
                      <UIcon name="mdi:emoticon-happy-outline" class="w-12 h-12 mb-4 opacity-30" />
                      {{ t("noWishes") }}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      
      <section class="w-full py-24 px-6 text-center">
         <div class="max-w-3xl mx-auto">
            <div class="opacity-0 transition-all ease-out scroll-animate -translate-y-10 duration-[1000ms] mb-16">
              <h2 class="text-xs font-medium tracking-[0.4em] uppercase text-amber-200/80 mb-4">{{ t("giftSub") }}</h2>
              <p class="text-4xl font-serif text-white mb-4">{{ t("giftTitle") }}</p>
              <p class="text-sm text-white/60 font-light max-w-lg mx-auto leading-relaxed">{{ t("giftDesc") }}</p>
           </div>

            <div class="grid sm:grid-cols-2 gap-8 opacity-0 transition-all ease-out scroll-animate translate-y-10 duration-[1000ms] delay-200">
              
              <div class="relative group h-64 rounded-[32px] overflow-hidden p-8 flex flex-col justify-between border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-amber-500/10">
                 <div class="absolute inset-0 bg-[#121212] transition-colors group-hover:bg-[#161616]" />
                 <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                 <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors" />
                 
                 <div class="relative z-10 flex justify-between items-start">
                   <div class="w-12 h-8 bg-gradient-to-br from-amber-200/40 to-amber-500/20 rounded-md border border-white/10 backdrop-blur-sm self-start" />
                   <NuxtImg src="/img/keevia_logo.png" class="h-4 opacity-30 invert grayscale" v-if="hasMounted" />
                 </div>

                 <div class="relative z-10">
                   <p class="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-2">Account Number</p>
                   <p class="text-3xl font-mono text-white tracking-widest mb-6 border-b border-white/5 pb-4">1234567890</p>
                   <div class="flex justify-between items-end">
                     <div>
                       <p class="text-[9px] tracking-widest uppercase text-white/30">Card Holder</p>
                       <p class="text-sm font-serif text-amber-200/80">ROMEO</p>
                     </div>
                     <button @click="copyText('1234567890')" class="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-white transition-all flex items-center gap-2">
                       <UIcon name="mdi:content-copy" class="w-3 h-3"/> COPY
                     </button>
                   </div>
                 </div>
              </div>
              
              <div class="relative group h-64 rounded-[32px] overflow-hidden p-8 flex flex-col items-center justify-center border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-white/5">
                 <div class="absolute inset-0 bg-[#0a0a0a] border border-white/5" />
                 <div class="absolute inset-0 bg-[url('/img/bali_gold_motif.png')] bg-[length:200px] opacity-[0.03] grayscale pointer-events-none" />
                 
                 <UIcon name="mdi:gift-outline" class="relative z-10 w-12 h-12 text-amber-200/30 mb-4" />
                 <h3 class="relative z-10 text-xl font-serif text-white mb-2">{{ t("physGift") }}</h3>
                 <p class="relative z-10 text-[11px] text-white/50 font-light text-center max-w-[200px] mb-6">{{ t("physAddress") }}</p>
                 <a href="#" target="_blank" class="relative z-10 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[9px] uppercase tracking-widest font-bold text-white transition-all flex items-center gap-2">
                   <UIcon name="mdi:map-marker" class="w-3 h-3"/> OPEN MAPS
                 </a>
              </div>
            </div>
         </div>
      </section>

      
      <section class="w-full py-24 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto">
           <div class="text-center mb-16 opacity-0 transition-all ease-out scroll-animate -translate-y-10 duration-[1000ms]">
              <h2 class="text-xs font-medium tracking-[0.4em] uppercase text-amber-200/80 mb-4">{{ t("memoriesSub") }}</h2>
              <p class="text-4xl font-serif text-white mb-4">{{ t("memoriesTitle") }}</p>
           </div>
           
           <div class="flex items-start gap-4 sm:gap-8 opacity-0 transition-all ease-out scroll-animate translate-y-10 duration-[1000ms] delay-200">
             
             <div class="flex-1 flex flex-col gap-4 sm:gap-8">
                <div v-for="(img, i) in galleryImages.slice(0, 3)" :key="'l'+i" class="relative group overflow-hidden rounded-[32px] cursor-pointer shadow-2xl border border-white/5" @click="openLightbox(img)">
                   <NuxtImg :src="img" :class="['w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0', i === 1 ? 'aspect-square' : 'aspect-[3/4]']" loading="lazy" />
                   <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                     <UIcon name="mdi:magnify-plus-outline" class="w-10 h-10 text-white/70 scale-75 group-hover:scale-100 transition-transform duration-500" />
                   </div>
                </div>
             </div>
             
             
             <div class="flex-1 flex flex-col gap-4 sm:gap-8 mt-12 sm:mt-32">
                <div v-for="(img, i) in galleryImages.slice(3, 6)" :key="'r'+i" class="relative group overflow-hidden rounded-[32px] cursor-pointer shadow-2xl border border-white/5" @click="openLightbox(img)">
                   <NuxtImg :src="img" :class="['w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0', i === 0 ? 'aspect-square' : 'aspect-[3/4]']" loading="lazy" />
                   <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                     <UIcon name="mdi:magnify-plus-outline" class="w-10 h-10 text-white/70 scale-75 group-hover:scale-100 transition-transform duration-500" />
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      <section class="w-full py-32 px-6 bg-black text-center border-t border-white/5 relative flex flex-col justify-center min-h-[50vh]">
        <div class="opacity-0 transition-all ease-out scroll-animate translate-y-10 duration-[1000ms] max-w-2xl mx-auto space-y-6 flex-1 flex flex-col justify-center">
           <p class="text-sm md:text-base font-light text-white/80 leading-relaxed">{{ t("thankYouText") }}</p>
           <p class="text-2xl font-serif text-white italic">Romeo & Juliet</p>
        </div>
        
        
        <div class="relative z-20 text-center mt-auto pt-16 text-white/40 text-xs md:text-sm">
          <div class="flex justify-center mb-6">
            <a
              href="https://instagram.com/keevia.id"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-amber-400/20 hover:border-amber-300 transition-all hover:scale-110"
            >
              <UIcon
                name="mdi:instagram"
                class="w-5 h-5 text-amber-200"
              />
            </a>
          </div>
          <p>&copy; 2026 Keevia.id. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.text-shimmer {
  background: linear-gradient(
    to bottom right,
    #ffffff 20%,
    #fde68a 40%,
    #fbbf24 50%,
    #fde68a 60%,
    #ffffff 80%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 5s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(251, 191, 36, 0.3);
  border-radius: 50%;
  pointer-events: none;
  animation: float-up 10s linear infinite;
}

@keyframes float-up {
  0% { transform: translateY(100vh) scale(0); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}
</style>

<script setup lang="ts">

import { ref, onMounted, computed, inject, watch, nextTick, onUnmounted, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'


const images = ref<string[]>([
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png',
  '/img/blossom_showcase.png' 
])

const hasMounted = ref(false)
const current = ref(0)
let _interval: number | undefined

const nextSlide = () => {
  current.value = (current.value + 1) % images.value.length
}

const prevSlide = () => {
  current.value
    = (current.value - 1 + images.value.length) % images.value.length
}


const rightPanel = ref<HTMLElement | null>(null)
const thumbContainer = ref<HTMLElement | null>(null)
const thumbs = ref<HTMLElement[]>([])


const scrollThumbIntoView = () => {
  nextTick(() => {
    if (!thumbContainer.value || !thumbs.value.length) return
    const container = thumbContainer.value
    const activeThumb = thumbs.value[current.value]
    if (!activeThumb) return

    const containerRect = container.getBoundingClientRect()
    const thumbRect = activeThumb.getBoundingClientRect()


    const scrollLeftTo = activeThumb.offsetLeft - (containerRect.width / 2) + (activeThumb.offsetWidth / 2)
    container.scrollTo({
      left: scrollLeftTo,
      behavior: 'smooth'
    })
  })
}


watch(current, () => {
  scrollThumbIntoView()
})



const openLightbox = (src: string) => {
  const lightbox = document.createElement('div')
  lightbox.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer'
  lightbox.innerHTML = `<img src="${src}" class="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-lg" />`
  lightbox.onclick = () => lightbox.remove()
  document.body.appendChild(lightbox)
}


const audioControl = inject('audioControl') as {
  isPlaying: Ref<boolean>
  toggleAudio: () => void
  audio: Ref<HTMLAudioElement | null>
} | undefined

const route = useRoute()

const dict = {
  id: {
    weddingOf: "Pawiwahan Of",
    dateFull: "Selasa, 3 Februari 2026",
    toYth: "Kepada Yth.",
    openingMsg: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.",
    openBtn: "BUKA UNDANGAN",
    bibleQuote: "Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.",
    bibleVerse: "Rg Veda X.85.42",
    theGroom: "The Groom",
    sonOf: "Putra Pertama dari",
    parentsGroom: "Bapak Ahmad & Ibu Siti",
    theBride: "The Bride",
    daughterOf: "Putri Pertama dari",
    parentsBride: "Bapak Ahmad & Ibu Siti",
    journeySub: "A Journey in Love",
    journeyTitle: "The Unfinished Chapter",
    ch1DateAbbr: "Juli 2023",
    ch1DateFull: "Juli 2023",
    ch1Title: "The Unexpected Comeback",
    ch1Desc: "Pada Juli 2023, Romeo & Juliet dipertemukan kembali. Sebuah kebetulan yang tidak pernah direncanakan, namun menjadi awal dari kisah yang baru. Benih-benih cinta mulai tumbuh dari percakapan sederhana menjadi lebih bermakna.",
    ch2DateAbbr: "2023 - 2025",
    ch2DateFull: "2023 - 2025",
    ch2Title: "The Beautiful Mess",
    ch2Desc: "Sebagai dua individu yang berbeda karakter, perjalanan kami dipenuhi warna. Ada tawa, tangis, hingga momen-momen manis yang membentuk fondasi hubungan kami menjadi lebih kuat dan percaya satu sama lain setiap harinya.",
    ch3DateAbbr: "Maret 2026",
    ch3DateFull: "Maret 2026",
    ch3Title: "The Forever Chapter",
    ch3Desc: "Perjalanan panjang ini akhirnya membawa Romeo & Juliet ke titik tujuan yang indah. Dengan restu Tuhan dan kedua orang tua, kami mantap melangkah bersisian untuk memulai babak kehidupan yang baru, selamanya.",
    saveOurDate: "Save Our Date",
    dateMain: "Rabu, 25 Maret 2026",
    days: "Hari",
    hours: "Jam",
    minutes: "Menit",
    seconds: "Detik",
    saveToCal: "Save to Calendar",
    pemberkatanTitle: "Pernikahan",
    pemberkatanTime: "07.00 - 11.00 WITA",
    pemberkatanLocation: "jl Streefood",
    resepsiTitle: "Resepsi Pernikahan",
    resepsiTime: "15.00 - 22.00 WITA",
    resepsiLocation: "Jl. Streefood",
    openMap: "Buka di Google Maps",
    rsvpSub: "RSVP & Wishes",
    rsvpTitle: "Kehadiran Anda",
    rsvpDesc: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.",
    fullName: "Nama Lengkap",
    fullNamePlaceholder: "Tuliskan nama Anda",
    confirmAttendance: "Konfirmasi Kehadiran",
    attendYes: "Ya, Saya Hadir",
    attendNo: "Tidak Hadir",
    wishes: "Ucapan & Doa",
    wishesPlaceholder: "Berikan doa terbaik Anda untuk kedua mempelai",
    sending: "Mengirim...",
    sentSuccess: "Berhasil Dikirim",
    sentFailed: "Gagal, Coba Lagi",
    sendBtn: "Kirim RSVP",
    wishesTitle: "Doa & Ucapan",
    messagesCount: "Pesan",
    attendBadge: "✔️ Hadir",
    absentBadge: "❌ Tidak Hadir",
    noWishes: "Belum ada ucapan. Jadilah yang pertama!",
    giftSub: "Wedding Gift",
    giftTitle: "Tanda Kasih",
    giftDesc: "Kehadiran dan doa restu Anda adalah kado terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih berupa kado fisik maupun digital, dapat melalui opsi di bawah ini.",
    physGift: "Kirim Kado Fisik",
    physAddress: "Jl. Streefodd",
    bankTransfer: "Transfer Bank",
    copyAcc: "Salin Rekening",
    digitalWallet: "Dompet Digital",
    copyNum: "Salin Nomor",
    memoriesSub: "Our Memories",
    memoriesTitle: "Gallery",
    tapEnlarge: "Ketuk untuk Memperbesar",
    thankYouText: "Terima kasih atas doa, cinta, dan kehadiran Bapak/Ibu/Saudara/i di hari bahagia kami.",
    thankYouSub: "Semoga kebahagiaan dan cinta selalu menyertai kita semua."
  },
  en: {
    weddingOf: "Pawiwahan Of",
    dateFull: "Tuesday, February 3rd 2026",
    toYth: "Dear",
    openingMsg: "It is an honor and joy for us if you would be willing to attend and give your blessings.",
    openBtn: "OPEN INVITATION",
    bibleQuote: '“So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”',
    bibleVerse: "Matthew 19:6 & Mark 10:6-8",
    theGroom: "The Groom",
    sonOf: "First Son of",
    parentsGroom: "Mr. Ahmad & Mrs. Siti",
    theBride: "The Bride",
    daughterOf: "First Daughter of",
    parentsBride: "Mr. Ahmad & Mrs. Siti",
    journeySub: "A Journey in Love",
    journeyTitle: "The Unfinished Chapter",
    ch1DateAbbr: "July 2023",
    ch1DateFull: "July 2023",
    ch1Title: "The Unexpected Comeback",
    ch1Desc: "In July 2023, Romeo & Juliet reunited. An unplanned coincidence that became the start of a new story. Seeds of love began to grow from simple conversations into something more meaningful.",
    ch2DateAbbr: "2023 - 2025",
    ch2DateFull: "2023 - 2025",
    ch2Title: "The Beautiful Mess",
    ch2Desc: "As two individuals with different characters, our journey was colorful. There were laughs, tears, and sweet moments that built the foundation of our relationship, making us stronger and trusting each other more every day.",
    ch3DateAbbr: "March 2026",
    ch3DateFull: "March 2026",
    ch3Title: "The Forever Chapter",
    ch3Desc: "This long journey finally brought Romeo & Juliet to a beautiful destination. With God's blessing and our parents, we confidently step together to start a new chapter of life, forever.",
    saveOurDate: "Save Our Date",
    dateMain: "Wednesday, January 1st 2026",
    days: "Days",
    hours: "Hours",
    minutes: "Mins",
    seconds: "Secs",
    saveToCal: "Save to Calendar",
    pemberkatanTitle: "Holy Matrimony",
    pemberkatanTime: "07.00 - 11.00 WITA",
    pemberkatanLocation: "Jl. StreetFood",
    resepsiTitle: "Wedding Reception",
    resepsiTime: "15.00 - 22.00 WITA",
    resepsiLocation: "Jl. Streefood",
    openMap: "Open in Google Maps",
    rsvpSub: "RSVP & Wishes",
    rsvpTitle: "Your Presence",
    rsvpDesc: "It is an honor and joy for us if you would be willing to attend and give your blessings.",
    fullName: "Full Name",
    fullNamePlaceholder: "Write your name",
    confirmAttendance: "Confirm Attendance",
    attendYes: "Yes, I will attend",
    attendNo: "Sorry, I cannot attend",
    wishes: "Wishes & Prayers",
    wishesPlaceholder: "Give your best wishes for the bride and groom",
    sending: "Sending...",
    sentSuccess: "Successfully Sent",
    sentFailed: "Failed, Try Again",
    sendBtn: "Send RSVP",
    wishesTitle: "Wishes & Prayers",
    messagesCount: "Messages",
    attendBadge: "✔️ Attending",
    absentBadge: "❌ Not Attending",
    noWishes: "No wishes yet. Be the first to send one!",
    giftSub: "Wedding Gift",
    giftTitle: "Token of Love",
    giftDesc: "Your presence and blessings are the best gifts for us. However, if you wish to give a token of love in the form of a physical or digital gift, you can use the options below.",
    physGift: "Send Physical Gift",
    physAddress: "Jl. Steetfood",
    bankTransfer: "Bank Transfer",
    copyAcc: "Copy Account",
    digitalWallet: "Digital Wallet",
    copyNum: "Copy Number",
    memoriesSub: "Our Memories",
    memoriesTitle: "Gallery",
    tapEnlarge: "Tap to Enlarge",
    thankYouText: "Thank you for the prayers, love, and your presence on our happy day.",
    thankYouSub: "May happiness and love always be with us all."
  }
}

useSeoMeta({
  title: 'Tema Bali Luxury - Keevia Digital Invitation',
  description: 'Undangan pernikahan digital premium dengan nuansa ukiran Bali yang mewah, emas elegan, dan fitur interaktif lengkap karya Keevia.',
  ogTitle: 'Tema Bali Luxury - Keevia Digital Invitation',
  ogDescription: 'Undangan pernikahan digital premium dengan nuansa ukiran Bali yang mewah, emas elegan, dan fitur interaktif lengkap karya Keevia.',
  ogImage: '/img/bali_vector_pattern_gold.png',
  twitterCard: 'summary_large_image',
})

const lang = computed(() => {
  const l = route.query.lang as string
  return (l === 'en' ? 'en' : 'id')
})

const t = (key: keyof typeof dict.id) => dict[lang.value as 'id'|'en'][key]

const guestName = computed(() => (route.query.to as string) || 'Tamu Undangan')

const isOpen = ref(false)


const groomImages = ref([
  '/img/bali_vector_pattern_gold.png',
  '/img/bali_vector_pattern.png'
])
const brideImages = ref([
  '/img/bali_vector_pattern_gold.png',
  '/img/bali_vector_pattern.png'
])
const groomImgIndex = ref(0)
const brideImgIndex = ref(0)
let carouselInterval: ReturnType<typeof setInterval>

const openInvitation = () => {
  isOpen.value = true
  document.body.classList.remove('overflow-hidden')

  nextTick(() => {
    initScrollAnimations()
  })

  if (audioControl?.audio.value && !audioControl.isPlaying.value) {
    const playPromise = audioControl.audio.value.play()
    if (playPromise !== undefined) {
      playPromise.catch(e => console.warn('Audio prevented:', e))
    }
    audioControl.isPlaying.value = true
  }


  carouselInterval = setInterval(() => {
    groomImgIndex.value = (groomImgIndex.value + 1) % groomImages.value.length
    brideImgIndex.value = (brideImgIndex.value + 1) % brideImages.value.length
  }, 4000)

  startCountdown()


  document.querySelectorAll('video').forEach(vid => {
    const playPromise = vid.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  })
}


watch(isOpen, (val) => {
  if (val) {
    _interval = window.setInterval(nextSlide, 4000)
  } else {
    clearInterval(_interval)
    current.value = 0
  }
})

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10', '-translate-y-10', 'translate-x-10', '-translate-x-10', 'scale-95')
        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))
}

onMounted(() => {
  hasMounted.value = true
  document.querySelectorAll('video').forEach(vid => {
    const playPromise = vid.play()
    if (playPromise !== undefined) {
      playPromise.catch(e => console.warn('Autoplay prevented:', e))
    }
  })

  setTimeout(() => {
    initScrollAnimations()
  }, 500)

  document.body.classList.add('overflow-hidden')

  


  if (thumbContainer.value) {

  }
})


const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
})

const saveOurDate = new Date('January 1, 2026 09:00:00').getTime()
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


const formatDate = (d: Date) => new Date(d).toLocaleString('id-ID', {
  dateStyle: 'medium',
  timeStyle: 'short'
})

const generateParticleStyle = () => {
  const left = Math.random() * 100
  const duration = 10 + Math.random() * 10
  const delay = Math.random() * 5
  return {
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
    opacity: Math.random() * 0.5
  }
}

const galleryImages = [
  '/img/bali_aesthetic_hero.png',
  '/img/bali_gallery_1.png',
  '/img/bali_gallery_2.png',
  '/img/bali_aesthetic_hero.png',
  '/img/bali_gallery_1.png',
  '/img/bali_gallery_2.png'
]

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


  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translate(-50%, -20px)'
    setTimeout(() => toast.remove(), 300)
  }, 2000)
}
</script>

<style>
html, body {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
}

.scroll-animate {
  will-change: opacity, transform;
  transform: translateZ(0); 
  backface-visibility: hidden;
}
</style>
