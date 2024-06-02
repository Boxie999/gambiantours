<template>
 <header class="header">
        <h1 class="headline"><span class="title">Haruna's Adventure Tours</span><br/>
        <span class="second-line">welcome you in The Gambia -</span></h1> 
        <h2 class="italic">A land full of excitement, culture and breathtaking landscapes.</h2>
        <div class="paragraph">
            <div class="paragraph-text">
                <p>Discover parts of this charming country that goes beyond the ordinary tourist trails.<br/>
                   Our thoroughly curated trips invite you to see The Gambia like never before, filled with wonder, warmth and unforgettable moments.</p>
                <p>All of our private trips include a variety of experiences, either on bicycles or on four     wheels. <br/>
               From peaceful river cruises to vibrant market explorations, we tailor each adventure to showcase the best of The Gambia. </p>
            </div>
            
            <img class="paragraph-img" src="@/assets/picture.jpeg"/>
        </div>

        <!-- <a href="mailto:cyclewarriorgirl@gmail.com" target="_blank" rel="noopener noreferrer">E-mail</a> -->
    </header>        
</template>

<style scoped>
.title {
  font-weight: bold;
  font-size: 70px;
}
.second-line {
  font-weight: bold;
  font-size: 40px;
}
.italic {
  font-style: italic;
  align-self: baseline;
  font-size: 30px;
  margin-bottom: 20px;
}
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
}
.headline {
    font-family: Arial, Helvetica, sans-serif;
    /* font-weight: 600;
    font-size: 90px; */
    font-style: normal;
    line-height: normal;
    margin-bottom: 20px;
    align-self: baseline;
  }
  .paragraph {
    /* width: 50vw; */
    display: flex;
    justify-content: space-between;
    gap: 2em;
  }
  .paragraph-text {
    display: flex;
    flex-direction: column;
  }
  .paragraph-img {
    height: 340px;
    border-radius: 20px;
    box-shadow: 3px 3px 3px black;
  }
  p {
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
  }
  
  .explore {
    height: 500px;
  }
 

  @media  screen and (max-width: 1024px) {
    .paragraph {
      flex-direction: column;
    }
    .title {
      font-size: 60px;
    }
    .paragraph-img {
      margin: auto;
    }
  }

  @media  screen and (max-width: 440px) {
    .paragraph {
      flex-direction: column;
    }
    .paragraph-img {
      height: 250px;
      margin: auto;
    }
    .title {
      font-size: 50px;
    }
  }
  @media  screen and (max-width: 360px) {
    .paragraph-img {
      height: 200px;
      margin: auto;
    }
  }
</style>
