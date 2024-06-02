<script setup>
import {RouterLink} from 'vue-router'
import { ref } from 'vue'


</script>

<template>
    <!-- Navbar -->
    <nav class="navbar">
          <RouterLink to="/" class="image-link">
            <img src="../assets/logo-transparent-png.png" alt="Haruna's Gambian Adventures" class="logo">
          </RouterLink>

          <div class="nav-buttons">
            
              <RouterLink to="/bicyclerental" class="nav-item">BICYCLE RENTAL</RouterLink>
              <RouterLink to="/tours" class="nav-item">TOURS</RouterLink>
              <RouterLink to="/about" class="nav-item">ABOUT</RouterLink>
              <RouterLink to="/contact" class="nav-item">CONTACT</RouterLink>
              
          </div>
    </nav>
    
    
</template> 

<style scoped>

/* Styles for navbar */
.navbar {
    background: linear-gradient(90deg, rgba(255,221,134,1) 5%, rgba(239,182,48,1) 30%, rgba(201,87,5,1) 100%);;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
}
.logo {
    height: 150px;
    margin-left: 25%;
    /* background-color: transparent; */
}
.nav-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    background-color: transparent;
}
.book {
    border: 2px solid brown;
    border-radius: 5px;
    background: none;
    width: 150px;
    height: 50px;
}
.book:hover {
    background-color: rgb(136, 91, 91);
    box-shadow: 0 0 0 10;
}
.nav-item {
    text-decoration: none;
    color: brown;
    background-color: transparent;
}
.nav-item-book {
    text-decoration: none;
    color: brown;
    font-weight: bold;
    background-color: transparent;
}

@media  screen and (max-width: 440px) {
    .navbar, .nav-buttons {
      flex-direction: column;
      margin-bottom: 10px;
    }
    .logo {
        margin: auto;
    }
  }
</style>