import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

type Props = VariantProps<typeof button> & {
    className?: string
    children: ReactNode
    type?: 'submit' | 'button'
    href?: any
}

const button = cva('inline-flex px-12 justify-center py-4 rounded transition-all duration-500 hover:rounded-md', {
    variants: {
        intent: {
            primary: 'bg-blue text-white font-medium',
            link: 'px-0 py-0 leading-tight underline text-grey-800 hover:text-main'
        }
    },
    defaultVariants: {
        intent: 'primary'
    }
})

export const Button = ({ children, className, intent, href, type = 'button' }: Props) => {
    const Tag = href ? Link : 'button'

    return (
        <Tag href={href} type={type} className={button({ intent, className })}>
            {children}
        </Tag>
    )
}
