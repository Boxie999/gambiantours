<template>
    <hr>
      <footer>
        <img src="@/assets/gambia-explore.png" class="footer-img"/>
        <p class="text-center">© 2024 Boxy Webdevelopment. All rights reserved.</p>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: auto !important;
}
.footer-img {
    height: 100px;
}
hr {
    width: 100vw;
}

@media  screen and (max-width: 440px) {
    .footer-img {
        height: 80px;
        margin-bottom: 5px;
    }
    p {
        font-size: x-small;
    }
    footer {
        flex-direction: column !important;
    }
  }
</style>