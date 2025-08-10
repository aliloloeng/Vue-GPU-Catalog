<template>
  <section class="bg-[#06101e] relative h-140 grid items-center " >
    <img class="absolute inset-y-0 right-0 h-full py-15" src="../assets/images/compareGPU.png" alt="compareGpu">

    <div class="pl-35 z-20 ">
      <h1>
        Compare and Choose the Best Hardware
      </h1>
      <p class="w-135">
         Easily compare the specifications and performance metrics of your favorite GPUs. Make informed decisions for your gaming, creative, or professional needs with detailed side-by-side comparisons.
      </p>
      <div class="flex gap-23 mt-5">
        <ul>
          <li v-for="feature in features.slice(0, 3)" :key="feature">
            <img class="inline w-4 mr-2" src="../assets/images/check.png" alt="check_image">
            {{ feature }}
          </li>
        </ul>
        <ul>
          <li v-for="feature in features.slice(3)" :key="feature">
            <img class="inline w-4 mr-2" src="../assets/images/check.png" alt="check_image">
            {{ feature }}
          </li>
        </ul>
      </div>
      <button class= " btn">
          compare GPUs
      </button>

    </div>

  </section>
</template>
<script setup>
  const features = [
    'Comprehensive Specs',
    'Performance Metrics',
    'Custom Filters',
    'Multi-GPU Comparison',
    'User-Friendly Interface'
  ];
</script>
<style scoped>
  @reference "../assets/main.css";
  h1{
    @apply leading-12 text-4xl font-semibold py-5 w-130  text-white;
  }
  p , button , li{
  @apply text-[#cbccd3] ;
 }
 ul{
  @apply leading-9
 }
</style>
