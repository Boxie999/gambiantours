<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import data from '@/assets/data/data.json';

const programData = ref([]);

// Fetching the data from the local json file
onMounted(() => {
  programData.value = data;
});

</script>

<template>
  <div class="card-container">
    <div v-for="program in programData" :key="program.id" class="card">
 <div class="image"><img :src="program.photo" class="program-image"/></div>
  <div class="content">
    <a href="#">
      <span class="title">
        {{ program.name }}
      </span>
    </a>

    <!-- <p class="desc">
       {{  }} 
    </p> -->

    <RouterLink :to="`/tours/${program.id}`" class="action" >
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </RouterLink>
  </div>
</div>
</div>

</template>

<style scoped>
  .card-container {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90vw;
  }
  
  .card {
  height: 300px;  
  width: 200px;
  border-radius: 0.5rem;
  background-color:antiquewhite;
  /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); */
  box-shadow: 3px 3px 3px black;
  border: 1px solid transparent;
  margin: 30px;
}

.card a {
  text-decoration: none
}

.content {
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  padding-top: 3px;
  padding-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 140px;
}

.image {
  border: 1px solid transparent;
  object-fit: cover;
  width: 100%;
  height: 150px;
}
.program-image {
  border-radius: 0.5rem;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}


.title {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.desc {
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.action {
  display: inline-flex;
  margin-top: 1rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  align-items: center;
  gap: 0.25rem;
  background-color: #2563EB;
  padding: 4px 8px;
  border-radius: 4px;
}

.action span {
  transition: .3s ease;
}

.action:hover span {
  transform: translateX(4px);
}

@media  screen and (max-width: 440px) {
    .card {
      margin: auto;
      margin-bottom: 30px !important;
    }
  }
</style>