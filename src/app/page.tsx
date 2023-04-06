import { Button } from '@components/Button'

export default async function Home() {
    return (
        <section className="wrap py-16 flex items-center flex-col gap-4">
            <Button href={'/dashboard'}>Dashboard</Button>
            <Button href={'/settings'}>Settings</Button>
        </section>
    )
}
