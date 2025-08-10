<template>
  <section class="bg-[#06101e] pb-25 defrence">
    <div class="flex flex-col items-center justify-center text-center mb-[45px]">
      <h1 class="text-2xl">Explore Our Product Categories</h1>
      <p class="text-center w-190">Discover a wide range of products tailored to meet your needs. From the latest innovations to timeless essentials, find what you're looking for in one place.</p>
    </div>
    <section class="container_card">
      <div v-for="card in products"
      :key="card.id"
      class="w-full rounded-lg bg-[#1d2530]"
      >
        <img class="rounded-t-lg" :src="card.img" alt="images">
        <div class="p-5">
          <div class="flex items-center justify-between">
            <h5>{{card.name}}</h5>
            <p>
              <svg class="w-5 inline " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#405ab2">
                      <path d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z" />
                      <path d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4.10002C3.71776 4.56329 2 6.58104 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 6.58104 20.2822 4.56329 18 4.10002V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10ZM4.17071 8C4.58254 6.83481 5.69378 6 7 6H17C18.3062 6 19.4175 6.83481 19.8293 8H4.17071Z"/>
                  </svg>
              {{card.date}}
            </p>
          </div>
          <h2>{{card.title}}</h2>
          <p
          :class="{'line-clamp-3': !card.expanded}"
          >
            {{card.explanation}}
          </p>
          <button class="btn w-full"
           @click="toggleExpand(card)"
          >
            {{card.expanded? 'viewLess' : 'ViewMore'}}
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import CaseComputerImage1 from '../assets/images/christian-wiediger-sax9kbf6fvc-unsplash.jpg'
import CaseComputerImage2 from '../assets/images/christian-wiediger-kf_korybd1g-unsplash.jpg'
import GPUImage from '../assets/images/thomas-foster-vWgoeEYdtIY-unsplash.jpg'
import { reactive } from 'vue';

  const products  = reactive([
    {
      id:1,
      name:"James Dyson",
      date:"December 10, 2024",
      title:"Top CPUs for Gaming and Productivity",
      explanation:"Back in 2019, Gucci brought video games to its app with a new section called Gucci Arcade inspired by creative collaborations with artists and designers. This innovative feature allowed users to engage with the brand in an interactive way, blending fashion with gaming culture. Since then, Gucci has continued to explore unique digital experiences that push the boundaries of traditional retail",
      img:CaseComputerImage1,
      expanded:false
    },
    {
      id:2,
      name:"James Dyson",
      date:"December 10, 2024",
      title:"Top CPUs for Gaming and Productivity",
      explanation:"Back in 2019, Gucci brought video games to its app with a new section called Gucci Arcade inspired by creative collaborations with artists and designers. This innovative feature allowed users to engage with the brand in an interactive way, blending fashion with gaming culture. Since then, Gucci has continued to explore unique digital experiences that push the boundaries of traditional retail",
      img:GPUImage,
      expanded:false
    },
    {
      id:3,
      name:"James Dyson",
      date:"December 10, 2024",
      title:"Top CPUs for Gaming and Productivity",
      explanation:"Back in 2019, Gucci brought video games to its app with a new section called Gucci Arcade inspired by creative collaborations with artists and designers. This innovative feature allowed users to engage with the brand in an interactive way, blending fashion with gaming culture. Since then, Gucci has continued to explore unique digital experiences that push the boundaries of traditional retail",
      img:CaseComputerImage2,
      expanded:false
    },
  ])

  function toggleExpand(card){
    card.expanded = !card.expanded
  }
</script>
<style scoped>
  @reference '../assets/main.css';
  p ,h5{
    @apply text-white
  }
  h1{
    @apply leading-12 text-4xl font-semibold py-5 w-130  text-white;
   }
  h2{
    @apply text-xl font-semibold py-5  text-[#405ab2];
   }
  .container_card{
    @apply grid grid-cols-3 gap-5 items-start;
  }
</style>
