<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date'
import { Calendar as CalendarIcon } from '@lucide/vue'

import { Button } from '@/components/ui/button'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface CalendarDateRange {
    start: DateValue | undefined
    end: DateValue | undefined
}

export interface DateRangeModel {
    start: Date | null
    end: Date | null
}

const model = defineModel<DateRangeModel>({
    default: (): DateRangeModel => ({ start: null, end: null }),
})

const df = new DateFormatter('en-US', { dateStyle: 'short' })

const value = ref<CalendarDateRange>({ start: undefined, end: undefined })

watch(value, (v) => {
    model.value = {
        start: v.start ? v.start.toDate(getLocalTimeZone()) : null,
        end: v.end ? v.end.toDate(getLocalTimeZone()) : null,
    }
})

const displayText = computed<string>(() => {
    const { start, end } = value.value
    if (start && end) {
        return `${df.format(start.toDate(getLocalTimeZone()))} - ${df.format(end.toDate(getLocalTimeZone()))}`
    }
    return 'Select date range'
})

function clearDate(): void {
    value.value = { start: undefined, end: undefined }
}
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline"
                class="w-full sm:w-50 justify-between text-left font-normal rounded-full border-black border-2">
                <p>{{ displayText }}</p>
                <CalendarIcon class="mr-2 h-4 w-4" />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
            <RangeCalendar v-model="value" locale="en-US" :number-of-months="1" />
            <div class="p-1 border-t flex justify-end">
                <Button variant="ghost" size="sm" @click="clearDate">Clear</Button>
            </div>
        </PopoverContent>
    </Popover>
</template>