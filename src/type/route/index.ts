import { RouteKey } from '@prisma/client'

export type DataSubmitRouteProducts = {
    id: number
    url: string
    arrayPath: string
    keys: RouteKey[]
}
