<template>
  <section class="bg-[#06101e] pt-10 pb-25 defrence">
    <div class="flex flex-col items-center justify-center text-center mb-[45px]">
      <h2 class="text-2xl">Explore Our Product Categories</h2>
      <p class="#1d2530">Discover a wide range of products tailored to meet your needs. From the latest innovations to timeless essentials, find what you're looking for in one place.</p>
    </div>
    <div class="cards_grided">
      <CategoryCard
        v-for="category in topRowCategories"
        :key="category.title"
        :title="category.title"
        :description="category.description"
      >
        <template #icon>
          <component :is="category.icon" />
        </template>
      </CategoryCard>
      </div>
      <div class="flex justify-center gap-5 mt-5">
        <CategoryCard
            v-for="category in bottomRowCategories"
            :key="category.title"
            :title="category.title"
            :description="category.description"
            >
            <template #icon>
                <component :is="category.icon" />
            </template>
        </CategoryCard>
      </div>

  </section>
</template>
<script setup>
import { shallowRef } from 'vue';
import CategoryCard from './CategoryCard.vue';
import IconGpu from './IconGpu.vue';
import IconCpu from './IconCpu.vue';
import IconRam from './IconRam.vue';
import IconSupplise from './IconSupplise.vue';
import IconMotherboerd from './IconMotherboerd.vue';

const topRowCategories = shallowRef([
  {
    icon: IconGpu,
    title: 'GPUs',
    description: 'Top-performing graphics cards for gaming and workstations',
  },
  {
    icon: IconCpu,
    title: 'CPUs',
    description: 'Top-performing graphics cards for gaming and workstations',
  },
  {
    icon: IconRam,
    title: 'RAM',
    description: 'Top-performing graphics cards for gaming and workstations',
  },
]);

const bottomRowCategories = shallowRef([
    {
        icon: IconSupplise,
        title: 'Power Supplise',
        description: 'Top-performing graphics cards for gaming and workstations'
    },
    {
        icon: IconMotherboerd,
        title: 'Motherboards',
        description: 'Top-performing graphics cards for gaming and workstations'
    }
]);
</script>
<style scoped>
   @reference "../assets/main.css";
   h2{
    @apply leading-12 text-4xl font-semibold py-5 w-130  text-white;
   }
   p{
    @apply text-white;
   }
   h3{
    @apply text-white font-bold text-xl my-5;
   }
   .icon_container{
    @apply w-20 h-20 flex items-center justify-center  bg-[#192650] rounded-xl;
   }
   .cards_grided{
    @apply grid  grid-cols-3 gap-5 ;
   }
   .card_box{
    @apply w-full p-5 bg-[#0c172d] rounded-xl flex flex-col items-center justify-center;
   }
   .paragraph_width{
    @apply w-[300px] text-center font-sans ;
   }
</style>





