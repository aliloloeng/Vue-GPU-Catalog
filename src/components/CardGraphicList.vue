<template>
  <section class="bg-[#06101e] pb-25 defrence">
    <div class="mb-10">
      <h1>GraphicCard</h1>
    </div>
    <div>
      <CardGraphicNameItems
      v-for="card in GraphicCardInfos"
      :key="card.id"
      :card="card"
      />
    </div>

  </section>
</template>
<script setup>
import intel from '@/assets/images/intel.png'
import CardGraphicNameItems from './CardGraphicNameItems.vue';
import { ref } from 'vue';

  const GraphicCardInfos = ref([
    {
      id:1,
      name:"Arc",
      serise:"B580",
      Date:"October 2024",
      img:intel
    },
    {
      id:2,
      name:"Xbox",
      serise:"Series X 6nm GPU",
      Date:"October 2024",
      img:intel
    },
    {
      id:3,
      name:"GeForce RTX",
      serise:"4070 TI SUPER AD102",
      Date:"October 2024",
      img:intel
    },
    {
      id:4,
      name:"Arc",
      serise:"B580",
      Date:"October 2024",
      img:intel
    },
    {
      id:5,
      name:"GeForce RTX",
      serise:"4070 TI SUPER AD102",
      Date:"October 2024",
      img:intel
    },
    {
      id:6,
      name:"Arc",
      serise:"B580",
      Date:"October 2024",
      img:intel
    },
    {
      id:7,
      name:"Xbox",
      serise:"Series X 6nm GPU",
      Date:"October 2024",
      img:intel
    },
    {
      id:8,
      name:"Arc",
      serise:"B580",
      Date:"October 2024",
      img:intel
    },
    {
      id:9,
      name:"GeForce RTX",
      serise:"4070 TI SUPER AD102",
      Date:"October 2024",
      img:intel
    },
    {
      id:10,
      name:"Xbox",
      serise:"Series X 6nm GPU",
      Date:"October 2024",
      img:intel
    },
    {
      id:11,
      name:"Arc",
      serise:"B580",
      Date:"October 2024",
      img:intel
    },
    {
      id:12,
      name:"Arc",
      serise:"B580",
      Date:"October 2024",
      img:intel
    },
  ])
</script>
<style scoped>
  @reference "../assets/main.css";
  p,li{
    @apply text-white ;
  }
  </style>
