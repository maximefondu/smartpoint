import { RouteKey } from '@prisma/client'
import { useFieldArray, UseFormRegister, UseFormStateReturn } from 'react-hook-form'

import { Field } from '@components/form/Field'
import { DataSubmitRouteProducts } from '@type/route'

type Props = {
    useFormRoute: {
        register: UseFormRegister<DataSubmitRouteProducts>
        control: any
        formState: UseFormStateReturn<DataSubmitRouteProducts>
    }
}

export const SettingsKeys = ({ useFormRoute }: Props) => {
    const { fields } = useFieldArray<DataSubmitRouteProducts>({
        control: useFormRoute.control,
        name: 'keys'
    })

    return (
        <div>
            <p className="mb-4">Match keys with API keys.</p>
            <ul className="flex flex-col gap-4">
                {fields.map((item, index) => {
                    return (
                        <li key={item.id} className="flex gap-8">
                            <div className="flex flex-col flex-shrink-0">
                                <span className={`text-xxs ${item.required ? 'text-green' : 'text-grey-600'}`}>Required</span>
                                <span className="flex leading-tight">{item.key}</span>
                            </div>
                            <Field className="w-full" register={useFormRoute.register} name={`keys.${index}.value`} placeholder={item.key} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
