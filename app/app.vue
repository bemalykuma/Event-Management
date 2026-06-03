<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster />
  <Navbar />
  <div class="xl:px-20 px-2 lg:px-10 font-sans">
    <NuxtPage />
  </div>
</template>