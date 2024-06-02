<template>
    <h1>Bicycle Rental</h1>
    <div class="bicycle-rental-container">
        <img src="@/assets/bicycle.jpg"/>
        
            <p>Renting a bicycle is a fantastic way to experience the area.<br/> Our rental rates are simple and affordable: 
                    <br/><span>Half day:</span> 350 dalasis.
                    <br/><span>Full day:</span> 450 dalasis.
                    <br/><span>One week:</span> 2500 dalasis.
                    
                    <br/>For those seeking a more personalized experience, private bicycle tours are also available upon request.
                    <br/> Contact us to book your rental or arrange a custom tour today!</p> 
    </div>

</template>

<style scoped>
h1 {
    font-weight: bolder;
    align-self: baseline;
    margin-bottom: 10px;
    margin-top: 10px;
}

span {
    font-weight: bold;
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