<template>
  <header class=" defrence flexer transition-colors duration-300 bg-[#040e1a] ">

    <div class="icon_header flexer ">
      <img src="../assets/images/graphic-card.png" alt="gpu">
    </div>

    <div>
      <nav class="header_nav ">
        <router-link to="/" class="dif_text-nav">Home</router-link>
        <router-link to="/compare" class="nav_text">Compare</router-link>
        <router-link to="/blog" class="nav_text">Blog</router-link>
        <router-link to="/contact" class="nav_text">Contact</router-link>
      </nav>
    </div>

    <div class="dark_light-btn">
      <button @click="toggleTheme">
        <img :src="isDark ? sunIcon : moonIcon" alt="DarkModeBtn" class="dark_light-mode">
      </button>
    </div>

  </header>
</template>

<script setup>
import sunIcon from '../assets/images/sun.png'
import moonIcon from '../assets/images/moon.png'
import { onMounted, ref } from 'vue';

const isDark = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  updateHtmlClass();
});

function toggleTheme() {
  isDark.value = !isDark.value;
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  updateHtmlClass();
}

function updateHtmlClass() {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
</script>


<style scoped>
  @reference "../assets/main.css";

  .icon_header{
    @apply w-18 h-23 ;
  }
  .nav_text{
    @apply text-[#cbccd3] font-bold;
  }
  .header_nav{
    @apply flex gap-10 ;
  }
  .dark_light-mode{
    @apply w-7;
  }
  .dif_text-nav{
    @apply font-bold text-[#4159b8];
  }
</style>
