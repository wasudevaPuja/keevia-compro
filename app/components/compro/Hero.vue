<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
    <!-- Background Video or Img with Overlay -->
    <div class="absolute inset-0 -z-10">
      <!-- elegant dark pattern or video -->
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 z-0" />

      <!-- Optional subtle video bg for extra premium feel -->
      <!-- <video
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover opacity-20 z-10 mix-blend-screen grayscale"
      >
        <source
          src="/video/wedding-video.mp4"
          type="video/mp4"
        >
      </video> -->

      <!-- Vignette -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)] z-20 pointer-events-none" />
    </div>

    <!-- Animated Glow FX -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse z-0" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000 z-0" />

    <div class="relative z-30 max-w-5xl mx-auto px-6 text-center pt-20">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
        <span class="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
        <span class="text-xs font-semibold tracking-widest uppercase text-white/80">Premium Digital Invitations</span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight md:leading-tight mb-6 opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
        Undangan Berkelas <br>
        <span class="italic font-light text-pink-200">Untuk Momen Nyata</span>
      </h1>

      <!-- Description -->
      <p class="text-base md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans opacity-0 animate-[fade-in-up_1s_ease-out_0.5s_forwards]">
        Keevia menghadirkan pengalaman undangan digital interaktif, mewah, dan eksklusif. Abadikan kisah cinta Anda dalam satu tautan elegan.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.7s_forwards]">
        <a
          href="#themes"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-pink-300 text-gray-900 font-medium tracking-wide hover:bg-pink-400 transition-all shadow-[0_0_30px_rgba(249,168,212,0.3)] hover:shadow-[0_0_40px_rgba(249,168,212,0.5)] hover:-translate-y-1"
        >
          Lihat Koleksi Tema
        </a>
        <a
          href="#features"
          class="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-wide hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white/20 hover:-translate-y-1"
        >
          Pelajari Fitur
        </a>
      </div>

      <!-- Dashboard mockup / visual hint -->
      <div class="mt-20 relative mx-auto w-full max-w-4xl opacity-0 animate-[fade-in-up_1.5s_ease-out_1s_forwards] perspective-1000">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-3xl overflow-hidden shadow-2xl relative shadow-[0_-20px_50px_rgba(249,168,212,0.1)] transform rotate-x-12 translate-y-10 group hover:rotate-x-0 hover:translate-y-0 transition-transform duration-1000">
          <!-- Mockup Header -->
          <div class="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black/40 relative">
            <div class="w-3 h-3 rounded-full bg-red-400" />
            <div class="w-3 h-3 rounded-full bg-yellow-400" />
            <div class="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <!-- Mockup Image placeholder with floating text -->
          <div class="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black/50">
            <img
              src="/img/blossom_showcase.png"
              alt="Keevia Dashboard Preview"
              class="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            >
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="px-6 py-3 md:px-8 md:py-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <span class="text-xl md:text-3xl lg:text-4xl text-white font-serif italic tracking-widest uppercase drop-shadow-lg">Digital Invitation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
.perspective-1000 {
  perspective: 1000px;
}
.rotate-x-12 {
  transform: rotateX(12deg);
}
</style>
