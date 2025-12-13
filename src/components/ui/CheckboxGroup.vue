<script setup lang="ts">

const props = defineProps<{
  modelValue: string[]
  options: { label: string; value: string }[]
  label?: string
  error?: string
  id: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (value: string, checked: boolean) => {
  const newValue = [...props.modelValue]
  if (checked) {
    newValue.push(value)
  } else {
    const index = newValue.indexOf(value)
    if (index > -1) newValue.splice(index, 1)
  }
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="mb-4">
    <label v-if="label" class="block text-sm font-medium text-gray-300 mb-2">
      {{ label }} <span class="text-red-500">*</span>
    </label>
    <div class="space-y-2">
      <div v-for="opt in options" :key="opt.value" class="flex items-start">
        <div class="flex items-center h-5">
          <input
            :id="`${id}-${opt.value}`"
            type="checkbox"
            :value="opt.value"
            :checked="modelValue.includes(opt.value)"
            @change="updateValue(opt.value, ($event.target as HTMLInputElement).checked)"
            class="w-4 h-4 text-blue-600 bg-gray-900 border-gray-700 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
          />
        </div>
        <div class="ml-3 text-sm">
          <label :for="`${id}-${opt.value}`" class="font-medium text-gray-300 cursor-pointer select-none">
            {{ opt.label }}
          </label>
        </div>
      </div>
    </div>
    <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>
</template>
