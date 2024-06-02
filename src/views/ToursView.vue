<script setup>
import { onMounted, ref } from 'vue';
import Card from "@/components/Card.vue";
import data from '@/assets/data/data.json';

const programData = ref([]);

// Fetching the data for populating the cards
onMounted(() => {
  programData.value = data;
});

/////
function viewTourDetail(tourId) {
      this.$router.push({ name: 'tour-detail', params: { id: tourId } });
    }

</script>
<template>
    <h1>I offer these tours:</h1>
    <div class="cards-container">
        <Card />
    </div>
    <h3>Looking for something specific? I offer custom tours as well, tailored to your preferences. Let's chat about your dream adventure and discuss pricing together!</h3>
</template>

<style scoped>
.cards-container {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 50px; */
    margin: auto;
    margin-bottom: 30px;
}
h1 {
    font-weight: bolder;
    align-self: baseline;
    margin-bottom: 10px;
    margin-top: 10px;
}
h3 {
    margin-bottom: 30px;
    font-weight: bold;
}

@media  screen and (max-width: 1024px) {
    .cards-container {
        padding: 50px;
    }
  }
  @media  screen and (max-width: 440px) {
    .cards-container {
        padding: unset;
    }
  }  
</style>