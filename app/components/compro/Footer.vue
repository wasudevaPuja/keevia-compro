<template>
  <footer class="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
    <!-- Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-pink-900/10 blur-[120px] rounded-t-full pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        <!-- Branding -->
        <div class="md:col-span-2 space-y-6 text-center md:text-left">
          <NuxtLink
            to="/"
            class="inline-block group"
          >
            <span class="font-serif italic font-bold text-3xl tracking-wider text-white group-hover:text-pink-300 transition-colors">Keevia</span>
          </NuxtLink>
          <p class="text-sm font-light text-white/60 max-w-sm mx-auto md:mx-0 leading-relaxed">
            Platform undangan digital premium yang merubah momen berharga Anda menjadi mahakarya abadi dalam bentuk digital yang elegan.
          </p>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-pink-300 transition-all"
            >
              <UIcon
                name="mdi:instagram"
                class="w-5 h-5"
              />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-pink-300 transition-all"
            >
              <UIcon
                name="mdi:whatsapp"
                class="w-5 h-5"
              />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-pink-300 transition-all"
            >
              <UIcon
                name="mdi:email-outline"
                class="w-5 h-5"
              />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="space-y-6 text-center md:text-left">
          <h4 class="text-sm font-semibold tracking-widest uppercase text-white">
            Menu
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#features"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >Fitur Unggulan</a>
            </li>
            <li>
              <a
                href="#themes"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >Koleksi Desain</a>
            </li>
            <li>
              <a
                href="#pricing"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >Paket & Harga</a>
            </li>
          </ul>
        </div>

        <div class="space-y-6 text-center md:text-left">
          <h4 class="text-sm font-semibold tracking-widest uppercase text-white">
            Bantuan
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >Syarat & Ketentuan</a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >Kebijakan Privasi</a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm font-light text-white/60 hover:text-pink-300 transition-colors"
              >FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs font-light text-white/40 tracking-widest">
          &copy; {{ new Date().getFullYear() }} Keevia.id. All Rights Reserved.
        </p>
        <p class="text-xs font-light text-white/40 flex items-center gap-1">
          Crafted with <UIcon
            name="mdi:heart"
            class="w-3 h-3 text-pink-500"
          /> in Bali
        </p>
      </div>
    </div>
  </footer>
</template>
