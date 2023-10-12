<script setup lang="ts">
const navbar = "navbar";
</script>
<template>
<div>

    <NuxtLayout :name="navbar">
      <div class="h-full min-h-screen bg-zinc-900">
        <NuxtPage></NuxtPage>
      </div>      
    </NuxtLayout>
</div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>