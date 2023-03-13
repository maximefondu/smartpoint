import { BoxRoute } from '@components/settings/BoxRoute'

export default async function () {
    return (
        <section>
            <h1 className="text-2xl font-bold mb-12">Settings</h1>

            <div className="flex">
                <BoxRoute />
            </div>
        </section>
    )
}
