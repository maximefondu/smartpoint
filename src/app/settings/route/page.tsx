import { Button } from '@components/Button'
import { List } from '@components/route/List'

export const dynamic = 'force-dynamic'

export default function async() {
    return (
        <section>
            <h1 className="text-2xl font-bold mb-12">Routes</h1>

            <List />
        </section>
    )
}
