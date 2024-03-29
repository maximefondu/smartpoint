import { UseFormRegister, UseFormStateReturn } from 'react-hook-form'

import { Field } from '@components/form/Field'
import { DataSubmitRouteProducts } from '@type/route'

type Props = {
    useFormRoute: {
        register: UseFormRegister<DataSubmitRouteProducts>
        formState: UseFormStateReturn<DataSubmitRouteProducts>
    }
}

export const SettingsUrl = ({ useFormRoute }: Props) => {
    return (
        <Field
            register={useFormRoute.register}
            name="url"
            label="Indicate url of your API."
            placeholder="https://fakestoreapi.com/products"
            error={useFormRoute.formState.errors.url}
            required={true}
        />
    )
}
