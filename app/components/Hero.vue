<template>
  <div class="h-screen flex overflow-hidden">
    <!-- LEFT PANEL (80%) -->
    <div class="hidden md:block md:w-4/5 h-screen relative overflow-hidden">

      <!-- Background Image -->

      <img src="/img/background-hero.webp" class="absolute inset-0 w-full h-full object-cover scale-105">

      <!-- Elegant Overlay -->

      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

      <!-- Content -->

      <div class="absolute bottom-16 left-16 text-white z-10 max-w-xl">
        <!-- Small Label -->
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-px bg-pink-300"></div>
          <p class="tracking-[0.35em] text-xs uppercase text-pink-200">
            The Wedding Of
          </p>
        </div>

        <!-- Names -->
        <h1 class="text-6xl lg:text-7xl font-light font-serif leading-tight tracking-wide">
          Gian <span class="text-pink-200">&</span><br>
          Kristiany
        </h1>

        <!-- Date -->
        <p class="mt-6 text-sm tracking-[0.25em] uppercase text-white/80">
          Selasa, 3 Februari 2026
        </p>
      </div>

    </div>


    <!-- RIGHT PANEL (20%) -->
    <div :class="[
      'relative lg:w-1/3 w-full h-screen transition-all duration-700',
      isOpen ? 'overflow-y-auto' : 'overflow-hidden'
    ]">
      <!-- BACKGROUND VIDEO UTAMA -->
      <div class="absolute inset-0 -z-10">
        <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover -z-10">
          <source src="/video/wedding-video.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black/50" />
      </div>

      <!-- HERO CONTENT -->
      <div class="relative z-10 h-screen flex flex-col justify-between text-white text-center px-8 py-10">

        <!-- Heading -->
        <div>
          <p class="tracking-[0.4em] text-[11px] mb-4 uppercase text-white/80">
            The Wedding Of
          </p>

          <h1 class="text-4xl md:text-5xl font-light font-serif tracking-wide">
            Gian <span class="text-pink-200">&</span> Kristiany
          </h1>

          <p class="mt-5 text-sm text-white/80 tracking-wide">
            Selasa, 3 Februari 2026
          </p>
        </div>

        <!-- Invitation Box -->
        <div class="max-w-md mx-auto text-center">

          <template v-if="!isOpen">

            <p class="text-xs tracking-[0.3em] uppercase text-white/70">
              Kepada Yth.
            </p>

            <p class="text-xl font-light mt-3 text-white">
              {{ guestName }}
            </p>

            <p class="text-[11px] text-white/60 mt-4 leading-relaxed">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
            </p>

            <button
              class="mt-6 px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition-all tracking-[0.25em] text-xs hover:scale-105 cursor-pointer"
              @click="openInvitation">
              BUKA UNDANGAN
            </button>

          </template>

          <template v-else>

            <p class="text-sm md:text-base italic leading-relaxed text-white/90">
              “Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu,
              apa yang telah dipersatukan Allah tidak boleh diceraikan manusia.”
            </p>

            <p class="text-xs mt-3 text-pink-200 tracking-wide">
              Matius 19:6 & Markus 10:6-8
            </p>

          </template>

        </div>

      </div>

      <!-- SCROLL CONTENT -->
      <div v-if="isOpen" class="relative z-10 bg-transparent text-white h-screen scroll-smooth overflow-y-auto
           sm:snap-y sm:snap-mandatory">
        <!-- MEMPELAI (The Couple) -->
        <section class="relative w-full bg-[#1a1a1a]">
          <!-- Vertical Layout (Stacked) -->
          <div class="flex flex-col w-full text-left">

            <!-- MEMPELAI PRIA -->
            <div class="relative w-full h-screen snap-start group overflow-hidden">
              <img src="/img/groom-pria.jpg" alt="Groom Gian Felix Sinaga"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-110">
              <!-- Elegant Overlay Gradients -->
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

              <!-- Content -->
              <div class="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24 z-10 w-full max-w-7xl mx-auto">
                <div
                  class="space-y-4 max-w-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-px bg-pink-300" />
                    <p class="text-xs tracking-[0.3em] uppercase text-pink-200">The Groom</p>
                  </div>

                  <h2 class="text-5xl md:text-6xl lg:text-7xl font-light text-white font-serif tracking-wide">
                    Gian Felix<br><span class="italic text-pink-100">Sinaga</span>
                  </h2>

                  <div class="pt-4 space-y-1">
                    <p class="text-base md:text-lg text-white/80 font-light">
                      Putra Pertama dari
                    </p>
                    <p class="text-base md:text-lg text-white font-medium">
                      Bapak Ahmad & Ibu Siti
                    </p>
                  </div>

                  <!-- Sosial Media -->
                  <div
                    class="pt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer"
                      class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-pink-400 hover:border-pink-300 transition-all hover:scale-110">
                      <UIcon name="mdi:instagram" class="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- MEMPELAI WANITA -->
            <div class="relative w-full h-screen snap-start group overflow-hidden">
              <img src="/img/groom-wanita.jpg" alt="Bride Kristiany Munthe"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-110">
              <!-- Elegant Overlay Gradients -->
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              <div class="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />

              <!-- Content (Aligned right on all screens to balance the Groom) -->
              <div
                class="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24 z-10 items-end text-right w-full max-w-7xl mx-auto">
                <div
                  class="space-y-4 max-w-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-end">

                  <div class="flex items-center gap-4 flex-row-reverse">
                    <div class="w-12 h-px bg-pink-300" />
                    <p class="text-xs tracking-[0.3em] uppercase text-pink-200">The Bride</p>
                  </div>

                  <h2 class="text-5xl md:text-6xl lg:text-7xl font-light text-white font-serif tracking-wide">
                    Kristiany<br><span class="italic text-pink-100">Munthe</span>
                  </h2>

                  <div class="pt-4 space-y-1">
                    <p class="text-base md:text-lg text-white/80 font-light">
                      Putri Pertama dari
                    </p>
                    <p class="text-base md:text-lg text-white font-medium">
                      Bapak Ahmad & Ibu Siti
                    </p>
                  </div>

                  <!-- Sosial Media -->
                  <div
                    class="pt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer"
                      class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-pink-400 hover:border-pink-300 transition-all hover:scale-110">
                      <UIcon name="mdi:instagram" class="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- JOURNEY OF LOVE -->
        <section class="min-h-screen relative snap-start flex flex-col justify-center py-16 md:py-24">
          <div class="absolute inset-0 -z-10">
            <video autoplay muted loop playsinline class="w-full h-full object-cover filter brightness-75 contrast-125">
              <source src="/video/wedding-video.mp4" type="video/mp4">
            </video>
            <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>

          <div class="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16 md:mb-20">
              <div class="flex justify-center mb-4">
                <i class="mdi mdi-flower-tulip-outline text-4xl md:text-5xl text-pink-300 animate-pulse" />
              </div>
              <p class="text-xs md:text-sm tracking-[0.3em] uppercase text-pink-200/90 font-medium">
                A Journey in Love
              </p>
              <h2 class="text-4xl md:text-5xl lg:text-5xl font-light text-white font-serif italic">
                The Unfinished Chapter
              </h2>
            </div>

            <!-- Timeline -->
            <div class="relative">
              <!-- Timeline Center Line -->
              <div
                class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-300/50 to-transparent -translate-x-1/2" />

              <div class="space-y-12 md:space-y-24">
                <!-- Event 1 -->
                <div class="relative flex flex-col md:flex-row items-center md:items-start group">
                  <div
                    class="hidden md:flex absolute left-1/2 w-4 h-4 rounded-full bg-pink-300 -translate-x-1/2 mt-6 shadow-[0_0_15px_rgba(249,168,212,0.6)] group-hover:scale-150 transition-transform duration-500" />
                  <!-- Left Date/Title for Desktop -->
                  <div class="md:w-1/2 md:pr-12 text-center md:text-right w-full mb-6 md:mb-0 space-y-2 pr-0 pl-0">
                    <div
                      class="inline-block px-4 py-1.5 rounded-full bg-pink-300/20 text-pink-200 text-xs font-semibold tracking-widest uppercase mb-2 md:hidden">
                      Juli 2023</div>
                    <div class="hidden md:block mt-4">
                      <span class="text-4xl font-light text-pink-200/40 block mb-1">01</span>
                      <h3 class="text-2xl md:text-3xl font-semibold text-white tracking-wide">
                        The Unexpected Comeback
                      </h3>
                      <p class="text-pink-300/80 font-medium mt-1">Juli 2023</p>
                    </div>
                  </div>
                  <!-- Right Content -->
                  <div class="md:w-1/2 md:pl-12 w-full pl-0">
                    <div
                      class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors duration-500 shadow-xl relative overflow-hidden group-hover:-translate-y-2 transform transition-all">
                      <div class="absolute -right-6 -top-6 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />
                      <div class="md:hidden mb-4 border-b border-white/10 pb-4">
                        <h3 class="text-xl font-semibold text-white">The Unexpected Comeback</h3>
                      </div>
                      <p class="text-white/80 leading-relaxed text-sm md:text-base font-light">
                        Pada Juli 2023, Gian & Munthe dipertemukan kembali. Sebuah kebetulan yang tidak pernah
                        direncanakan,
                        namun menjadi awal dari kisah yang baru. Benih-benih cinta mulai tumbuh dari percakapan
                        sederhana
                        menjadi lebih bermakna.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Event 2 -->
                <div class="relative flex flex-col md:flex-row-reverse items-center md:items-start group">
                  <div
                    class="hidden md:flex absolute left-1/2 w-4 h-4 rounded-full bg-pink-300 -translate-x-1/2 mt-6 shadow-[0_0_15px_rgba(249,168,212,0.6)] group-hover:scale-150 transition-transform duration-500" />
                  <!-- Right Date/Title for Desktop -->
                  <div class="md:w-1/2 md:pl-12 text-center md:text-left w-full mb-6 md:mb-0 space-y-2 pl-0 pr-0">
                    <div
                      class="inline-block px-4 py-1.5 rounded-full bg-pink-300/20 text-pink-200 text-xs font-semibold tracking-widest uppercase mb-2 md:hidden">
                      2023 - 2025</div>
                    <div class="hidden md:block mt-4">
                      <span class="text-4xl font-light text-pink-200/40 block mb-1">02</span>
                      <h3 class="text-2xl md:text-3xl font-semibold text-white tracking-wide">
                        The Beautiful Mess
                      </h3>
                      <p class="text-pink-300/80 font-medium mt-1">2023 - 2025</p>
                    </div>
                  </div>
                  <!-- Left Content -->
                  <div class="md:w-1/2 md:pr-12 w-full pr-0 text-left md:text-right">
                    <div
                      class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors duration-500 shadow-xl relative overflow-hidden group-hover:-translate-y-2 transform transition-all">
                      <div class="absolute -left-6 -bottom-6 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />
                      <div class="md:hidden mb-4 border-b border-white/10 pb-4 text-left">
                        <h3 class="text-xl font-semibold text-white">The Beautiful Mess</h3>
                      </div>
                      <p class="text-white/80 leading-relaxed text-sm md:text-base font-light">
                        Sebagai dua individu yang berbeda karakter, perjalanan kami dipenuhi warna. Ada tawa, tangis,
                        hingga
                        momen-momen manis yang membentuk fondasi hubungan kami menjadi lebih kuat dan percaya satu sama
                        lain
                        setiap harinya.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Event 3 -->
                <div class="relative flex flex-col md:flex-row items-center md:items-start group">
                  <div
                    class="hidden md:flex absolute left-1/2 w-4 h-4 rounded-full bg-pink-300 -translate-x-1/2 mt-6 shadow-[0_0_15px_rgba(249,168,212,0.6)] group-hover:scale-150 transition-transform duration-500" />
                  <!-- Left Date/Title for Desktop -->
                  <div class="md:w-1/2 md:pr-12 text-center md:text-right w-full mb-6 md:mb-0 space-y-2 pr-0 pl-0">
                    <div
                      class="inline-block px-4 py-1.5 rounded-full bg-pink-300/20 text-pink-200 text-xs font-semibold tracking-widest uppercase mb-2 md:hidden">
                      Maret 2026</div>
                    <div class="hidden md:block mt-4">
                      <span class="text-4xl font-light text-pink-200/40 block mb-1">03</span>
                      <h3 class="text-2xl md:text-3xl font-semibold text-white tracking-wide">
                        The Forever Chapter
                      </h3>
                      <p class="text-pink-300/80 font-medium mt-1">Maret 2026</p>
                    </div>
                  </div>
                  <!-- Right Content -->
                  <div class="md:w-1/2 md:pl-12 w-full pl-0">
                    <div
                      class="bg-gradient-to-br from-pink-500/20 to-white/5 backdrop-blur-md border border-pink-300/30 rounded-2xl p-6 md:p-8 hover:border-pink-300/60 transition-colors duration-500 shadow-[0_8px_32px_rgba(249,168,212,0.15)] relative overflow-hidden group-hover:-translate-y-2 transform transition-all text-left">
                      <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl" />
                      <div class="md:hidden mb-4 border-b border-pink-300/20 pb-4 text-left">
                        <h3 class="text-xl font-semibold text-white">The Forever Chapter</h3>
                      </div>
                      <p class="text-white/90 leading-relaxed text-sm md:text-base font-medium">
                        Perjalanan panjang ini akhirnya membawa Gian & Munthe ke titik tujuan yang indah. Dengan restu
                        Tuhan
                        dan kedua orang tua, kami mantap melangkah bersisian untuk memulai babak kehidupan yang baru,
                        selamanya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- SAVE OUR DATE -->
        <section class="min-h-screen relative snap-start flex flex-col justify-center py-16 md:py-24">
          <!-- Background Video with elegant overlay -->
          <div class="absolute inset-0 -z-10 bg-[#1a1a1a]">
            <!-- Elegant background alternative if video fails to load, maybe subtle static image or gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-black z-0" />
            <video autoplay muted loop playsinline
              class="w-full h-full object-cover opacity-60 z-10 relative mix-blend-screen">
              <source src="/video/wedding-video.mp4" type="video/mp4">
            </video>
            <!-- Vignette/Shadow overlay -->
            <div
              class="absolute inset-0 bg-black/40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20 pointer-events-none" />
          </div>

          <div class="relative z-30 max-w-4xl mx-auto text-center px-6 md:px-12 w-full">

            <!-- Main Content Container with Glassmorphism -->
            <div
              class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 lg:p-20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <!-- Decorative elements -->
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent opacity-50" />
              <div
                class="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-1000" />
              <div
                class="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-1000" />

              <div class="relative z-10 space-y-12">
                <!-- Header Title -->
                <div class="space-y-4">
                  <div class="flex justify-center mb-6">
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-2 my-auto" />
                    <i class="mdi mdi-flower-tulip-outline text-3xl md:text-4xl text-pink-300 mx-4" />
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-2 my-auto" />
                  </div>
                  <h2 class="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-pink-200/80">
                    Save Our Date
                  </h2>
                  <p class="text-3xl md:text-5xl font-serif italic font-light text-white tracking-wide mt-2">
                    Rabu, 25 Maret 2026
                  </p>
                </div>

                <!-- Countdown Timer -->
                <div class="py-8 border-y border-white/10 my-10">
                  <div class="grid grid-cols-4 gap-2 md:gap-6 max-w-2xl mx-auto">
                    <!-- Days -->
                    <div
                      class="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <span class="text-3xl md:text-5xl font-light text-white font-serif">{{ countdown.days }}</span>
                      <span
                        class="text-[10px] md:text-xs uppercase tracking-widest text-pink-200/70 mt-2 font-medium">Hari</span>
                    </div>
                    <!-- Hours -->
                    <div
                      class="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <span class="text-3xl md:text-5xl font-light text-white font-serif">{{ countdown.hours }}</span>
                      <span
                        class="text-[10px] md:text-xs uppercase tracking-widest text-pink-200/70 mt-2 font-medium">Jam</span>
                    </div>
                    <!-- Minutes -->
                    <div
                      class="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <span class="text-3xl md:text-5xl font-light text-white font-serif">{{ countdown.minutes }}</span>
                      <span
                        class="text-[10px] md:text-xs uppercase tracking-widest text-pink-200/70 mt-2 font-medium">Menit</span>
                    </div>
                    <!-- Seconds -->
                    <div
                      class="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <span class="text-3xl md:text-5xl font-light text-pink-300 font-serif">{{ countdown.seconds
                      }}</span>
                      <span
                        class="text-[10px] md:text-xs uppercase tracking-widest text-pink-200/70 mt-2 font-medium">Detik</span>
                    </div>
                  </div>

                  <div class="mt-8 flex justify-center">
                    <a href="/save-the-date.ics" download
                      class="inline-flex items-center gap-2 px-8 py-3 bg-pink-300 hover:bg-pink-400 text-gray-900 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,168,212,0.4)] hover:-translate-y-1">
                      <UIcon name="mdi:calendar-heart" class="w-5 h-5" />
                      Save to Calendar
                    </a>
                  </div>
                </div>

                <!-- Event Details -->
                <div class="flex flex-col gap-8 md:gap-10 text-left pt-2 max-w-xl mx-auto">
                  <!-- Pemberkatan -->
                  <div class="relative pl-6 md:pl-8 border-l border-pink-300/30">
                    <div
                      class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-pink-300 shadow-[0_0_10px_rgba(249,168,212,0.8)]" />
                    <h3 class="font-serif italic text-2xl text-white mb-2">Pemberkatan</h3>
                    <div class="space-y-3 text-white/80 font-light text-sm md:text-base">
                      <p class="flex items-center gap-3">
                        <UIcon name="mdi:clock-outline" class="w-4 h-4 text-pink-300/70" />
                        07.00 - 11.00 WITA
                      </p>
                      <p class="flex items-start gap-3">
                        <UIcon name="mdi:map-marker-outline" class="w-4 h-4 text-pink-300/70 mt-1 flex-shrink-0" />
                        <span class="leading-relaxed">Jl. Batu Luwih Kawan, Br. Bendul, Ds. Wongaya Gede, Penebel,
                          Tabanan</span>
                      </p>
                    </div>
                  </div>

                  <!-- Resepsi -->
                  <div class="relative pl-6 md:pl-8 border-l border-pink-300/30">
                    <div
                      class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-pink-300 shadow-[0_0_10px_rgba(249,168,212,0.8)]" />
                    <h3 class="font-serif italic text-2xl text-white mb-2">Wedding Reception</h3>
                    <div class="space-y-3 text-white/80 font-light text-sm md:text-base">
                      <p class="flex items-center gap-3">
                        <UIcon name="mdi:clock-outline" class="w-4 h-4 text-pink-300/70" />
                        15.00 - 22.00 WITA
                      </p>
                      <p class="flex items-start gap-3">
                        <UIcon name="mdi:map-marker-outline" class="w-4 h-4 text-pink-300/70 mt-1 flex-shrink-0" />
                        <span class="leading-relaxed">Jl. Tepuh Indah, Gang Kampung Baru, Br. Wongaya Kaja, Ds. Wongaya
                          Gede,
                          Penebel, Tabanan</span>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Maps Button -->
                <div class="pt-6">
                  <a href="https://www.google.com/maps/place/Jl.+Batu+Luwih+Kawan,+Penebel,+Tabanan" target="_blank"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300">
                    <UIcon name="mdi:google-maps" class="w-5 h-5 text-pink-300" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- RSVP -->
        <section class="min-h-screen relative snap-start flex flex-col justify-center py-16 md:py-24">
          <!-- Background Video with elegant overlay -->
          <div class="absolute inset-0 -z-10 bg-[#1a1a1a]">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-black z-0" />
            <video autoplay muted loop playsinline
              class="w-full h-full object-cover opacity-60 z-10 relative mix-blend-screen">
              <source src="/video/wedding-video.mp4" type="video/mp4">
            </video>
            <div
              class="absolute inset-0 bg-black/40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20 pointer-events-none" />
          </div>

          <div class="relative z-30 max-w-4xl mx-auto text-center px-6 md:px-12 w-full">

            <div class="flex flex-col gap-12">

              <!-- Top side: Header & Form -->
              <div class="space-y-8 lg:text-left">

                <!-- Judul + Intro -->
                <div class="space-y-4 text-center lg:text-left">
                  <div class="flex justify-center lg:justify-start mb-4">
                    <i class="mdi mdi-flower-tulip-outline text-3xl md:text-4xl text-pink-300" />
                  </div>
                  <h2 class="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-pink-200/80">
                    RSVP & Wishes
                  </h2>
                  <p class="text-4xl md:text-5xl font-serif italic font-light text-white tracking-wide mt-2">
                    Kehadiran Anda
                  </p>
                  <p class="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
                    untuk
                    memberikan doa restu.
                  </p>
                </div>

                <!-- Form RSVP -->
                <form
                  class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group space-y-6"
                  @submit.prevent="submitRSVP">
                  <div class="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

                  <div class="relative z-10 space-y-6">
                    <!-- Nama Lengkap -->
                    <div class="flex flex-col text-left space-y-2">
                      <label for="nama" class="text-xs tracking-widest uppercase text-pink-200/80 font-medium ml-1">Nama
                        Lengkap</label>
                      <input id="nama" v-model="nama" type="text" name="nama" placeholder="Tuliskan nama Anda"
                        class="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-300/50 focus:bg-white/10 transition-all font-light"
                        required>
                    </div>

                    <!-- Konfirmasi Kehadiran -->
                    <div class="flex flex-col text-left space-y-3">
                      <p class="text-xs tracking-widest uppercase text-pink-200/80 font-medium ml-1">Konfirmasi
                        Kehadiran</p>
                      <div class="flex flex-col sm:flex-row gap-4">
                        <label class="flex-1 cursor-pointer">
                          <input type="radio" v-model="kehadiran" name="kehadiran" value="Hadir" class="peer sr-only"
                            required>
                          <div
                            class="px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-center peer-checked:bg-pink-300/20 peer-checked:border-pink-300/50 peer-checked:text-white transition-all font-light hover:bg-white/10">
                            Ya, Saya Hadir
                          </div>
                        </label>
                        <label class="flex-1 cursor-pointer">
                          <input type="radio" v-model="kehadiran" name="kehadiran" value="Tidak Hadir"
                            class="peer sr-only">
                          <div
                            class="px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-center peer-checked:bg-white/20 peer-checked:border-white/30 peer-checked:text-white transition-all font-light hover:bg-white/10">
                            Tidak Hadir
                          </div>
                        </label>
                      </div>
                    </div>

                    <!-- Ucapan & Doa -->
                    <div class="flex flex-col text-left space-y-2">
                      <label for="ucapan"
                        class="text-xs tracking-widest uppercase text-pink-200/80 font-medium ml-1">Ucapan &
                        Doa</label>
                      <textarea id="ucapan" v-model="ucapan" name="ucapan" rows="4"
                        placeholder="Berikan doa terbaik Anda untuk kedua mempelai"
                        class="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-pink-300/50 focus:bg-white/10 transition-all font-light resize-none" />
                    </div>

                    <!-- Tombol Kirim -->
                    <button type="submit"
                      class="w-full py-4 bg-pink-300 hover:bg-pink-400 text-gray-900 rounded-2xl text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,168,212,0.4)] hover:-translate-y-1 flex justify-center items-center gap-2 mt-4"
                      :disabled="isSubmitting">
                      <span v-if="isSubmitting"
                        class="animate-spin border-2 border-t-transparent border-gray-900 rounded-full w-5 h-5" />
                      <span v-else-if="submitSuccess === true" class="text-green-700 flex items-center gap-2">
                        <UIcon name="mdi:check-circle" class="w-5 h-5" /> Berhasil Dikirim
                      </span>
                      <span v-else-if="submitSuccess === false" class="text-red-600 flex items-center gap-2">
                        <UIcon name="mdi:alert-circle" class="w-5 h-5" /> Gagal, Coba Lagi
                      </span>
                      <span v-else class="flex items-center gap-2">
                        <UIcon name="mdi:send-outline" class="w-5 h-5" /> Kirim RSVP
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              <!-- Bottom side: List Ucapan Tamu -->
              <div class="h-full">
                <div
                  class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 h-full min-h-[500px] flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                  <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

                  <div class="relative z-10 flex flex-col h-full">
                    <!-- Judul tetap di atas -->
                    <div class="mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                      <UIcon name="mdi:message-heart-outline" class="w-6 h-6 text-pink-300" />
                      <h3 class="text-xl font-serif italic text-white flex-1 text-left">
                        Doa & Ucapan
                      </h3>
                      <span class="bg-pink-300/20 text-pink-200 text-xs px-2.5 py-1 rounded-full font-medium">
                        {{ guestMessages.length }} Pesan
                      </span>
                    </div>

                    <!-- Container scrollable untuk card -->
                    <div class="flex-1 overflow-y-auto space-y-4 pr-2 max-h-[500px] md:max-h-[600px] scrollbar-hide">
                      <template v-if="guestMessages.length > 0">
                        <div v-for="(entry, index) in guestMessages" :key="index"
                          class="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-3 hover:bg-white/10 transition-colors text-left">
                          <div class="flex justify-between items-start gap-4">
                            <p class="font-medium text-white text-sm md:text-base">
                              {{ entry.nama }}
                            </p>
                            <span class="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md shrink-0"
                              :class="entry.kehadiran === 'Hadir' ? 'bg-green-500/20 text-green-200' : 'bg-white/10 text-white/60'">
                              {{ entry.kehadiran === 'Hadir' ? '✔️ Hadir' : '❌ Tidak Hadir' }}
                            </span>
                          </div>
                          <p class="text-white/70 text-sm font-light leading-relaxed">
                            "{{ entry.ucapan }}"
                          </p>
                          <p class="text-[10px] text-white/40 font-medium">
                            {{ formatDate(entry.tanggal) }}
                          </p>
                        </div>
                      </template>
                      <template v-else>
                        <div
                          class="h-full flex flex-col items-center justify-center text-white/40 space-y-4 py-10 min-h-[300px]">
                          <UIcon name="mdi:emoticon-happy-outline" class="w-12 h-12 opacity-50" />
                          <p class="text-sm">Belum ada ucapan. Jadilah yang pertama!</p>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- Wedding Gift -->
        <section class="min-h-screen relative snap-start flex flex-col justify-center py-16 md:py-24">
          <!-- Background Video with elegant overlay -->
          <div class="absolute inset-0 -z-10 bg-[#1a1a1a]">
            <!-- Elegant background alternative if video fails to load, maybe subtle static image or gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-black z-0" />
            <video autoplay muted loop playsinline
              class="w-full h-full object-cover opacity-60 z-10 relative mix-blend-screen grayscale">
              <source src="/video/wedding-video.mp4" type="video/mp4">
            </video>
            <!-- Vignette/Shadow overlay -->
            <div
              class="absolute inset-0 bg-black/40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20 pointer-events-none" />
          </div>

          <!-- Content -->
          <div class="relative z-30 max-w-5xl mx-auto text-center px-6 md:px-12 w-full">

            <div
              class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 lg:p-20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <!-- Decorative elements -->
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent opacity-50" />
              <div class="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
              <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

              <div class="relative z-10 space-y-12">
                <!-- Heading -->
                <div class="space-y-4">
                  <div class="flex justify-center mb-6">
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-2 my-auto" />
                    <i class="mdi mdi-gift-outline text-3xl md:text-4xl text-pink-300 mx-4" />
                    <div class="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-2 my-auto" />
                  </div>
                  <h2 class="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-pink-200/80">
                    Wedding Gift
                  </h2>
                  <p class="text-3xl md:text-5xl font-serif italic font-light text-white tracking-wide mt-2">
                    Tanda Kasih
                  </p>
                  <p class="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto pt-4">
                    Kehadiran dan doa restu Anda adalah kado terindah bagi kami. Namun, jika Anda ingin memberikan tanda
                    kasih
                    berupa kado fisik maupun digital, dapat melalui opsi di bawah ini.
                  </p>
                </div>

                <!-- Cards Container -->
                <div class="flex flex-col gap-6 pt-6 max-w-2xl mx-auto w-full">
                  <!-- Card 1: Kirim Kado / Alamat -->
                  <div
                    class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group/card relative overflow-hidden">
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div class="space-y-4 relative z-10 flex-1 text-left">
                      <div class="w-12 h-12 rounded-full bg-pink-300/20 flex items-center justify-center mb-6">
                        <UIcon name="mdi:home-heart" class="w-6 h-6 text-pink-300" />
                      </div>
                      <h3 class="font-serif italic text-2xl text-white">Kirim Kado Fisik</h3>
                      <p class="text-white/70 font-light text-sm leading-relaxed pb-4">
                        Jl. Pantai Kedungu No.123, Br. Kedungu, Ds. Belalang, Kediri, Tabanan, Bali (Belakang Warung Bu
                        Ani)
                      </p>
                    </div>

                    <a href="https://www.google.com/maps/place/Jl.+Batu+Luwih+Kawan,+Penebel,+Tabanan" target="_blank"
                      class="w-full relative z-10 flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-sm font-medium tracking-wide transition-all text-white mt-auto">
                      <UIcon name="mdi:google-maps" class="w-5 h-5 text-pink-300" /> Google Maps
                    </a>
                  </div>

                  <!-- Card 2: Nomor Rekening BCA -->
                  <div
                    class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group/card relative overflow-hidden">
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div class="space-y-4 relative z-10 flex-1 text-left">
                      <!-- Tambah Icon Bank Asli jika punya, untuk sementara pakai icon bank dummy -->
                      <div class="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center mb-6">
                        <UIcon name="mdi:bank-outline" class="w-6 h-6 text-blue-300" />
                      </div>
                      <h3 class="font-serif italic text-2xl text-white">Transfer Bank</h3>
                      <div class="space-y-2">
                        <p class="text-xs tracking-widest uppercase text-white/50 font-medium">BCA - Wasudewa Puja</p>
                        <p class="font-mono text-2xl text-white tracking-wider flex items-center gap-3">
                          1234567890
                        </p>
                      </div>
                    </div>

                    <button
                      class="w-full mt-6 relative z-10 flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium tracking-wide transition-all shadow-lg"
                      @click="copyText('1234567890')">
                      <UIcon name="mdi:content-copy" class="w-5 h-5" /> Salin Rekening
                    </button>
                  </div>

                  <!-- Card 3: Gopay / E-Wallet -->
                  <div
                    class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group/card relative overflow-hidden md:col-span-2 lg:col-span-1">
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div class="space-y-4 relative z-10 flex-1 text-left">
                      <div class="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center mb-6">
                        <UIcon name="mdi:wallet-outline" class="w-6 h-6 text-green-300" />
                      </div>
                      <h3 class="font-serif italic text-2xl text-white">Dompet Digital</h3>
                      <div class="space-y-2">
                        <p class="text-xs tracking-widest uppercase text-white/50 font-medium">Gopay / OVO / Dana</p>
                        <p class="font-mono text-xl md:text-2xl text-white tracking-wider">
                          0812-3456-7890
                        </p>
                      </div>
                    </div>

                    <button
                      class="w-full mt-6 relative z-10 flex items-center justify-center gap-2 px-5 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium tracking-wide transition-all shadow-lg"
                      @click="copyText('081234567890')">
                      <UIcon name="mdi:content-copy" class="w-5 h-5" /> Salin Nomor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- GALERI -->
        <section class="min-h-screen relative snap-start flex flex-col justify-center py-16 md:py-24 overflow-hidden">
          <!-- Background -->
          <div class="absolute inset-0 -z-10 bg-[#1a1a1a]">
            <div class="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-black to-black z-0" />
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,168,212,0.05)_0%,transparent_100%)] z-10" />
          </div>

          <!-- Content -->
          <div class="relative z-30 max-w-6xl mx-auto px-6 md:px-12 w-full h-full flex flex-col">

            <!-- Header Section -->
            <div class="text-center space-y-4 mb-10 md:mb-16">
              <div class="flex justify-center mb-4">
                <i class="mdi mdi-camera-outline text-3xl md:text-4xl text-pink-300" />
              </div>
              <h2 class="text-xs md:text-sm font-medium tracking-[0.4em] uppercase text-pink-200/80">
                Our Memories
              </h2>
              <p class="text-4xl md:text-6xl font-serif italic font-light text-white tracking-wide mt-2">
                Gallery
              </p>
            </div>

            <!-- Gallery Grid / Carousel Container -->
            <div
              class="relative flex-1 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

              <!-- Decorative ambient glow -->
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

              <!-- Image Display -->
              <div class="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden group">

                <!-- Main Featured Images -->
                <transition-group name="fade" tag="div" class="absolute inset-0 w-full h-full">
                  <div v-for="(img, idx) in images" :key="img" v-show="current === idx"
                    class="absolute inset-0 w-full h-full">
                    <img :src="img"
                      class="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-linear hover:scale-105 cursor-pointer"
                      @click="openLightbox(img)">
                    <!-- Vignette Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none mix-blend-multiply" />
                  </div>
                </transition-group>

                <!-- Navigation Controls (Hover visible on desktop) -->
                <div
                  class="absolute inset-0 flex items-center justify-between px-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <button
                    class="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-pink-500/80 hover:border-pink-300 transition-all hover:scale-110 pointer-events-auto"
                    @click.stop="prevSlide">
                    <UIcon name="mdi:chevron-left" class="w-8 h-8" />
                  </button>
                  <button
                    class="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-pink-500/80 hover:border-pink-300 transition-all hover:scale-110 pointer-events-auto"
                    @click.stop="nextSlide">
                    <UIcon name="mdi:chevron-right" class="w-8 h-8" />
                  </button>
                </div>

                <!-- Open Lightbox Hint -->
                <div
                  class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 z-20 pointer-events-none opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <UIcon name="mdi:magnify-plus-outline" class="w-4 h-4 text-pink-300" />
                  <span class="text-xs text-white uppercase tracking-widest font-medium">Ketuk untuk Memperbesar</span>
                </div>
              </div>

              <!-- Thumbnails / Pagination -->
              <div ref="thumbContainer"
                class="mt-6 md:mt-8 flex justify-start md:justify-center gap-3 overflow-x-auto py-4 custom-scrollbar px-2 snap-x snap-mandatory">
                <button v-for="(img, idx) in images" :key="'thumb-' + idx" ref="thumbs"
                  class="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300"
                  :class="current === idx ? 'border-pink-400 scale-110 shadow-[0_0_15px_rgba(249,168,212,0.5)] z-10' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'"
                  @click="current = idx">
                  <img :src="img" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-black/20" :class="current === idx ? 'opacity-0' : 'opacity-100'" />
                </button>
              </div>

            </div>
          </div>
        </section>

        <!-- FOOTER / THANK YOU -->
        <section class="relative w-full min-h-screen overflow-hidden snap-start flex flex-col">

          <!-- Background Gradient Vertikal -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute inset-0 bg-gradient-to-b from-pink-800/30 via-black/70 to-black/95" />
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,168,212,0.05)_0%,transparent_100%)] z-10" />
          </div>

          <!-- Main Content (Centered) -->
          <div class="relative z-20 max-w-4xl mx-auto text-center px-6 md:px-12 flex flex-col justify-center flex-1">

            <!-- Heart / Ornament -->
            <div class="flex justify-center mb-6">
              <i class="mdi mdi-heart text-4xl md:text-5xl text-pink-300 animate-pulse" />
            </div>

            <!-- Thank You Text -->
            <p class="text-xl md:text-2xl font-serif italic font-light text-white/90 mb-4">
              Terima kasih atas doa, cinta, dan kehadiran Bapak/Ibu/Saudara/i
              di hari bahagia kami.
            </p>

            <!-- Small Note -->
            <p class="text-sm md:text-base text-white/60 tracking-wide mb-6">
              Semoga kebahagiaan dan cinta selalu menyertai kita semua.
            </p>

            <!-- Footer Branding / Couple Name -->
            <p class="text-pink-200 text-sm md:text-base uppercase tracking-[0.25em] font-medium mb-4">
              Gian & Kristiany
            </p>

            <!-- Keevia Label Before Instagram -->
            <p class="text-white/50 text-xs md:text-sm mb-3">
              Keevia.id Digital Invitation
            </p>

            <!-- Instagram Perusahaan -->
            <div class="flex justify-center gap-4">
              <a href="https://instagram.com/keevia.id" target="_blank" rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-pink-400 hover:border-pink-300 transition-all hover:scale-110">
                <UIcon name="mdi:instagram" class="w-5 h-5" />
              </a>
            </div>

          </div>

          <!-- Bottom Rights (Always at Bottom) -->
          <div class="relative z-20 text-center mt-auto py-4 text-white/40 text-xs md:text-sm border-t border-white/10">
            &copy; 2026 Keevia.id. All Rights Reserved.
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, inject, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'

// Daftar gambar
const images = ref<string[]>([
  '/img/groom-pria.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
  '/img/groom-wanita.jpg',
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

// Refs untuk thumbnail container & items
const thumbContainer = ref<HTMLElement | null>(null)
const thumbs = ref<NodeListOf<HTMLButtonElement> | null>(null)

// Scroll thumbnail aktif ke tengah
const scrollThumbIntoView = () => {
  nextTick(() => {
    if (!thumbContainer.value || !thumbs.value) return
    const container = thumbContainer.value
    const activeThumb = thumbs.value[current.value]
    if (!activeThumb) return

    const containerRect = container.getBoundingClientRect()
    const thumbRect = activeThumb.getBoundingClientRect()

    // scroll container agar thumbnail aktif ada di tengah
    container.scrollBy({
      left: thumbRect.left - containerRect.left - containerRect.width / 2 + thumbRect.width / 2,
      behavior: 'smooth'
    })
  })
}

// Watch current slide
watch(current, () => {
  scrollThumbIntoView()
})

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
  if (thumbContainer.value) {
    thumbs.value = thumbContainer.value.querySelectorAll('button')
  }
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
