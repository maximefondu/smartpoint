type Props = {
    className: string

    label?: string | number
    type?: 'text' | 'number' | 'email'
    id?: string
    name: string
    defaultValue?: string | number
    placeholder?: string

    append?: string | number
}

export const Field = ({ className = '', label, type = 'text', id, name, defaultValue, placeholder, append }: Props) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <div className="bg-grey-200 rounded">
                <input
                    type={type}
                    id={id}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className="bg-transparent outline-none px-8 py-4 w-full placeholder:text-grey-800"
                />
                {append && <span>{append}</span>}
            </div>
        </div>
    )
}
