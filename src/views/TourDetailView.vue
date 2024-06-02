<script setup>
  import {useRoute} from 'vue-router';
  import data from '@/assets/data/data.json';

  const route = useRoute()
  console.log(route.params)

  // finds the corresponding tour object as the id parsed in
  const tour =  data.find(e => e.id === route.params.id)
  console.log(data)
  console.log(tour)


  </script>

<template>
    <div class="tour-detail">
      <h1>{{ tour.name }}</h1>
      <h3>{{ tour.activity }}</h3>
      <br/>
      <h4><span>About</span> {{tour.name}}:{{ tour.about }}</h4>
      <br/>
      <h4><span>Tour Description:</span> {{ tour.description }}</h4>
      <br/>
      <h4><span>Includes:</span> {{ tour.includes }}</h4>
      <br/>
      <h4><span>Duration of the tour:</span> {{ tour.duration }}</h4>
      <br/>
      <h4><span>Important things:</span> {{ tour.important }}</h4>
      <br/>
      <h4><span>Price:</span> {{ tour.price }}</h4>
      <RouterLink to="/tours" class="back-button">Go back</RouterLink>
    </div>
  </template>

<style scoped>
h1 , h3{
    font-weight: bold;
}
.tour-detail {
    margin-bottom: 30px;
    margin-top: 10px;
}
span {
    font-weight: bolder;
}
.back-button {
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
  text-decoration: none;
}
</style>
  
  