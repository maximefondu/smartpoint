import { ReactNode } from 'react'

type Props = {
    className?: string
    children: ReactNode
}

export const Box = ({ children, className = '' }: Props) => {
    return <div className={`bg-white shadow-md p-16 rounded ${className}`}>{children}</div>
}
