<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import type { RegistrationData } from '@/types/registration'

defineProps<{
  formData: RegistrationData
  errors: Partial<Record<keyof RegistrationData, string>>
}>()

const roles = [
  { label: 'Business Owner / Founder', value: 'owner' },
  { label: 'Developer', value: 'developer' },
  { label: 'Marketing Manager', value: 'marketing' },
  { label: 'Sales Manager', value: 'sales' },
  { label: 'Support Manager', value: 'support' },
  { label: 'Other', value: 'other' }
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-white mb-2">Last step, let's set up your profile</h2>

    <div class="space-y-6 mt-6">
      <Select
        id="role"
        label="What is your role at your organization?"
        v-model="formData.role"
        :options="roles"
        :error="errors.role"
      />
      
      <div>
         <Input
          id="phone"
          label="What is your phone number?"
          v-model="formData.phoneNumber"
          placeholder="+1 555 000 0000"
          :error="errors.phoneNumber"
        />
        <div class="mt-2 bg-blue-900/30 border border-blue-800 rounded-lg p-3 text-sm text-gray-300 flex items-center gap-2">
            <span class="text-blue-400">🔒</span>
            We won't share your phone number with anyone.
        </div>
      </div>
    </div>
  </div>
</template>
