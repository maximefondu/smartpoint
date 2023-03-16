'use client'

import { Route, RouteKey } from '@prisma/client'

import { Box } from '@components/Box'
import { SettingsUrl } from '@components/route/card/SettingsUrl'
import { SettingsKeys } from '@components/route/card/SettingsKeys'

type Props = {
    route: Route & {
        routeKey: RouteKey[]
    }
}

export const Card = ({ route }: Props) => {
    return (
        <Box>
            <h2 className="text-xl font-bold mb-4">{route.name}</h2>
            <SettingsUrl route={route} />
            <SettingsKeys route={route} />
        </Box>
    )
}
