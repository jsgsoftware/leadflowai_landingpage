<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.location.href = 'https://chat.leadflowai.app/app/login'
})
</script>

<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center text-white">
    <div class="animate-pulse">Redirecting to login...</div>
  </div>
</template>
