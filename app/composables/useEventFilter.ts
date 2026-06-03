import { ref } from 'vue'
import type { InferSelectModel } from 'drizzle-orm'
import type { events as eventsTable } from '../../server/db/schema'

type Event = InferSelectModel<typeof eventsTable>

export function useEventFilter() {
    const search = ref('')

    function applyFilters(events: Event[]): Event[] {
        let result = [...events]

        // Filter by search
        const q = search.value.trim().toLowerCase()
        if (q) {
            result = result.filter(e => e.name.toLowerCase().includes(q))
        }
        return result
    }

    return {
        search,
        applyFilters,
    }
}