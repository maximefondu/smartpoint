import { readRoute } from '@features/route/queries/read-route'
import { TypeReadProduct } from '@features/product/type'

export const readProducts = async (): Promise<TypeReadProduct[]> => {
    const route = await readRoute(Number(process.env.ID_ROUTE_PRODUCTS))

    if (!route?.url || !route?.routeKey) {
        return []
    }

    const response = await fetch(route.url, {
        method: 'GET'
    })

    if (response.status !== 200) {
        return []
    }

    const result: Record<string, string>[] = await response.json()

    return result.map((product) => {
        return route?.routeKey.reduce((current, item) => {
            if (!item.value) {
                return current
            }

            //@ts-ignore
            current[item.key] = product[item.value]

            return current
        }, {} as TypeReadProduct)
    })
}
