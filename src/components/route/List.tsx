import { Card } from '@components/route/card/Index'

import { readRoutes } from '@features/route/queries/read-routes'

export const List = (async () => {
    const routes = await readRoutes()

    return (
        <ul className="col">
            {routes.map((route) => {
                return (
                    <li key={route.id} className="col-span-6">
                        <Card route={route} />
                    </li>
                )
            })}
        </ul>
    )
}) as any
