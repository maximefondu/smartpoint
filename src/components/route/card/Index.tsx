'use client'

import { Route, RouteKey } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Box } from '@components/Box'
import { Button } from '@components/Button'
import { SettingsUrl } from '@components/route/card/SettingsUrl'
import { SettingsKeys } from '@components/route/card/SettingsKeys'
import { SettingsArrayPath } from '@components/route/card/SettingsArrayPath'

import { useUpdateRouteKey } from '@features/routeKey/hooks/use-update-routeKey'
import { useUpdateRoute } from '@features/route/hooks/use-update-route'
import { DataSubmitRouteProducts } from '@type/route'

type Props = {
    route: Route & {
        routeKey: RouteKey[]
    }
}

export const Card = ({ route }: Props) => {
    const { mutateAsync: updateRouteKey } = useUpdateRouteKey()
    const { mutateAsync: updateRoute } = useUpdateRoute()

    const useFormRoute = useForm<DataSubmitRouteProducts>({
        defaultValues: {
            id: route.id,
            url: route.url ?? '',
            arrayPath: route.arrayPath ?? '',
            keys: route.routeKey ?? []
        }
    })

    const submit = async (data: DataSubmitRouteProducts) => {
        // Verify url api exist
        try {
            const response = await fetch(data.url, {
                method: 'GET'
            })

            if (response.status !== 200) {
                useFormRoute.setError('url', { type: 'custom', message: 'URL API not found!' })
                return
            }

            // Verify data returned is Object or Array
            try {
                const result = await response.json()

                if (typeof result !== 'object') {
                    useFormRoute.setError('url', { type: 'custom', message: 'URL API not return Object!' })
                    return
                }
            } catch (error) {
                useFormRoute.setError('url', { type: 'custom', message: String(error) })
                return
            }
        } catch (error) {
            useFormRoute.setError('url', { type: 'custom', message: String(error) })
            return
        }

        const result = await updateRoute({
            id: data.id,
            url: data.url,
            arrayPath: data.arrayPath
        })

        if (result.status !== 200) {
            toast.error('Error while updating the route products!', {
                description: `Message: ${result.statusText}`
            })
            return
        }

        data.keys.forEach(async (item) => {
            const response = await updateRouteKey({
                id: item.id,
                value: item.value
            })

            if (response.status !== 200) {
                toast.error('Error while updating the database route keys!', {
                    description: `Message: ${response.statusText}`
                })
            }
        })

        toast.success('Route products updated!')
    }

    return (
        <Box>
            <h2 className="text-xl font-bold mb-4">{route.name}</h2>

            <form className="flex flex-col gap-12" onSubmit={useFormRoute.handleSubmit(submit)}>
                <SettingsUrl useFormRoute={useFormRoute} />
                <SettingsArrayPath useFormRoute={useFormRoute} />
                <SettingsKeys useFormRoute={useFormRoute} />

                <Button className="w-full mt-8" type="submit" loading={useFormRoute.formState.isSubmitting}>
                    Save
                </Button>
            </form>
        </Box>
    )
}
