<template>
  <div class="relative inline-block text-left" ref="dropdownRef">

    <button
      @click="toggleDropdown"
      class="flex items-center justify-center gap-2 px-6 py-3 bg-[#06101e] text-[#cbccd3] rounded-xl border-1 transition-all duration-300 hover:bg-blue-600 hover:text-white"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      {{ title }}
      <svg
        class="w-4 h-4 transition-transform duration-300 fill-current"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 360 360"
      >
        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute left-0 mt-2 w-full bg-[#06101e] border border-[#051730] rounded-2xl origin-top z-20"
      >
        <button
          v-for="item in items"
          :key="item"
          @click="selectItem(item)"
          class="block w-full text-left px-4 py-3 hover:bg-blue-600 rounded-xl hover:text-white transition-all text-white"
        >
          {{ item }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['item-selected']);

const isOpen = ref(false);
const dropdownRef = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectItem(item) {
  emit('item-selected', item);
  isOpen.value = false;
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const handleEscKey = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.removeEventListener('keydown', handleEscKey);
});
</script>
