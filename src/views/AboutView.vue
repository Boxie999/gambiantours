<template>
    <h1>About Me</h1>
    <div class="bicycle-rental-container">
        <img src="@/assets/Haruna.jpeg"/>
        
            <p>My name is Haruna Ceesay, and I am a registered bicycle renter located at the Senegambia Strip in Kololi. With a passion for adventure and a deep love for my country, I am dedicated to offering unforgettable tours and trips to tourists visiting The Gambia. Whether you're looking to explore the local markets, discover the beauty of our national parks, or immerse yourself in the rich cultural heritage of our communities, I am here to guide you every step of the way. My tours are designed to provide an authentic experience, allowing you to see The Gambia through the eyes of a local. I look forward to sharing the beauty and excitement of my homeland with you.</p> 
    </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  align-self: baseline;
  margin-bottom: 10px;
  margin-top: 10px;
}

.bicycle-rental-container {
    display: flex;
    flex-direction: row;
    gap: 2em;
    margin-bottom: 30px;
}
img {
    height: 300px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
}
p {
    width: 50%;
    font-size: 20px;
}
@media  screen and (max-width: 1024px) {
    .bicycle-rental-container {
        flex-direction: column;
    }
    img {
        margin: auto;
    }
    p {
        width: 95%;
        margin: auto;
    }
  }
@media  screen and (max-width: 440px) {
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
  }
</style>
