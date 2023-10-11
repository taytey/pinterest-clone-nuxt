<template>
  <div>
    <!--Todo: Pass data from the link to the modal to display the correct information from the database for the image clicked-->
        
    </div>
    <div class="py-20 pl-10 pr-10 columns-2 md:columns-5 lg-columns-4">
      <div v-for="image in images" :key="image.id" class="mb-4">
            <NuxtImg class="hover:opacity-50 transition-all h-auto max-w-full rounded-lg" :src="image.imageSrc" alt="image from database" />
        </div>
      </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  
  const images = ref([]);
    
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient("https://tceaemmtpjrkvqnscbli.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZWFlbW10cGpya3ZxbnNjYmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MzAxOTYsImV4cCI6MjAxMTUwNjE5Nn0.eg6lB_56RBdQM-ZII3ynazYbc-GwzwglA6JGMU0TkY4")

async function getImages() {
    //imagesLoaded to be used to transition images in when they are fully loaded
    const { data } = await supabase.from('images').select('imageSrc')
    images.value = data
}


onMounted(() => {
  getImages()

})
</script>
  
  