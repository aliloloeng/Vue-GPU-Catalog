<template>
  <div
    @click="onSelect"
    :class="[
      'relative rounded-2xl p-5 flex flex-col justify-between cursor-pointer shadow-lg transition-all duration-500 ',
      selected
        ? 'bg-gradient-to-br from-[#1f2f6f] to-[rgb(27,40,96)] ring-2 ring-blue-500 shadow-blue-700/100 scale-105'
        : 'bg-[#1e2a4f] hover:shadow-xl'
        ]">
        <div class="">
          <img  class="w-full mb-5 rounded-[10px]" :src="card.img" alt="gpu" />
          <div class="flex-1">
            <div class="font-semibold text-white mb-5">{{ card.name }}</div>
            <div class="flex justify-between flex-wrap gap-3 text-[14px] font-sans text-gray-300">
              <section>
                <div class="card_info">
                  <IconClock class="w-5"/>
                  {{ card.clock }}
                </div>
                <div class="card_info">
                  <IconMemory class="w-5" />
                  {{ card.memory }}
                </div>
                <div class="card_info">
                 <IconData class="w-5" />
                  {{ card.date }}
                </div>
              </section>
              <section >
                <div class="card_info">
                  <IconSpeed class="w-5"/>
                  {{ card.speed }}
                </div>
                <div class="card_info">
                  <IconPower class="w-5"/>
                  {{ card.power }}
                </div>
                <div class="card_info">
                  <IconPrice class="w-5"/>
                  {{ card.price }}
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="">
          <a href="#" class="flex-1 text-lg flex items-center justify-center w-full btn z-20">
            Buy Now
          </a>
        </div>
      </div>
</template>
<script setup>
import IconClock from './iconClock.vue';
import IconData from './IconData.vue';
import IconMemory from './IconMemory.vue';
import IconPower from './IconPower.vue';
import IconPrice from './IconPrice.vue';
import IconSpeed from './IconSpeed.vue';

  const props = defineProps({
    card:{
      type:Object,
      required:true
    },
    selected:{
      type:Boolean,
      default:false
    }
  });

//  defineEmits(['select'])

const emit = defineEmits(['select']);

function onSelect() {
  emit('select', props.card.id);
}

</script>
<style scoped>
@reference "../assets/main.css";
  .card_info{
    @apply flex items-center gap-1 mb-2;
  }
</style>
