<template>
  <main class="bg-[#06101e] pt-10 pb-25 defrence">
    <div class="flex justify-center items-center gap-[100px]">
      <section>
        <img class="col-spne-3 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/100 rounded-[30px] max-xl mr-[100px]" src="../assets/performance.png" alt="performance-image">
      </section>
      <section>
        <h1>Performance You Can Trust</h1>
        <p>Explore comprehensive benchmark results for a wide range of GPUs. This section provides detailed performance metrics from both synthetic benchmarks and real-world gaming tests cards.</p>
        <ul class="">
          <li><img class="inline w-4 mr-2" src="../assets/check.png" alt="">Synthetic Benchmark Results</li>
          <li><img class="inline w-4 mr-2" src="../assets/check.png" alt="">Real-World Gaming Performance</li>
          <li><img class="inline w-4 mr-2" src="../assets/check.png" alt="">Resolution-Based Analysis</li>
          <li><img class="inline w-4 mr-2" src="../assets/check.png" alt="">Overclocking Results</li>
          <li><img class="inline w-4 mr-2" src="../assets/check.png" alt="">Efficiency Metrics</li>
        </ul>
        <button class= " btn">
          View All Benchmarks
        </button>

      </section>
    </div>
  </main>
</template>
<script setup>

</script>
<style scoped>
  @reference "../assets/main.css";
  p,li{
    @apply text-white ;
  }
  h1{
    @apply leading-12 text-4xl font-semibold py-5 w-130  text-white;
  }
  ul{
  @apply mt-5 leading-9
  }
</style>
