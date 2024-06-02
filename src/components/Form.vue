<script setup>
import { useStore } from '@/utilities/store.js';
import { storeToRefs } from 'pinia';

const store = useStore();
const { isModalOpen } = storeToRefs(store);

const closeContactForm = () => {
    isModalOpen.value = !isModalOpen.value;
}
</script>

<template> 

  <form class="colorful-form">
  <div class="button-container" @click="closeContactForm">
    <button class="x-button">X</button>
  </div>
  <div class="form-group">
    <label class="form-label" for="name">Name:</label>
    <input required="" placeholder="Enter your name" class="form-input" type="text">
  </div>
  <div class="form-group">
    <label class="form-label" for="email">Email:</label>
    <input required="" placeholder="Enter your email" class="form-input" name="email" id="email" type="email">
  </div>
  <div class="form-group">
    <label class="form-label" for="message">Message:</label>
    <textarea required="" placeholder="Enter your message" class="form-input" name="message" id="message"></textarea>
  </div>
  <button class="form-button" type="submit">Submit</button>
</form>



</template>

<style scoped>

.button-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.x-button {
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
}
.colorful-form {
  width: 600px;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  position: fixed;
  z-index: 99999999;
  margin-top: 100px;
  box-shadow: 0px 0px 10px 10px black;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
}

textarea.form-input {
  height: 100px;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff6f69;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #ff5f59;
}

</style>@/store/state.js