import { UseFormRegister, UseFormStateReturn } from 'react-hook-form'

import { Field } from '@components/form/Field'
import { DataSubmitRouteProducts } from '@type/route'

type Props = {
    useFormRoute: {
        register: UseFormRegister<DataSubmitRouteProducts>
        formState: UseFormStateReturn<DataSubmitRouteProducts>
    }
}

export const SettingsArrayPath = ({ useFormRoute }: Props) => {
    return (
        <Field
            register={useFormRoute.register}
            name="arrayPath"
            label="Indicate the path of items array."
            placeholder="products.items"
            error={useFormRoute.formState.errors.arrayPath}
        />
    )
}
