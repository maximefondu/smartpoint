import { prisma } from '@libs/prisma'

export const readRoute = async (id: number) => {
    return await prisma.route.findUnique({
        where: {
            id: id
        },
        include: {
            routeKey: true
        }
    })
}
