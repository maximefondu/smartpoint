import { ChangeEventHandler, FormEventHandler } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import ValidateIcon from '@svg/validate.svg'

type Props = {
    className?: string

    register?: UseFormRegister<any>
    label?: string | number
    type?: 'text' | 'number' | 'email'
    id?: string
    name: string
    defaultValue?: string | number
    placeholder?: string
    onBlur?: ChangeEventHandler
    onInput?: FormEventHandler
    completed?: boolean
    error?: FieldError

    append?: string | number
}

export const Field = ({
    className = '',
    label,
    type = 'text',
    id,
    name,
    defaultValue,
    placeholder,
    append,
    register,
    onBlur,
    onInput,
    completed,
    error
}: Props) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="mb-3" htmlFor={id}>
                    {label}
                </label>
            )}
            <div
                className={`rounded border relative focus:bg-grey-200 transition-all ${
                    completed ? 'bg-green-200 text-green border-green' : 'bg-grey-200 border-grey-200'
                } ${error && 'text-red bg-red-200 border-red'}`}>
                <input
                    {...register?.(name)}
                    type={type}
                    id={id}
                    name={name}
                    onBlur={onBlur}
                    onInput={onInput}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className="bg-transparent outline-none px-8 py-4 w-full placeholder:text-grey-800 peer"
                />
                {append && <span>{append}</span>}
                {completed && <ValidateIcon className={`w-9 absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none fill-green transition-all`} />}
            </div>
            {error && <p className="mt-2 text-red">{error.message}</p>}
        </div>
    )
}
