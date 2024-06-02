<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div class="app-container">
    <div class="header-container">
      <Header />
    </div>

    <div class="page-container">
      <RouterView /> 
    </div>

    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Full height of the viewport */
  }
  
  .header-container {
    box-sizing: border-box;
  }

  .page-container {
    flex: 1 !important; /* This makes sure this container takes up remaining space */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90vw;
    margin: auto;
    box-sizing: border-box;
  }

  .footer-container {
    box-sizing: border-box;
  }
</style>

