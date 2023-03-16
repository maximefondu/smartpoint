import { useForm, useFieldArray } from 'react-hook-form'
import { Route, RouteKey } from '@prisma/client'
import { toast } from 'sonner'

import { Box } from '@components/Box'
import { Button } from '@components/Button'
import { Field } from '@components/form/Field'
import { useUpdateRouteKey } from '@features/routeKey/hooks/use-update-routeKey'

type Props = {
    route: Route & {
        routeKey: RouteKey[]
    }
}

export const SettingsKeys = ({ route }: Props) => {
    const { mutateAsync: updateRouteKey } = useUpdateRouteKey()
    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            keys: route.routeKey
        }
    })
    const { fields } = useFieldArray({
        control,
        name: 'keys'
    })

    const submit = ({ keys }: { keys: RouteKey[] }) => {
        // TODO : Transaction Prisma
        keys.forEach(async (item) => {
            const response = await updateRouteKey({
                id: item.id,
                value: item.value
            })

            if (response.status !== 200) {
                toast.error('Error while updating the database!', {
                    description: `Message: ${response.statusText}`
                })
            } else {
                toast.success(`Key ${item.key} updated!`)
            }
        })
    }

    return (
        <Box className="mt-12 p-8">
            <form onSubmit={handleSubmit(submit)}>
                <ul className="flex flex-col gap-4">
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id} className="flex gap-8">
                                <div className="flex flex-col flex-shrink-0">
                                    <span className={`text-xxs ${item.required ? 'text-green' : 'text-grey-600'}`}>Required</span>
                                    <span className="flex leading-tight">{item.key}</span>
                                </div>
                                <Field className="w-full" register={register} name={`keys.${index}.value`} placeholder={item.key} />
                            </li>
                        )
                    })}
                </ul>

                <Button className="w-full mt-8" type="submit">
                    Save
                </Button>
            </form>
        </Box>
    )
}
