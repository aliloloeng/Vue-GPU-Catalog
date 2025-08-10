<template>
  <section class="bg-[#06101e] pb-5 defrence">
    <h1>Featured Graphics Card</h1>

    <div class="flex items-center gap-5 mb-20">
      <DropdownItems
        title="Manufacturer"
        :items="manufacturerItems"
        @item-selected="handleFilterSelection"
      />
      <DropdownItems
        title="GPU Series"
        :items="seriesItems"
        @item-selected="handleFilterSelection"
      />
      <DropdownItems
        title="Price"
        :items="priceItems"
        @item-selected="handleFilterSelection"
      />
    </div>

    <!-- The div that displayed the selected filter has been removed, as you requested. -->

  </section>
</template>

<script setup>
import { ref } from 'vue';

import DropdownItems from './DropdownItems.vue';

const manufacturerItems = ['NVIDIA', 'AMD', 'Intel', 'RYZEN'];
const seriesItems = ['GeForce RTX 40 Series', 'Radeon RX 7000 Series', 'Intel Arc Series'];
const priceItems = ['Under $300', '$300 – $700', 'Above $700'];

const selectedFilter = ref('');

function handleFilterSelection(item) {
  console.log(`A new filter was selected: ${item}`);
  selectedFilter.value = item;
}
</script>

<style scoped>
  @reference "../assets/main.css";
  h1{
    @apply leading-12 text-4xl font-semibold py-5 w-130  text-white;
  }
</style>
