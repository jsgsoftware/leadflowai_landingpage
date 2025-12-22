<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-gray-900 border-b border-gray-800 text-white sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <RouterLink to="/" class="flex items-center gap-2">
            <img src="/brand-assets/logo_thumbnail.svg" alt="Leadflow AI Logo" class="w-8 h-8" />
            <span class="font-bold text-xl tracking-tight">Leadflow AI</span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <RouterLink to="/" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Home
          </RouterLink>
          <RouterLink to="/pricing" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Pricing
          </RouterLink>
          <!-- External Login Link -->
          <a href="https://chat.leadflowai.app/app/login" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Login
          </a>
        </nav>

        <!-- CTA Button (Desktop) -->
        <div class="hidden md:flex items-center">
          <RouterLink to="/register" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/20">
            Start Free Trial
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="toggleMenu" type="button" class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMenuOpen" class="h-6 w-6" aria-hidden="true" />
            <X v-else class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-900 border-b border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink to="/" @click="isMenuOpen = false" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Home
        </RouterLink>
        <RouterLink to="/pricing" @click="isMenuOpen = false" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Pricing
        </RouterLink>
        <a href="https://chat.leadflowai.app/app/login" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Login
        </a>
        <RouterLink to="/register" @click="isMenuOpen = false" class="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center">
          Start Free Trial
        </RouterLink>
      </div>
    </div>
  </header>
</template>
