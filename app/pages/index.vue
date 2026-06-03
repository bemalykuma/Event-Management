<script setup lang="ts">
import type { InferSelectModel } from 'drizzle-orm'
import type { events as eventsTable } from '~/server/db/schema'
import { useEventFilter } from '~/composables/useEventFilter'

type Event = InferSelectModel<typeof eventsTable>

const { data: events, status: fetchStatus } = await useAsyncData<Event[]>(
  'events',
  () => $fetch('/api/events')
)

const { search, status, dateRange, applyFilters } = useEventFilter()

const filteredEvents = computed(() => {
  if (!events.value) return []
  return applyFilters(events.value)
})

</script>

<template>
  <h1 class="text-center text-[28px] mb-5 font-bold mt-5">
    All Event
  </h1>
  <EventFilter v-model:search="search" v-model:status="status" v-model:date-range="dateRange" />

  <div v-if="fetchStatus === 'pending'" class="flex justify-center mt-10">
    กำลังโหลด...
  </div>
  <div v-else-if="filteredEvents.length === 0" class="flex justify-center mt-10 text-gray-500">
    Not Found
  </div>

  <template v-else>
    <!-- Cards -->
    <div class="grid grid-cols-6 gap-4 mt-5 justify-items-center ">
      <CardEvent v-for="event in filteredEvents" :key="event.id" :event="event" />
    </div>
  </template>
</template>