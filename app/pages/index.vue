<script setup lang="ts">
import type { InferSelectModel } from 'drizzle-orm'
import type { events as eventsTable } from '~/server/db/schema'

type Event = InferSelectModel<typeof eventsTable>

const { data: events, status: fetchStatus } = await useAsyncData<Event[]>(
  'events',
  () => $fetch('/api/events')
)

</script>

<template>
  <h1 class="text-center text-[28px] mb-5 font-bold mt-5">
    All Event
  </h1>

  <div v-if="fetchStatus === 'pending'" class="flex justify-center mt-10">
    กำลังโหลด...
  </div>

  <template v-else>
    <!-- Cards -->
    <div class="grid grid-cols-6 gap-4 mt-5 justify-items-center ">
      <CardEvent v-for="event in events" :key="event.id" :event="event" />
    </div>
  </template>
</template>