<template>
    <div>
      <div v-for="image in images">
        <img :src="image.imageSrc" alt="Image from database" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const images = ref([]);
  
  onMounted(async () => {
    try {
      const response = await fetch('/api/images');
      if (response.ok) {
        images.value = await response.json();
        console.log(images.value)
      } else {
        console.error("Error fetching images:", await response.text());
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  });
  </script>
  
  