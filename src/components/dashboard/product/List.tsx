import { Card } from '@components/dashboard/product/Card'
import { TypeReadProduct } from '@features/product/type'

type Props = {
    items: TypeReadProduct[]
}

export const List = ({ items }: Props) => {
    return (
        <div className="overflow-y-auto max-h-screen p-12">
            <ul className="col gap-4">
                {items.map((item) => {
                    return (
                        <li className="col-span-4 desktop:col-span-6" key={item.id}>
                            <Card {...item} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
