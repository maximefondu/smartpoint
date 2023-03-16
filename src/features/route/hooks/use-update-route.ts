import { useMutation } from 'react-query'
import { Prisma } from '.prisma/client'
import RouteUpdateInput = Prisma.RouteUpdateInput

const updateRoute = ({ id, ...data }: RouteUpdateInput & { id: number }) => {
    return fetch(`/api/route/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

export const useUpdateRoute = () => {
    return useMutation(updateRoute)
}
