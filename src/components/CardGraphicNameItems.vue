<template>
  <div class="inline-block w-fit p-4 mr-9 mb-8 rounded-lg bg-white">
    <div class="flex items-center gap-3 ">
      <section>
        <img class="w-10 " :src="card.img" alt="intel_picture">
      </section>
      <section>
        <h2>{{ card.name }}</h2>
        <H3>{{ card.serise }}</H3>
        <div class="grid justify-end">
          <p class="mt-auto text-right">{{ card.Date }}</p>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    card: Object
  });
</script>
<style scoped>
  @reference "../assets/main.css";
  h2{
    @apply text-lg  font-sans ;
  }
  h3{
    @apply  text-[#6090dc] text-xl font-semibold
  }
</style>
