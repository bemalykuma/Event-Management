<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { StatusFilter } from '~/composables/useEventFilter'

const search = defineModel<string>('search', { default: '' })
const status = defineModel<StatusFilter>('status', { default: 'all' })

</script>

<template>
    <Card class="rounded-full border-black border-2 p-4 px-4 py-2">
        <div class="flex flex-row gap-3 items-center justify-between">
            <div class="flex">
                <StatusPicker v-model="status" class="w-full sm:w-auto" />
            </div>
            <!-- Search -->
            <div class="flex flex-row gap-3 w-auto">
                <SearchInput v-model="search" class="w-100 rounded-full border-black border-2" />
            </div>
            <!-- Button -->
            <div>
                <NuxtLink to="/events/add" class="w-auto">
                    <Button class="w-full rounded-full whitespace-nowrap">
                        + Add Event
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </Card>
</template>