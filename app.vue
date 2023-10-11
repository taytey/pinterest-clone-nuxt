<script setup lang="ts">
const navbar = "navbar";

const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });

</script>
<template>
  <div class="h-screen">
    <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500">
      <h1 class="text-white text-4xl">Loading</h1>

  </div>

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