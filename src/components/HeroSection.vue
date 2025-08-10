<template>
  <section class="bg-[#000433] relative h-140 grid items-center ">
    <img class="absolute inset-y-0 right-0 h-full " src="../assets/images/logoMain.jpg" alt="gpu_intro">
    <!-- <div class="absolute inset-0 bg-black/40 z-10 "></div> -->
    <div class="pl-35 z-20 ">
       <h1>
          <BlurText
            class="w-100 text-4xl/15 font-semibold text-left text-white"
            text="Find the Perfect GPU for Your Needs."
            :delay="200"
            animate-by="words"
            direction="top"
            :threshold="0.1"
            root-margin="0px"
            :step-duration="0.35"
            @animation-complete="handleAnimationComplete"
          />
        </h1>
        <p class="mt-4 text-[#cbccd3] max-w-xl">
          Unlock the ultimate resource for GPU enthusiasts and professionals alike. Dive into a comprehensive platform that empowers you to compare, benchmark, and explore graphics cards with unparalleled precision.
        </p>
        <button class= "btn">
          compare GPUs
        </button>
      </div>
  </section>
</template>

<script setup>
  import BlurText from './BlurText.vue';

  const handleAnimationComplete = () => {
    console.log('All animations complete!');
  };

</script>
<style scoped>
 @reference "../assets/main.css";
  h1,p , button{
  @apply text-[#cbccd3];
 }

</style>
