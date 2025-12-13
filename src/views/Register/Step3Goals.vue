<script setup lang="ts">
import RadioGroup from '@/components/ui/RadioGroup.vue'
import CheckboxGroup from '@/components/ui/CheckboxGroup.vue'
import type { RegistrationData } from '@/types/registration'

defineProps<{
  formData: RegistrationData
  errors: Partial<Record<keyof RegistrationData, string>>
}>()

const useCases = [
  { label: 'Assist with online checkout', value: 'checkout' },
  { label: 'Booking appointments', value: 'appointments' },
  { label: 'Sending quotations', value: 'quotations' },
  { label: 'Booking a free or trial class', value: 'trial_class' },
  { label: 'Customer support', value: 'support' },
  { label: 'Receive payment', value: 'payment' },
  { label: 'Sending bulk broadcasts', value: 'broadcasts' },
  { label: 'Others', value: 'others' }
]

const storageTools = [
  { label: 'HubSpot', value: 'hubspot' },
  { label: 'Salesforce', value: 'salesforce' },
  { label: 'Shopify', value: 'shopify' },
  { label: 'Others', value: 'others' },
  { label: "We don't use any tools to store customer data", value: 'none' }
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-white mb-6">Let's create the best experience for you</h2>

    <div class="space-y-6">
      <CheckboxGroup
        id="useCases"
        label="Why do you chat with customers?"
        v-model="formData.usageGoals"
        :options="useCases"
        :error="errors.usageGoals ? 'Please select at least one option' : ''"
      />

      <RadioGroup
        id="storeData"
        label="How do you store customer data?"
        v-model="formData.storeData"
        :options="storageTools"
        :error="errors.storeData"
      />
    </div>
  </div>
</template>
