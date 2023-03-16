import { prisma } from '@libs/prisma'

export const readRoutes = async () => {
    return await prisma.route.findMany({
        include: {
            routeKey: true
        }
    })
}
