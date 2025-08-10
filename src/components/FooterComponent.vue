<template>
  <footer class="footer_w-h bg-[#040e1a]">
    <div class="defrence ">
      <section class="footer_top-sec grid grid-cols-[1fr_150px_150px_100px] gap-6 py-7">
        <div class="w-80">
          <img src="../assets/images/gpu.png" alt="gpu" class="footer_icon">
          <p>Become your own boss, choose your own schedule, and work in your preferred areas</p>
        </div>
        <div>
          <ul>
            <li>Service</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Registration</li>
            <li>Login</li>
          </ul>
        </div>
        <div class="flex gap-4">
          <a href="#">
            <img src="../assets/images/twitter.png" alt="" class="app_icons">
          </a>
          <a href="#">
            <img src="../assets/images/instagram.png" alt="" class="app_icons">
          </a>
          <a href="#">
            <img src="../assets/images/whatsapp.png" alt="" class="app_icons">
          </a>
        </div>
      </section>
      <div class="w-full bg-[#5a6069] h-0.25"></div>
      <section class="footer_but-sec flexer py-5">
        <div>
          <p>© {{currentYear}} XYZ, all right reserved.</p>
        </div>
        <div>
          <p>privacy and policy</p>
        </div>
      </section>
    </div>
  </footer>
</template>
<script setup>
  const currentYear = new Date().getFullYear();
</script>
<style scoped>
  @reference "../assets/main.css";
  p , li{
    @apply text-[#cbccd3] font-medium;
  }
  .footer_w-h{
    @apply h-70 ;
  }
  .app_icons{
    @apply w-9
  }
  .footer_icon{
    @apply w-20
  }

</style>
