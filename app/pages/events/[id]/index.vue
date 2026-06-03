<script setup lang="ts">
import type { InferSelectModel } from 'drizzle-orm'
import type { events as eventsTable } from '~/server/db/schema'
import { CalendarDays, MapPin, Users, Pencil, Menu, Infinity as InfinityIcon } from '@lucide/vue'
import { Button } from '@/components/ui/button'

type Event = InferSelectModel<typeof eventsTable>

const menuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const { data: event, status, error } = await useAsyncData<Event>(
    `event-${String(route.params.id)}`,
    () => $fetch(`/api/events/${String(route.params.id)}`),
    { getCachedData: () => undefined }
)

const formattedDate = computed(() => {
    if (!event.value?.date) return ''
    return new Date(event.value.date).toLocaleString('en-US', {
        timeZone: 'Asia/Bangkok',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
})

const remaining = computed(() => {
    if (!event.value) return 0
    if (event.value.maxParticipants === null) return Infinity
    return event.value.maxParticipants - (event.value.registeredCount ?? 0)
})

useHead({
    title: `${event.value?.name} - GetEvent`
})

</script>

<template>
    <div v-if="status === 'pending'" class="px-4 py-10 text-center">
        กำลังโหลด...
    </div>

    <div v-else-if="error" class="px-4 py-10 text-center">
        เกิดข้อผิดพลาด
    </div>

    <div v-if="event" class="w-full mx-auto px-20 py-8">
        <!-- Breadcrumb -->
        <div class="text-sm text-gray-500 mb-4 flex flex-wrap">
            <NuxtLink to="/" class="hover:underline">หน้าหลัก</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-black font-medium line-clamp-1">{{ event.name }}</span>
        </div>

        <!-- Main Card -->
        <div class="border-2 border-black rounded-[20px] p-5 flex relative flex-row gap-5 w-full">
            <!-- Menu -->
            <div class="absolute top-4 right-4 flex justify-end">
                <button @click="menuOpen = !menuOpen" class="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                    <Menu class="w-5 h-5 absolute text-white" :stroke-width="6.5" />
                    <Menu class="w-5 h-5 relative" :stroke-width="3" />
                </button>
                <div v-if="menuOpen"
                    class="absolute top-10 right-0 bg-white border rounded-[10px] shadow-md z-10 w-36 py-1">
                    <button
                        class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                        @click="router.push(`/events/${String(event?.id)}/edit`)">
                        <Pencil class="w-5 h-5" />
                        <p>แก้ไข</p>
                    </button>
                </div>
            </div>

            <!-- Image -->
            <img :src="event.imageUrl ?? 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'"
                :alt="event.name" class="w-72 aspect-3/4 object-cover rounded-[12px] shrink-0" />

            <!-- Content -->
            <div class="flex flex-col flex-1 gap-2 min-w-0 pt-15">
                <h1 class="text-3xl font-bold leading-snug wrap-break-word">
                    {{ event.name }}
                </h1>

                <!-- Date -->
                <div class="flex items-start gap-2 text-gray-600 text-base mt-3">
                    <CalendarDays class="w-5 h-5 shrink-0 mt-0.5" />
                    <span class="wrap-break-word">{{ formattedDate }}</span>
                </div>

                <!-- Location -->
                <div class="flex items-start gap-2 text-gray-600 text-base mt-2">
                    <MapPin class="w-5 h-5 shrink-0 mt-0.5" />
                    <span class="wrap-break-word">{{ event.location }}</span>
                </div>

                <!-- Bottom -->
                <div class="flex flex-col items-end justify-between gap-4 mt-auto pt-6">
                    <!-- Participants -->
                    <div class="flex items-center gap-2 text-base">
                        <Users class="w-4 h-4 text-black shrink-0" />
                        <span class="text-black font-medium flex items-center gap-1">
                            จำนวนผู้เข้าร่วม {{ event.registeredCount ?? 0 }} /
                            <InfinityIcon v-if="event.maxParticipants === null" class="w-4 h-4" />
                            <span v-else>{{ event.maxParticipants }}</span>
                        </span>
                    </div>

                    <!-- Register Button -->
                    <div :style="remaining <= 0 ? 'cursor: no-drop' : ''" class="w-auto">
                        <Button v-if="remaining <= 0" class="rounded-[10px] w-55 text-lg py-5 p-6" :disabled="true">
                            ผู้เข้าร่วมเต็มแล้ว
                        </Button>
                        <Button v-else class="rounded-[10px] w-55 text-lg py-5 p-6">
                            เข้าร่วมกิจกรรม
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Description -->
        <div v-if="event.description"
            class="mt-6 border rounded-[12px] p-5 text-gray-700 leading-relaxed text-base whitespace-pre-wrap wrap-break-word">
            {{ event.description }}
        </div>
    </div>
</template>