<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster />
  <Navbar />
  <div class="px-20 font-sans pb-5">
    <NuxtPage />
  </div>
</template>