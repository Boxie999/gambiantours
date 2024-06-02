<template>
<h1>Contact Me to Book a Tour</h1>
<div class="page-container">
    <div class="text-container">
<h2>You can find me opposite the Hard Rock Cafe and next to Africell in Kololi as shown on the map: </h2>
<br/>
<h2>Or you can contact me via phone or e-mail:</h2>
<br/>
<h2><span>Mobile number:</span>+220 975 6131</h2>
<h2><span>Email: </span> harunacesay490@gmail.com</h2>
</div>
<div class="map-container">
    <img class="map" src="/src/assets/map.png" alt="Gambian tours"/>
</div>
</div>

</template>

<style scoped>
h1 {
  font-weight: bold;
  align-self: baseline;
  margin-bottom: 10px;
  margin-top: 10px;
}
span {
    font-weight: bold;
}
.page-container {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
}
.text-container {
    display: flex;
    flex-direction: column;
    width: 60%;
}
.map-container {
    width: 40%;
    height: unset;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.map {
    width: 300px;
    height: unset;
}
.bicycle-rental-container {
        flex-direction: column;
    }
    img {
        height: 200px;
        margin: auto;
    }
    p {
        width: 95%;
        margin: auto;
    }
    @media  screen and (max-width: 1024px) {
        .page-container {
        flex-direction: column;
    }
    .map-container {
        width: 100%;
    }
    .map {
        margin: auto;
    }
    .text-container {
        width: 95%;
        margin-bottom: 20px
    }
  }    
@media  screen and (max-width: 440px) {
    .page-container {
        flex-direction: column;
    }
    .map-container {
        width: 100%;
    }
    .map {
        margin: auto;
    }
    .text-container {
        width: 95%;
        margin-bottom: 20px
    }
  }
</style>