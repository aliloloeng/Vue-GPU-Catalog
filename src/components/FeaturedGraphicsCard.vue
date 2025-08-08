<template>
  <main class="bg-[#06101e] defrence">
    <h1>Featured Graphics Card</h1>

    <div class="relative inline-block text-left  group mr-5 mb-20 ">
      <button class="flex items-center justify-between gap-2 px-6 py-3 bg-[#06101e] text-[#cbccd3] rounded-xl border-1 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        Manufacturer
        <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 fill-current" viewBox="0 0 360 360">
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
      </button>
      <div class="absolute left-0 w-full bg-[#06101e] border border-[#051730] rounded-2xl opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform transition-all duration-300 origin-top z-20">
        <a href="#" class="dropdown_items">NVIDIA</a>
        <a href="#" class="dropdown_items">AMD</a>
        <a href="#" class="dropdown_items">Intel</a>
        <a href="#" class="dropdown_items">RYZEN</a>
      </div>
    </div>

     <div class="relative inline-block text-left  group mr-5 mb-20 z-20">
      <button class="flex items-center justify-between gap-2 px-6 py-3 bg-[#06101e] text-[#cbccd3] rounded-xl border-1 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        GPU Series
        <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 fill-current" viewBox="0 0 360 360">
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
      </button>
      <div class="absolute left-0 w-full bg-[#06101e] border border-[#051730] rounded-2xl opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform transition-all duration-300 origin-top">
        <a href="#" class="dropdown_items">GeForce RTX 40 Series</a>
        <a href="#" class="dropdown_items">Radeon RX 7000 Series</a>
        <a href="#" class="dropdown_items">Intel Arc Series</a>
      </div>
    </div>

     <div class="relative inline-block text-left  group mr-5 mb-20 z-20">
      <button class="flex items-center justify-between gap-2 px-6 py-3 bg-[#06101e] text-[#cbccd3] rounded-xl border-1 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        price
        <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 fill-current" viewBox="0 0 360 360">
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
      </button>
      <div class="absolute left-0 w-full bg-[#06101e] border border-[#051730] rounded-2xl opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform transition-all duration-300 origin-top">
        <a href="#" class="dropdown_items">Under $300</a>
        <a href="#" class="dropdown_items">$300 – $700</a>
        <a href="#" class="dropdown_items">Above $700</a>
      </div>
    </div>

  </main>
</template>
<script setup></script>
<style scoped>
  @reference "../assets/main.css";
  h1{
    @apply leading-12 text-4xl font-semibold py-5 w-130  text-white;
  }
  .dropdown_items{
    @apply block px-4 py-3 text-center hover:bg-blue-600 rounded-xl hover:text-white transition-all text-white
  }
</style>

