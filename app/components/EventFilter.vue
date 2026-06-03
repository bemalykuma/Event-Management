<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { StatusFilter, SortOption } from '~/composables/useEventFilter'

const search = defineModel<string>('search', { default: '' })
const status = defineModel<StatusFilter>('status', { default: 'all' })
const dateRange = defineModel<{ start: Date | null; end: Date | null }>('dateRange', {
    default: () => ({ start: null, end: null }),
})
const sortBy = defineModel<SortOption>('sortBy', { default: 'sort_by' })

</script>

<template>
    <Card class="rounded-3xl lg:rounded-full border-black border-2 p-4 lg:px-4 lg:py-2">
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-3 lg:items-center md:justify-between">

            <!-- Date Range and Status -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full lg:w-auto">
                <DateRangePicker v-model="dateRange" class="w-full sm:w-auto" />
                <StatusPicker v-model="status" class="w-full sm:w-auto" />
                <SortPicker v-model="sortBy" class="w-full sm:w-auto" />
            </div>

            <!-- Search -->
            <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <SearchInput v-model="search" class="w-full lg:w-62.5 xl:w-100 rounded-full border-black border-2" />
            </div>

            <!-- Button -->
            <div>
                <NuxtLink to="/events/add" class="w-full sm:w-auto">
                    <Button class="w-full rounded-full whitespace-nowrap">
                        + Add Event
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </Card>
</template>