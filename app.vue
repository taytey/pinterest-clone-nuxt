<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const navbar = "navbar";
</script>
<template>
  <div>
    <NuxtLayout :name="navbar">
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>