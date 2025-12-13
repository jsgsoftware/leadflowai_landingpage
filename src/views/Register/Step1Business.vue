<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import RadioGroup from '@/components/ui/RadioGroup.vue'
import type { RegistrationData } from '@/types/registration'

defineProps<{
  formData: RegistrationData
  errors: Partial<Record<keyof RegistrationData, string>>
}>()

const industries = [
  { label: 'Online gambling & casinos', value: 'gambling' },
  { label: 'Automotive', value: 'automotive' },
  { label: 'Beauty, products and services', value: 'beauty' },
  { label: 'Digital agency', value: 'agency' },
  { label: 'Education services', value: 'education' },
  { label: 'Financial services', value: 'finance' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Other', value: 'other' }
]

const sizes = [
  { label: '1-10', value: '1-10' },
  { label: '11-20', value: '11-20' },
  { label: '21-50', value: '21-50' },
  { label: '51-200', value: '51-200' },
  { label: '201-1,000', value: '201-1000' },
  { label: 'More than 1,000', value: '1000+' }
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-white mb-2">Tell us more about your business</h2>
    <p class="text-gray-400 mb-6">Hello Mas Comisiones 👋</p>

    <div class="space-y-4">
      <Input
        id="orgName"
        label="Organization name"
        v-model="formData.orgName"
        placeholder="E.g. respond.io"
        :error="errors.orgName"
      />
      
      <Input
        id="website"
        label="Website"
        v-model="formData.website"
        placeholder="E.g. www.respond.io"
        :error="errors.website"
        type="optional"
      />

      <Select
        id="industry"
        label="Industry"
        v-model="formData.industry"
        :options="industries"
        :error="errors.industry"
      />

      <RadioGroup
        id="size"
        label="How many people work at your organization?"
        v-model="formData.size"
        :options="sizes"
        :error="errors.size"
      />
    </div>
  </div>
</template>
