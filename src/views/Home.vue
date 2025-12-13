<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import { MessageCircle, Zap, Users, BarChart } from 'lucide-vue-next'

const features = [
  {
    title: 'Omnichannel Chat',
    description: 'Connect WhatsApp, Messenger, Instagram, and more in one unified inbox.',
    icon: MessageCircle
  },
  {
    title: 'AI Automation',
    description: 'Automate responses and qualify leads 24/7 with our advanced AI agents.',
    icon: Zap
  },
  {
    title: 'Team Collaboration',
    description: 'Assign conversations, leave internal notes, and work together seamlessly.',
    icon: Users
  },
  {
    title: 'Analytics & Insights',
    description: 'Track performance, response times, and customer satisfaction in real-time.',
    icon: BarChart
  }
]
</script>

<template>
  <MainLayout>
    <!-- Hero Section -->
    <section class="relative pt-20 pb-32 overflow-hidden">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium">
          🚀 AI-Powered Customer Messaging
        </div>
        <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
          Supercharge your <br class="hidden md:block" />
          <span class="text-white">Customer Support</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Centralize all your messaging channels and automate conversations with AI. 
          Boost your sales and make your customers happier.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink to="/register" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
            Start Free Trial
          </RouterLink>
          <a href="#" class="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-gray-700">
            View Demo
          </a>
        </div>
      </div>
      
      <!-- Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-gray-900/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to scale</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed to help you capture leads, support customers, and grow your business.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            v-for="(feature, index) in features" 
            :key="index"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
          />
        </div>
      </div>
    </section>

    <!-- Social Proof / Testimonials (Simplified) -->
    <section class="py-24 border-t border-gray-800">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-500 font-medium mb-8 uppercase tracking-wider text-sm">Trusted by innovative companies</p>
        <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
           <!-- Placeholder Logos -->
           <div class="h-8 w-32 bg-gray-700 rounded"></div>
           <div class="h-8 w-32 bg-gray-700 rounded"></div>
           <div class="h-8 w-32 bg-gray-700 rounded"></div>
           <div class="h-8 w-32 bg-gray-700 rounded"></div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
