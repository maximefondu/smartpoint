import { useMutation } from 'react-query'
import { Prisma } from '.prisma/client'
import RouteKeyUpdateInput = Prisma.RouteKeyUpdateInput

const updateRouteKey = ({ id, ...data }: RouteKeyUpdateInput & { id: number }) => {
    return fetch(`/api/routeKey/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export const useUpdateRouteKey = () => {
    return useMutation(updateRouteKey)
}
