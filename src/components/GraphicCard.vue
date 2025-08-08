  <template>
  <main class="defrence mx-auto pb-30 bg-[#06101e]">
      <div class=" flex justify-between items-center mb-6">
        <h1 class="text-3xl font-semibold text-white">Graphics Cards</h1>
        <button
          @click="toggleAll"
          class="text-sm font-medium flex items-center gap-1 text-blue-400 hover:underline"
        >
          <span>{{ showAll ? 'Show Less' : 'See All' }}</span>
          <svg v-if="!showAll" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5l7 7-7 7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rotate-180" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <GraphicCardsItems
          v-for="card in displayedCards"
          :key="card.id"
          :card="card"
          :selected="selectedId === card.id"
          @select="selectedId = card.id"
        />
      </div>
    </main>
  </template>
  <script setup>
  import GPUpng from '@/assets/images.png'
  import { computed, ref } from 'vue';
  import GraphicCardsItems from './GraphicCardsItems.vue';

  const allCards =ref([
    {
      id: 1,
      name: 'INNO3D GeForce GTX 980 Ti',
      memory: '2 GB',
      clock: '1.00 GHz',
      power: '30 W',
      date: 'October 2024',
      price: '$75',
      speed:'1.38 GHz',
      img: GPUpng
    },
    {
      id: 2,
      name: 'INNO3D GeForce GTX 980 Ti',
      memory: '8 GB',
      clock: '1.00 GHz',
      power: '30 W',
      date: 'October 2024',
      price: '$75',
      speed:'1.38 GHz',
      img: GPUpng
    },
    {
      id: 3,
      name: 'INNO3D GeForce GTX 980 Ti',
      memory: '6 GB',
      clock: '1.00 GHz',
      power: '30 W',
      date: 'October 2024',
      price: '$75',
      speed:'1.38 GHz',
      img: GPUpng
    },
    {
      id: 4,
      name: 'INNO3D GeForce GTX 1080',
      memory: '8 GB',
      clock: '1.60 GHz',
      power: '180 W',
      date: 'September 2024',
      price: '$120',
      speed:'1.38 GHz',
      img: GPUpng
    },
    {
      id: 5,
      name: 'INNO3D GeForce RTX 2060',
      memory: '6 GB',
      clock: '1.70 GHz',
      power: '160 W',
      date: 'August 2024',
      price: '$200',
      speed:'1.38 GHz',
      img: GPUpng
    }
  ]);
  const showAll = ref(false);
  const selectedId = ref(2);

  const displayedCards = computed(()=>( showAll.value ? allCards.value : allCards.value.slice(0,3)));

  function toggleAll(){
    showAll.value = !showAll.value
  }
  </script>
  <style scoped></style>
