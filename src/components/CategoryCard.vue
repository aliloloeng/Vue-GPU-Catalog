<template>
  <div class="card_box">
    <div class="icon_container">
      <slot name="icon"></slot>
    </div>
      <h3>{{ title }}</h3>
      <p class="paragraph_width text-white">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<style scoped>
  @reference "../assets/main.css";
   h3{
    @apply text-white font-bold text-xl my-5;
   }
   .icon_container{
    @apply w-20 h-20 flex items-center justify-center  bg-[#192650] rounded-xl;
   }
   .card_box{
    @apply w-full p-5 bg-[#0c172d] rounded-xl flex flex-col items-center justify-center;
   }
   .paragraph_width{
    @apply w-[300px] text-center font-sans ;
   }
</style>
