import { ChangeEventHandler } from 'react'
import { UseFormRegister } from 'react-hook-form'

import ArrowIcon from '@svg/arrow.svg'
import ValidateIcon from '@svg/validate.svg'

type Props = {
    className?: string

    register?: UseFormRegister<any>
    label?: string | number
    id?: string
    name: string
    placeholder: string
    completed?: boolean
    valueAsNumber?: boolean
    onChange?: ChangeEventHandler

    options: {
        name: string | number
        value: string | number
    }[]

    append?: string | number
}

export const Select = ({ className = '', register, label, id, name, placeholder, options = [], completed = false, valueAsNumber = false, onChange }: Props) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="text-grey-800 mb-3" htmlFor={id}>
                    {label}
                </label>
            )}
            <div
                className={`rounded relative transition-all border ${
                    completed ? 'bg-green-200 border-green text-green' : 'border-grey-200 bg-grey-200 hover:bg-grey-400'
                }`}>
                <select
                    {...register?.(name, { valueAsNumber: valueAsNumber })}
                    name={name}
                    onChange={onChange}
                    id={id}
                    className={`appearance-none bg-transparent outline-none px-8 py-4 w-full cursor-pointer`}>
                    <option value="">{placeholder}</option>
                    {options.map(({ name, value }) => {
                        return (
                            <option key={value} value={value}>
                                {name}
                            </option>
                        )
                    })}
                </select>

                {completed ? (
                    <ValidateIcon className={`w-9 absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none fill-green`} />
                ) : (
                    <ArrowIcon className={`w-8 absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none fill-grey-600`} />
                )}
            </div>
        </div>
    )
}
