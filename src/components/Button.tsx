import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

type Props = VariantProps<typeof button> & {
    className?: string
    children: any
    href?: any
}

const button = cva('inline-flex px-12 py-4 rounded transition-all duration-500 hover:rounded-md', {
    variants: {
        intent: {
            primary: 'bg-blue text-white font-medium'
        }
    },
    defaultVariants: {
        intent: 'primary'
    }
})

export const Button = ({ children, className, intent, href }: Props) => {
    const Tag = href ? Link : 'button'

    return (
        <Tag href={href} className={button({ intent, className })}>
            {children}
        </Tag>
    )
}
