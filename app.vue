<script setup lang="ts">
const user = useSupabaseUser()

const navbar = "navbar";
</script>
<template>
  <div>
    <NuxtLayout :name="navbar">
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>