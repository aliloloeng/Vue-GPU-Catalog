<template>
  <section class="bg-[#06101e] pt-10 pb-25 defrence">
    <div class="flex justify-center items-center gap-[100px]">
      <section>
        <img class="col-spne-3 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/100 rounded-[30px] max-xl mr-[100px]" src="../assets/images/performance.png" alt="performance-image">
      </section>
      <section>
        <h1>Performance You Can Trust</h1>
        <p>Explore comprehensive benchmark results for a wide range of GPUs. This section provides detailed performance metrics from both synthetic benchmarks and real-world gaming tests cards.</p>
        <div class="mb-15">
          <ul>
            <li v-for="feature in features" :key="feature">
              <img class="inline w-4 mr-2" :src="check" alt="check_image">
              {{ feature }}
            </li>
          </ul>
        </div>
        <a href="#" class= "btn">
          View All Benchmarks
        </a>
      </section>
    </div>
  </section>
</template>
<script setup>
import check from '@/assets/images/check.png';

const features = [
  'Synthetic Benchmark Results',
  'Real-World Gaming Performance',
  'Resolution-Based Analysis',
  'Overclocking Results',
  'Efficiency Metrics',
];
</script>
<style scoped>
  @reference "../assets/main.css";
  p,li{
    @apply text-white ;
  }
  ul{
  @apply mt-5 leading-9
  }
</style>
