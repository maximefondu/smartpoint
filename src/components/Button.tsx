import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { Spinner } from '@components/Spinner'

type Props = VariantProps<typeof button> & {
    className?: string
    children: ReactNode
    type?: 'submit' | 'button'
    href?: any
    loading?: boolean
}

const button = cva('inline-flex gap-4 items-center justify-center rounded transition-all duration-500 hover:rounded-md', {
    variants: {
        intent: {
            primary: 'px-12 py-4 bg-blue text-white font-medium',
            link: 'leading-tight underline text-grey-800 hover:text-main'
        }
    },
    defaultVariants: {
        intent: 'primary'
    }
})

export const Button = ({ children, className, intent, href, type = 'button', loading }: Props) => {
    const Tag = href ? Link : 'button'

    return (
        <Tag href={href} type={type} className={button({ intent, className })}>
            {loading && <Spinner className="w-6" />}

            {loading ? <span>Processing</span> : <span>{children}</span>}
        </Tag>
    )
}
