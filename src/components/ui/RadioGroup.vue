<script setup lang="ts">
defineProps<{
  modelValue: string
  options: { label: string; value: string }[]
  label?: string
  error?: string
  id: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="mb-4">
    <label v-if="label" class="block text-sm font-medium text-gray-300 mb-2">
      {{ label }} <span class="text-red-500">*</span>
    </label>
    <div class="space-y-2">
      <div v-for="opt in options" :key="opt.value" class="flex items-center">
        <input
          :id="`${id}-${opt.value}`"
          type="radio"
          :name="id"
          :value="opt.value"
          :checked="modelValue === opt.value"
          @change="$emit('update:modelValue', opt.value)"
          class="w-4 h-4 text-blue-600 bg-gray-900 border-gray-700 focus:ring-blue-500 focus:ring-offset-gray-900"
        />
        <label :for="`${id}-${opt.value}`" class="ml-3 block text-sm font-medium text-gray-300 cursor-pointer">
          {{ opt.label }}
        </label>
      </div>
    </div>
    <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>
</template>
