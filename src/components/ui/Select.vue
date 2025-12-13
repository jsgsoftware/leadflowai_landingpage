<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  options: { label: string; value: string }[]
  placeholder?: string
  error?: string
  id: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-4">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-300 mb-1">
      {{ label }} <span class="text-red-500">*</span>
    </label>
    <div class="relative">
      <select
        :id="id"
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="w-full bg-gray-900 border text-white rounded-lg px-4 py-2.5 outline-none appearance-none transition-colors border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        :class="{ 'border-red-500': error, 'text-gray-500': !modelValue }"
      >
        <option value="" disabled selected>{{ placeholder || 'Choose one' }}</option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      <!-- Chevron Icon -->
      <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>
</template>
