<script setup>
const props = defineProps(['path'])
const { path } = toRefs(props)

const emit = defineEmits(['update:path', 'upload'])

const supabase = useSupabaseClient()

const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage.from('avatars').download(path.value)
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

    if (uploadError) throw uploadError

    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    alert(error.message)
  } finally {
    uploading.value = false
  }
}

downloadImage()


watch(path, () => {
  if (path.value) {
    downloadImage()
  }
})
</script>

<template>
    <div>
      <!-- File input field. Hidden from view but functional. -->
      
      <input
        style="display: none;"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
  
      <!-- Label associating with the file input above. It allows the click event on the image or the placeholder to open the file selection dialog. -->
      <label for="single" class="cursor-pointer">
        <!-- Image display. If 'src' exists, this image will be shown. Hovering over this will trigger opacity change. -->
        <NuxtImg
        format="webp" quality="10" sizes="100vw sm:50vw md:400px"
          v-if="src"
          :src="src"
          alt="Avatar"
          class="avatar image hover:opacity-50 rounded-full transition-all"
          style="width: 10em; height: 10em;"
        />
  
        <!-- Placeholder if 'src' does not exist. -->
        <div
          v-else
          class="avatar no-image hover:bg-gray-300"
          :style="{ height: size, width: size }"
        />
      </label>
  
      
    </div>
  </template>
  