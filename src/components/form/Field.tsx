import { ChangeEventHandler, FormEventHandler } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import ValidateIcon from '@svg/validate.svg'

type Props = {
    className?: string

    register?: UseFormRegister<any>
    label?: string | number
    type?: 'text' | 'number' | 'email' | 'password'
    id?: string
    name: string
    defaultValue?: string | number
    placeholder?: string
    onBlur?: ChangeEventHandler
    onInput?: FormEventHandler
    completed?: boolean
    error?: FieldError
    required?: boolean

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
    error,
    required
}: Props) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="mb-3" htmlFor={id}>
                    {label}
                </label>
            )}

            <div className={`rounded border bg-grey-200 border-grey-200 relative transition-all ${error && 'text-red bg-red-200 border-red'}`}>
                <input
                    {...register?.(name, { required: required ? 'Field is required!' : false })}
                    type={type}
                    id={id}
                    name={name}
                    onBlur={onBlur}
                    onInput={onInput}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className={`bg-transparent outline-none px-8 py-4 w-full peer ${error ? 'placeholder:text-red-400' : 'placeholder:text-grey-600'}`}
                />
                {append && <span>{append}</span>}
            </div>
            {error && <p className="mt-2 text-red">{error.message}</p>}
        </div>
    )
}
