<template>
  <div class="relative w-full min-h-[100dvh] text-[#3d3d3d] font-sans selection:bg-[#d4c5b9] selection:text-white flex flex-col">
    <NuxtLink
      to="/"
      class="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-xs font-medium tracking-wide transition-all hover:bg-white/80"
    >
      <UIcon name="mdi:arrow-left" class="w-4 h-4" /> Kembali
    </NuxtLink>

    <!-- FULL PAGE BACKGROUND VIDEO -->
    <div class="fixed inset-0 z-0 bg-black pointer-events-none">
      <video 
        src="/video/wedding-video.mp4" 
        autoplay 
        loop 
        muted 
        playsinline 
        class="w-full h-full object-cover opacity-60 filter grayscale"
      ></video>
      <div class="absolute inset-0 bg-[#FAF8F5]/60 backdrop-blur-[2px]"></div>
    </div>

    <!-- COVER: Elegant, minimalist typography -->
    <section class="relative z-10 w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div class="relative z-10 flex flex-col items-center justify-center w-full max-w-lg mt-10">
        <p class="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#8a817c] text-halo">The Wedding Of</p>
        <h1 class="text-6xl md:text-8xl font-serif mb-6 text-[#4a4036] leading-tight select-none text-halo">
          James <span class="italic font-light">&amp;</span> Natalia
        </h1>
        <p class="text-xs tracking-[0.3em] text-[#8a817c] mb-12 uppercase text-halo">Monday, 12 Jan 2026</p>

        <div class="w-full max-w-sm bg-white/70 backdrop-blur-md border border-white/60 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <template v-if="!isOpen">
            <p class="text-[10px] tracking-[0.3em] uppercase mb-2 text-[#8a817c]">Kepada Yth.</p>
            <p class="text-xl font-serif mb-6 text-[#4a4036]">{{ guestName }}</p>
            <button
              class="w-full py-3 rounded-lg text-[10px] tracking-[0.2em] font-medium uppercase transition-all hover:bg-[#4a4036] hover:text-white bg-[#8a817c] text-white shadow-sm"
              @click="openInvitation"
            >Buka Undangan</button>
          </template>
          <template v-else>
            <p class="text-sm italic text-[#8a817c] leading-relaxed mb-3">"We apologize for any misspelling of names or titles."</p>
          </template>
        </div>
      </div>

      <div v-if="isOpen" class="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-[#8a817c] animate-bounce text-halo">
        <span class="text-[10px] tracking-widest uppercase">Scroll</span>
        <UIcon name="mdi:chevron-down" class="w-5 h-5 line-halo" />
      </div>
    </section>

    <!-- CONTENT -->
    <div v-if="isOpen" class="relative z-10 flex-1 flex flex-col">
      
      <!-- QUOTE SECTION -->
      <section class="py-32 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <div class="relative py-12 px-6 md:px-16 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 shadow-xl">
          <!-- Decorative borders -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#8a817c]/40"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#8a817c]/40"></div>

          <p class="text-[10px] tracking-[0.4em] uppercase mb-10 text-[#8a817c]">The Beginning of Forever</p>
          <p class="text-sm md:text-base italic leading-loose text-[#4a4036] font-serif">
            "Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih, Modamānau sve grhe."
          </p>
          <p class="text-[10px] tracking-widest mt-6 text-[#8a817c] uppercase">(Rgveda : X.85.42)</p>
          
          <p class="text-xs md:text-sm leading-relaxed text-[#5c544e] mt-10">
            Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
          </p>
        </div>
      </section>

      <!-- SEPARATOR -->
      <div class="w-px h-24 bg-gradient-to-b from-transparent via-[#8a817c]/30 to-transparent mx-auto"></div>

      <!-- PROFILE -->
      <section class="py-24 px-6 relative">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col items-center text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <div class="w-px h-16 bg-gradient-to-b from-transparent to-[#8a817c]/50 mb-6 line-halo"></div>
            <span class="text-[9px] font-medium tracking-[0.4em] text-[#8a817c] uppercase mb-4 text-halo">The Bride & Groom</span>
            <h2 class="text-4xl md:text-5xl font-serif text-[#4a4036] mb-6 select-none text-halo">Pasangan Mempelai</h2>
            <div class="w-12 h-px bg-[#8a817c]/30 line-halo"></div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 md:gap-16">
            <!-- Groom -->
            <div class="text-center bg-white/30 backdrop-blur-md border border-white/50 p-8 md:p-12 rounded-2xl shadow-[0_4px_30px_rgb(0,0,0,0.03)] scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-100 relative group overflow-hidden">
              <div class="w-40 h-56 md:w-48 md:h-64 mx-auto mb-8 relative rounded-t-full p-2 border border-[#8a817c]/20">
                <div class="w-full h-full rounded-t-full overflow-hidden relative z-10">
                  <img src="/img/blossom_showcase.png" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale sepia-[0.2]" />
                </div>
              </div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#8a817c] uppercase mb-4">The Groom</p>
              <h3 class="text-3xl font-serif text-[#4a4036] mb-4">James Hooper</h3>
              <p class="text-sm text-[#5c544e] mb-8 leading-relaxed font-light">Putra Pertama dari<br/><span class="font-medium text-[#4a4036]">Bapak Hooper & Ibu Hooper</span></p>
              <a href="#" class="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#8a817c] hover:text-[#4a4036] transition-colors"><UIcon name="mdi:instagram" class="w-3 h-3"/> @james</a>
            </div>
            <!-- Bride -->
            <div class="text-center bg-white/30 backdrop-blur-md border border-white/50 p-8 md:p-12 rounded-2xl shadow-[0_4px_30px_rgb(0,0,0,0.03)] scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-200 relative group overflow-hidden">
              <div class="w-40 h-56 md:w-48 md:h-64 mx-auto mb-8 relative rounded-t-full p-2 border border-[#8a817c]/20">
                <div class="w-full h-full rounded-t-full overflow-hidden relative z-10">
                  <img src="/img/blossom_showcase.png" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale sepia-[0.2]" />
                </div>
              </div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#8a817c] uppercase mb-4">The Bride</p>
              <h3 class="text-3xl font-serif text-[#4a4036] mb-4">Natalia Woods</h3>
              <p class="text-sm text-[#5c544e] mb-8 leading-relaxed font-light">Putri Kedua dari<br/><span class="font-medium text-[#4a4036]">Bapak Woods & Ibu Woods</span></p>
              <a href="#" class="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#8a817c] hover:text-[#4a4036] transition-colors"><UIcon name="mdi:instagram" class="w-3 h-3"/> @natalia</a>
            </div>
          </div>
        </div>
      </section>

      <!-- LOVE STORY -->
      <section class="py-24 px-6 max-w-4xl mx-auto relative cursor-default">
        <div class="flex flex-col items-center text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
          <div class="w-px h-16 bg-gradient-to-b from-transparent to-[#8a817c]/50 mb-6 line-halo"></div>
          <p class="text-[9px] font-medium tracking-[0.4em] text-[#8a817c] uppercase mb-4 text-halo">A Journey In Love</p>
          <h2 class="text-4xl md:text-5xl font-serif text-[#4a4036] mb-6 text-halo">Our Story</h2>
          <div class="w-12 h-px bg-[#8a817c]/30 line-halo"></div>
        </div>
        
        <div class="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-[#8a817c]/30 before:to-transparent">
          
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:gap-12 mb-12 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-[#8a817c]/30 bg-white/60 backdrop-blur-md shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#4a4036]">
              <UIcon name="mdi:heart-outline" class="w-4 h-4" />
            </div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-sm text-left hover:bg-white/60 transition-colors">
              <span class="text-[10px] font-bold tracking-widest text-[#8a817c] uppercase mb-2 block">First Met</span>
              <h3 class="text-xl font-serif mb-3 text-[#4a4036]">The Beginning</h3>
              <p class="text-sm leading-relaxed text-[#5c544e] font-light">
                James and Natalia’s love story began in a small coffee shop during a heavy downpour, where an accidental encounter sparked a warm conversation that united two souls. Over time, their relationship matured as they navigated the challenges of distance.
              </p>
            </div>
          </div>

          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:gap-12 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-200">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-[#8a817c]/30 bg-white/60 backdrop-blur-md shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#4a4036]">
              <UIcon name="mdi:ring" class="w-4 h-4" />
            </div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-2xl shadow-sm text-left hover:bg-white/60 transition-colors">
              <span class="text-[10px] font-bold tracking-widest text-[#8a817c] uppercase mb-2 block">Engagement</span>
              <h3 class="text-xl font-serif mb-3 text-[#4a4036]">The Sacred Vow</h3>
              <p class="text-sm leading-relaxed text-[#5c544e] font-light">
                Their journey reached a beautiful milestone on a quiet beach, where James knelt under the twilight sky to ask for Natalia’s hand. Without hesitation, she accepted his promise of loyalty, leading them to a wedding day filled with emotion and joy.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- EVENT -->
      <section class="py-24 px-6 relative">
        <div class="absolute inset-0 bg-[#4a4036] opacity-[0.03] pointer-events-none"></div>
        <div class="max-w-5xl mx-auto relative z-10">
          <div class="flex flex-col items-center text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <div class="w-px h-16 bg-gradient-to-b from-transparent to-[#8a817c]/50 mb-6 line-halo"></div>
            <p class="text-[9px] font-medium tracking-[0.4em] text-[#8a817c] uppercase mb-4 text-halo">The best is yet to come</p>
            <h2 class="text-4xl md:text-5xl font-serif text-[#4a4036] mb-6 text-halo">Wedding Event</h2>
            <div class="w-12 h-px bg-[#8a817c]/30 line-halo"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-white/50 backdrop-blur-md border border-white/60 p-10 lg:p-12 rounded-2xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.02)] scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-100 hover:-translate-y-1 hover:shadow-lg">
              <div class="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#8a817c]/20 flex items-center justify-center mb-6">
                <UIcon name="mdi:calendar-heart" class="w-5 h-5 text-[#8a817c]" />
              </div>
              <h3 class="text-2xl font-serif mb-4 text-[#4a4036]">Pawiwahan</h3>
              <p class="text-sm mb-1 text-[#5c544e]">Senin, 12 Januari 2026</p>
              <p class="text-sm mb-6 text-[#5c544e] font-medium">15:00 WITA - Selesai</p>
              <div class="w-8 h-px bg-[#8a817c]/40 mx-auto mb-6"></div>
              <p class="text-sm leading-relaxed text-[#5c544e] font-light mb-8">
                Taman Prakerti Bhuana, Gianyar<br>
                Bali 80513
              </p>
              <a href="#" class="inline-block py-3 px-8 text-[10px] font-medium tracking-[0.2em] uppercase transition-all bg-transparent text-[#4a4036] border border-[#4a4036] hover:bg-[#4a4036] hover:text-white rounded">Lihat Lokasi</a>
            </div>
            
            <div class="bg-white/50 backdrop-blur-md border border-white/60 p-10 lg:p-12 rounded-2xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.02)] scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-200 hover:-translate-y-1 hover:shadow-lg">
              <div class="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#8a817c]/20 flex items-center justify-center mb-6">
                <UIcon name="mdi:glass-flute" class="w-5 h-5 text-[#8a817c]" />
              </div>
              <h3 class="text-2xl font-serif mb-4 text-[#4a4036]">Resepsi</h3>
              <p class="text-sm mb-1 text-[#5c544e]">Senin, 12 Januari 2026</p>
              <p class="text-sm mb-6 text-[#5c544e] font-medium">18:00 WITA - Selesai</p>
              <div class="w-8 h-px bg-[#8a817c]/40 mx-auto mb-6"></div>
              <p class="text-sm leading-relaxed text-[#5c544e] font-light mb-8">
                Taman Prakerti Bhuana, Gianyar<br>
                Bali 80513
              </p>
              <a href="#" class="inline-block py-3 px-8 text-[10px] font-medium tracking-[0.2em] uppercase transition-all bg-transparent text-[#4a4036] border border-[#4a4036] hover:bg-[#4a4036] hover:text-white rounded">Lihat Lokasi</a>
            </div>
          </div>
        </div>
      </section>

      <!-- RSVP & UCAPAN -->
      <section class="py-24 px-6 max-w-5xl mx-auto">
        <div class="flex flex-col items-center text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
          <div class="w-px h-16 bg-gradient-to-b from-transparent to-[#8a817c]/50 mb-6 line-halo"></div>
          <p class="text-[9px] font-medium tracking-[0.4em] text-[#8a817c] uppercase mb-4 text-halo">Your Presence</p>
          <h2 class="text-4xl md:text-5xl font-serif text-[#4a4036] mb-6 text-halo">RSVP &amp; Best Wishes</h2>
          <div class="w-12 h-px bg-[#8a817c]/30 line-halo"></div>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <!-- FORM -->
          <div class="bg-white/60 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-2xl shadow-sm scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <h3 class="text-xl font-serif mb-6 text-[#4a4036]">Sampaikan Kehadiran</h3>
            <form @submit.prevent class="space-y-6">
              <div>
                <input type="text" placeholder="Nama Lengkap" class="w-full pb-3 border-b border-[#8a817c]/30 bg-transparent text-sm focus:outline-none focus:border-[#4a4036] transition-colors placeholder:text-[#5c544e]/50 font-light" required />
              </div>
              <div>
                <p class="text-[10px] tracking-widest text-[#8a817c] uppercase mb-3 block">Apakah Anda akan hadir?</p>
                <div class="flex gap-4">
                  <label class="cursor-pointer flex-1">
                    <input type="radio" name="hadir" class="peer sr-only" required>
                    <div class="py-3 text-center border border-[#8a817c]/30 bg-white/50 text-[11px] uppercase tracking-widest whitespace-nowrap peer-checked:bg-[#4a4036] peer-checked:border-[#4a4036] peer-checked:text-white transition-all rounded font-medium">Hadir</div>
                  </label>
                  <label class="cursor-pointer flex-1">
                    <input type="radio" name="hadir" class="peer sr-only">
                    <div class="py-3 text-center border border-[#8a817c]/30 bg-white/50 text-[11px] uppercase tracking-widest whitespace-nowrap peer-checked:bg-[#8a817c] peer-checked:border-[#8a817c] peer-checked:text-white transition-all rounded font-medium">Tidak Hadir</div>
                  </label>
                </div>
              </div>
              <div>
                <textarea rows="4" placeholder="Tuliskan ucapan dan doa terbaik Anda..." class="w-full p-4 border border-[#8a817c]/30 bg-transparent text-sm focus:outline-none focus:border-[#4a4036] transition-colors placeholder:text-[#5c544e]/50 font-light rounded-lg resize-none" required></textarea>
              </div>
              <button class="w-full py-4 bg-[#4a4036] text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#342c23] transition-colors rounded">Kirim RSVP</button>
            </form>
          </div>
          
          <!-- MESSAGES -->
          <div class="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-10 rounded-2xl shadow-sm h-full max-h-[550px] overflow-y-auto scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-200">
            <h3 class="text-xl font-serif mb-6 text-[#4a4036] border-b border-[#8a817c]/20 pb-4">Doa & Ucapan</h3>
            <div class="flex flex-col items-center justify-center text-[#8a817c] text-sm py-20 opacity-60">
              <UIcon name="mdi:message-outline" class="w-8 h-8 mb-4 opacity-50" />
              <p class="font-light">Belum ada ucapan terbaru.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- WEDDING GIFT -->
      <section class="py-32 px-6 text-center relative mt-12 bg-white/20 backdrop-blur-sm border-t border-white/40">
        <div class="flex flex-col items-center max-w-2xl mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-1000 bg-white/70 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white/80 shadow-sm relative z-10">
          <UIcon name="mdi:gift-outline" class="w-8 h-8 text-[#8a817c] mb-6" />
          <p class="text-[9px] font-medium tracking-[0.4em] text-[#8a817c] uppercase mb-4">Tanda Kasih</p>
          <h2 class="text-4xl md:text-5xl font-serif text-[#4a4036] mb-6">Wedding Gift</h2>
          <div class="w-12 h-px bg-[#8a817c]/30 mb-8"></div>
          <p class="text-sm text-[#5c544e] mx-auto mb-10 leading-relaxed font-light text-center">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Namun jika Bapak/Ibu/Saudara/i bermisi untuk memberikan tanda kasih, dapat melalui tautan di bawah ini.
          </p>
          <button class="py-4 px-10 bg-transparent text-[#4a4036] border border-[#4a4036] text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-[#4a4036] hover:text-white transition-all rounded">
            Kirim Tanda Kasih
          </button>
        </div>
      </section>

      <!-- GALLERY -->
      <section class="py-32 px-6 relative border-t border-white/20">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col items-center text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-1000">
            <div class="w-px h-16 bg-gradient-to-b from-transparent to-[#8a817c]/50 mb-6 line-halo"></div>
            <p class="text-[9px] font-medium tracking-[0.4em] text-[#8a817c] uppercase mb-4 text-halo">Our Memories</p>
            <h2 class="text-4xl md:text-5xl font-serif text-[#4a4036] mb-6 text-halo">Gallery</h2>
            <div class="w-12 h-px bg-[#8a817c]/30 line-halo"></div>
          </div>

          <div class="columns-2 md:columns-3 gap-4 space-y-4 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 delay-100">
            <div 
              v-for="(img, idx) in images" 
              :key="idx" 
              class="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative bg-white/20 border border-white/30 p-1"
              @click="openLightbox(img)"
            >
              <div class="overflow-hidden rounded-lg relative h-full w-full">
                <img :src="img" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale sepia-[0.2]" :class="idx % 3 === 0 ? 'aspect-square' : idx % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'" />
              </div>
              <div class="absolute inset-0 bg-[#4a4036]/0 group-hover:bg-[#4a4036]/60 transition-all duration-500 flex items-center justify-center rounded-xl mx-1 my-1 opacity-0 group-hover:opacity-100 pointer-events-none">
                <UIcon name="mdi:magnify-plus-outline" class="w-8 h-8 text-white transition-all transform scale-50 group-hover:scale-100 duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- FOOTER -->
      <section class="py-20 flex flex-col items-center justify-center bg-[#2b2723] text-[#FAF8F5] relative select-none mt-auto">
        <h2 class="text-4xl md:text-5xl font-serif mb-4 font-light text-white/90">James <span class="italic text-white/60">&</span> Natalia</h2>
        <p class="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-12">The Beginning of Always</p>
        
        <div class="flex gap-4 mb-10">
          <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors"><UIcon name="mdi:instagram" class="w-4 h-4"/></a>
        </div>
        
        <div class="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mb-10"></div>
        <p class="text-[10px] tracking-widest text-white/30 uppercase">&copy; 2026 Keevia.id. All Rights Reserved.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const guestName = computed(() => (route.query.to as string) || 'Nama Tamu')
const audioControl = inject('audioControl') as any

const images = ref<string[]>(Array(6).fill('/img/blossom_showcase.png'))

const openLightbox = (src: string) => {
  const lb = document.createElement('div')
  lb.className = 'fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center cursor-pointer backdrop-blur-sm opacity-0 transition-opacity duration-300'
  lb.innerHTML = `<img src="${src}" class="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl filter grayscale sepia-[0.2]" />
                  <p class="text-white/50 text-[10px] tracking-[0.3em] font-medium uppercase mt-6">Ketuk di mana saja untuk menutup</p>`
  
  document.body.appendChild(lb)
  setTimeout(() => { lb.style.opacity = '1' }, 10) // trigger animation

  lb.onclick = () => {
    lb.style.opacity = '0'
    setTimeout(() => lb.remove(), 300)
  }
}

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.remove('opacity-0', 'translate-y-8')
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el))
}

const openInvitation = () => {
  isOpen.value = true
  document.body.classList.remove('overflow-hidden')
  nextTick(() => {
    setTimeout(initScrollAnimations, 100)
    if (audioControl?.audio?.value && !audioControl.isPlaying?.value) {
      audioControl.audio.value.play().catch(() => {})
      audioControl.isPlaying.value = true
    }
  })
}

onMounted(() => {
  document.body.classList.add('overflow-hidden')
  setTimeout(initScrollAnimations, 500)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
.font-sans {
  font-family: 'Inter', sans-serif;
}
.text-halo {
  text-shadow: 0 0 15px rgba(250,248,245,0.9), 0 0 30px rgba(250,248,245,1), 0 0 45px rgba(250,248,245,1);
}
.line-halo {
  box-shadow: 0 0 10px rgba(250,248,245,0.9), 0 0 20px rgba(250,248,245,1);
  background-color: rgba(138, 129, 124, 0.7) !important;
}
</style>
