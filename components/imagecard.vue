<script setup>
    const isOpen = ref(false);
</script>
<template>
    <UModal v-model="isOpen">
        <h1>I am a modal</h1>
    </UModal>
</template>