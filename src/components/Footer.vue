<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md"></div>
            <span class="text-white font-bold text-lg">Leadflow AI</span>
          </div>
          <p class="text-sm">
            Automate your lead generation and customer support with AI.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-white font-semibold mb-3">Product</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/" class="hover:text-blue-400">Features</RouterLink></li>
            <li><RouterLink to="/pricing" class="hover:text-blue-400">Pricing</RouterLink></li>
            <li><a href="#" class="hover:text-blue-400">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-3">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400">About Us</a></li>
            <li><a href="#" class="hover:text-blue-400">Contact</a></li>
            <li><a href="#" class="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-3">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/privacy-policy" class="hover:text-blue-400">Privacy Policy</RouterLink></li>
            <li><RouterLink to="/terms-of-service" class="hover:text-blue-400">Terms of Service</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        &copy; {{ new Date().getFullYear() }} Leadflow AI. All rights reserved.
      </div>
    </div>
  </footer>
</template>
