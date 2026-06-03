import { ref } from 'vue'
import type { InferSelectModel } from 'drizzle-orm'
import type { events as eventsTable } from '../../server/db/schema'

type Event = InferSelectModel<typeof eventsTable>

export type StatusFilter = 'all' | 'upcoming' | 'today' | 'past'

function toDateOnly(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function getEventStatus(event: Event): 'upcoming' | 'today' | 'past' {
    const today = toDateOnly(new Date())
    const eventDate = toDateOnly(new Date(event.date))

    if (eventDate > today) return 'upcoming'
    if (eventDate < today) return 'past'
    return 'today'
}

export function useEventFilter() {
    const search = ref('')
    const status = ref<StatusFilter>('all')

    function applyFilters(events: Event[]): Event[] {
        let result = [...events]

        // Filter by search
        const q = search.value.trim().toLowerCase()
        if (q) {
            result = result.filter(e => e.name.toLowerCase().includes(q))
        }

        // Filter by status
        if (status.value !== 'all') {
            result = result.filter(e => getEventStatus(e) === status.value)
        }

        return result
    }

    return {
        search,
        status,
        applyFilters,
    }
}