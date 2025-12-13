<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { z, type ZodIssue } from 'zod'
import { MessageCircle } from 'lucide-vue-next'
import Step1Business from './Step1Business.vue'
import Step2Acquisition from './Step2Acquisition.vue'
import Step3Goals from './Step3Goals.vue'
import Step4Profile from './Step4Profile.vue'
import { type RegistrationData, INITIAL_DATA } from '@/types/registration'

const currentStep = ref(1)
const totalSteps = 4
const formData = reactive<RegistrationData>({ ...INITIAL_DATA })
const errors = ref<Partial<Record<keyof RegistrationData, string>>>({})

// Validation Schemas
const step1Schema = z.object({
  orgName: z.string().min(1, 'Organization name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  size: z.string().min(1, 'Please select company size')
})

const step2Schema = z.object({
  mainCustomers: z.string().min(1, 'Please select your main customers'),
  acquisitionChannels: z.array(z.string()).min(1, 'Select at least one channel')
})

const step3Schema = z.object({
  usageGoals: z.array(z.string()).min(1, 'Select at least one use case'),
  storeData: z.string().min(1, 'Please select a storage method')
})

const step4Schema = z.object({
  role: z.string().min(1, 'Please select your role'),
  phoneNumber: z.string().min(5, 'Valid phone number is required')
})

const schemas = computed(() => ({
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
  4: step4Schema
}))

const isCurrentStepValid = computed(() => {
  const schema = schemas.value[currentStep.value as keyof typeof schemas.value]
  if (!schema) return true
  const result = schema.safeParse(formData)
  return result.success
})

// Real-time validation
watch(formData, () => {
   const schema = schemas.value[currentStep.value as keyof typeof schemas.value]
   if (!schema) return

   const result = schema.safeParse(formData)
   if (!result.success) {
     const newErrors: Partial<Record<keyof RegistrationData, string>> = {}
     result.error.issues.forEach((err: ZodIssue) => {
        const field = err.path[0] as keyof RegistrationData
        const value = formData[field]
        
        // Show other errors if value is present (invalid format)
        if (value && String(value).length > 0) {
             newErrors[field] = err.message
        }
     })
     errors.value = newErrors
   } else {
     errors.value = {}
   }
}, { deep: true })

const validateStep = (step: number): boolean => {
  const schema = schemas.value[step as keyof typeof schemas.value]
  if (!schema) return true
  
  const result = schema.safeParse(formData)
  if (!result.success) {
    const newErrors: Partial<Record<keyof RegistrationData, string>> = {}
    result.error.issues.forEach((err: ZodIssue) => {
      const field = err.path[0] as keyof RegistrationData
      newErrors[field] = err.message
    })
    errors.value = newErrors
    return false
  }
  
  errors.value = {}
  return true
}

const submitForm = () => {
  // Simulate API call
  console.log('Submitting form:', formData)
  // Redirect to Signup
  window.location.href = 'https://chat.leadflowai.app/app/auth/signup'
}

const nextStep = () => {
  if (validateStep(currentStep.value)) {
    if (currentStep.value < totalSteps) {
      currentStep.value++
      // Clear errors on step change
      errors.value = {}
    } else {
      submitForm()
    }
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    errors.value = {}
  }
}

const progressWidth = computed(() => {
  return `${(currentStep.value / totalSteps) * 100}%`
})
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col font-sans">
    <!-- Header -->
    <header class="h-16 flex items-center justify-between px-6 sm:px-12 border-b border-gray-900 relative">
      <div class="flex items-center gap-2">
        <!-- Logo -->
             <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md"></div>
        <span class="font-bold text-lg">Leadflow AI</span>
      </div>
      <div>
         <!-- Language selector placeholder if needed -->
         <div class="text-sm text-gray-400 flex items-center gap-1 cursor-pointer hover:text-white">
            <span>GB Language</span>
            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
         </div>
      </div>
      <!-- Progress Bar -->
      <div class="absolute bottom-0 left-0 h-1 bg-gray-800 w-full">
        <div class="h-full bg-blue-600 transition-all duration-300 ease-out" :style="{ width: progressWidth }"></div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
      <div class="w-full max-w-2xl">
        <transition name="fade" mode="out-in">
          <component 
            :is="
              currentStep === 1 ? Step1Business :
              currentStep === 2 ? Step2Acquisition :
              currentStep === 3 ? Step3Goals :
              Step4Profile
            "
            :formData="formData"
            :errors="errors"
          />
        </transition>
      </div>
    </main>

    <!-- Footer Navigation -->
    <footer class="h-24 sticky bottom-0 bg-gray-950 flex items-center justify-between px-6 sm:px-12 max-w-5xl mx-auto w-full">
      <div class="text-gray-500 text-sm">
        Step {{ currentStep }} of {{ totalSteps }}
      </div>
      
      <div class="flex items-center gap-4">
        <button 
          v-if="currentStep > 1"
          @click="prevStep"
          class="px-6 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors bg-gray-900 border border-gray-700 flex items-center gap-2"
        >
          &lt; Back
        </button>
        
        <button 
          @click="nextStep"
          :disabled="!isCurrentStepValid"
          class="px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          :class="[
            !isCurrentStepValid 
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-200 hover:bg-white text-gray-900'
          ]"
        >
          {{ currentStep === totalSteps ? 'Get started' : 'Next' }} &gt;
        </button>
      </div>
    </footer>
    
    <!-- Have an account link (Step 1 only usually, but kept simple) -->
    <div v-if="currentStep === 1" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-500 hidden md:block">
        Have an account? <a href="https://chat.leadflowai.app/app/login" class="text-blue-500 hover:underline">Sign in</a>
    </div>

     <!-- Chat Widget Placeholder -->
     <div class="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 shadow-lg z-50">
        <MessageCircle class="w-6 h-6 text-white" />
     </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
