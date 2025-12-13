<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
    <Header />
    <main class="flex-grow">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
