<script setup lang="ts">
import { Check } from 'lucide-vue-next'

defineProps<{
  name: string
  price: string
  period?: string
  features: string[]
  isPopular?: boolean
  buttonText?: string
}>()
</script>

<template>
  <div class="relative bg-gray-800 rounded-2xl border flex flex-col p-8 transition-transform hover:-translate-y-1 hover:shadow-xl"
    :class="[isPopular ? 'border-blue-500 shadow-blue-500/10' : 'border-gray-700']">
    
    <div v-if="isPopular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
      Most Popular
    </div>

    <div class="mb-6">
      <h3 class="text-xl font-bold text-white mb-2">{{ name }}</h3>
      <div class="flex items-baseline gap-1">
        <span class="text-4xl font-bold text-white">{{ price }}</span>
        <span v-if="period" class="text-gray-400">/{{ period }}</span>
      </div>
    </div>

    <ul class="space-y-4 mb-8 flex-grow">
      <li v-for="(feature, idx) in features" :key="idx" class="flex items-start gap-3">
        <Check class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <span class="text-gray-300 text-sm">{{ feature }}</span>
      </li>
    </ul>

    <button class="w-full py-3 rounded-lg font-semibold transition-colors"
      :class="[
        isPopular 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'bg-gray-700 hover:bg-gray-600 text-white'
      ]">
      {{ buttonText || 'Get Started' }}
    </button>
  </div>
</template>
