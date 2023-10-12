<template>
    <div class="py-20 pl-10 pr-10 columns-2 md:columns-5 lg-columns-4">
      <div v-for="image in images" :key="image.id" class="mb-4">
            <NuxtImg class="h-auto max-w-full rounded-lg" format="webp" quality="10" sizes="100vw sm:50vw md:400px" :src="image.imageSrc" loading="lazy" />
        </div>
      </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  
  const images = ref([]);
    
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient("https://tceaemmtpjrkvqnscbli.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZWFlbW10cGpya3ZxbnNjYmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MzAxOTYsImV4cCI6MjAxMTUwNjE5Nn0.eg6lB_56RBdQM-ZII3ynazYbc-GwzwglA6JGMU0TkY4")

async function getImages() {
    const { data } = await supabase.from('images').select('imageSrc')
    images.value = data
}


onMounted(() => {
  getImages()

})
</script>
  
  