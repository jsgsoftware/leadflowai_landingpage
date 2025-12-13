<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PricingCard from '@/components/PricingCard.vue'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'mo',
    features: [
      '1,000 Contacts',
      'Unified Inbox',
      'Basic Automation',
      'Email Support'
    ],
    isPopular: false
  },
  {
    name: 'Growth',
    price: '$99',
    period: 'mo',
    features: [
      '10,000 Contacts',
      'Advanced AI Agents',
      'Team Collaboration',
      'Priority Support',
      'Analytics Dashboard'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited Contacts',
      'Custom AI Training',
      'Dedicated Account Manager',
      'SLA',
      'API Access'
    ],
    isPopular: false,
    buttonText: 'Contact Sales'
  }
]
</script>

<template>
  <MainLayout>
    <div class="py-24 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p class="text-xl text-gray-400">Choose the plan that's right for your business.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            v-for="(plan, index) in plans"
            :key="index"
            v-bind="plan"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
