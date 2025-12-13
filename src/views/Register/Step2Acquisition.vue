<script setup lang="ts">
import Select from '@/components/ui/Select.vue'
import CheckboxGroup from '@/components/ui/CheckboxGroup.vue'
import type { RegistrationData } from '@/types/registration'

defineProps<{
  formData: RegistrationData
  errors: Partial<Record<keyof RegistrationData, string>>
}>()

const customerTypes = [
  { label: 'B2B (Business to Business)', value: 'b2b' },
  { label: 'B2C (Business to Consumer)', value: 'b2c' },
  { label: 'Both', value: 'both' }
]

const acquisitionSources = [
  { label: 'Digital ads (Meta ads, Google ads, TikTok ads, etc.)', value: 'ads' },
  { label: 'Organic sources (Social media engagement, website visitors, etc.)', value: 'organic' },
  { label: 'Offline methods (e.g. Events, retail shops, billboards, etc.)', value: 'offline' },
  { label: 'Others', value: 'others' },
  { label: "We don't actively try to get new customers", value: 'none' }
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-white mb-6">Help us get to know your organization</h2>

    <div class="space-y-6">
      <Select
        id="mainCustomers"
        label="Who are your main customers?"
        v-model="formData.mainCustomers"
        :options="customerTypes"
        :error="errors.mainCustomers"
      />

      <CheckboxGroup
        id="acquisition"
        label="How does your organization get new customers?"
        v-model="formData.acquisitionChannels"
        :options="acquisitionSources"
        :error="errors.acquisitionChannels ? 'Please select at least one option' : ''"
      />
    </div>
  </div>
</template>
