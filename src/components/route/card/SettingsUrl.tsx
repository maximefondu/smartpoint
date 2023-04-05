import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Route, RouteKey } from '@prisma/client'
import { toast } from 'sonner'

import { Field } from '@components/form/Field'
import { useDebounce } from '@helpers/debounce'
import { useUpdateRoute } from '@features/route/hooks/use-update-route'

type Props = {
    route: Route & {
        routeKey: RouteKey[]
    }
}

type DataSubmit = {
    id: number
    url: string
}

export const SettingsUrl = ({ route }: Props) => {
    const [completed, setCompleted] = useState<boolean>(!!route.url)
    const { mutateAsync: updateRoute } = useUpdateRoute()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({
        defaultValues: {
            id: route.id,
            url: route.url
        }
    })

    const debouncedChangeHandler = useDebounce(async (data: DataSubmit) => {
        setCompleted(false)

        /**
         * Stop when url was empty
         */
        if (!data.url) {
            return
        }

        /**
         * Verify url exist
         */
        const response = await fetch(data.url, {
            method: 'GET'
        })

        if (response.status !== 200) {
            setError('url', { type: 'custom', message: 'API not found!' })

            return
        }

        /**
         * Update database Route
         */
        const result = await updateRoute(data)

        if (result.status !== 200) {
            toast.error('Error while updating the database!', {
                description: `Message: ${response.statusText}`
            })

            return
        }

        setCompleted(true)

        toast.success('Route update!', {
            description: `The url of this route has been updated!`
        })
    }, 300)

    return (
        <form onChange={handleSubmit(debouncedChangeHandler)}>
            <Field
                register={register}
                name="url"
                label="Indicate the url of your API."
                placeholder="https://fakestoreapi.com/products"
                className="mt-12"
                completed={completed}
                error={errors.url}
            />
        </form>
    )
}
