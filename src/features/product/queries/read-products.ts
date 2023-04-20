import { readRoute } from '@features/route/queries/read-route'
import { TypeReadProduct } from '@features/product/type'

export const readProducts = async (): Promise<TypeReadProduct[]> => {
    const route = await readRoute(Number(process.env.ID_ROUTE_PRODUCTS))

    // Verify settings completed!
    if (!route?.url || !route?.routeKey) {
        console.error('Route product settings not configured!')
        return []
    }

    const response = await fetch(route.url, {
        method: 'GET'
    })

    if (response.status !== 200) {
        console.error(`Error read products : ${response.statusText}`)
        return []
    }

    let result: any = await response.json()

    // Select array of items!
    if (route?.arrayPath) {
        const paths = route.arrayPath.split('.')

        result = paths.reduce((current, item) => {
            return current[item]
        }, result)
    }

    // Map keys of API!
    try {
        return result.map((product: [string, string]) => {
            return route?.routeKey.reduce((current, item) => {
                if (!item.value) {
                    return current
                }

                //@ts-ignore
                current[item.key] = product[item.value]

                return current
            }, {} as TypeReadProduct)
        })
    } catch (error) {
        console.error(`Error read products : ${response.statusText}`)
        return []
    }
}
