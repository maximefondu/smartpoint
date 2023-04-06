import { Button } from '@components/Button'
import { List } from '@components/route/List'

export default function async() {
    return (
        <section className="wrap py-16">
            <Button href={'/settings'} intent="link">
                Retour
            </Button>
            <h1 className="text-2xl font-bold mb-12">Settings</h1>

            <List />
        </section>
    )
}
