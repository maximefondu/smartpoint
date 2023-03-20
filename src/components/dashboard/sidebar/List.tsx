import { Card } from '@components/dashboard/sidebar/Card'
import { useCart } from '@contexts/dashboard/CartContextProvider'

export const List = () => {
    const { cart } = useCart()

    return cart.items.length > 0 ? (
        <ul className="flex flex-col gap-4 mt-8">
            {cart.items.map((item) => {
                return (
                    <li key={item.id}>
                        <Card {...item} />
                    </li>
                )
            })}
        </ul>
    ) : (
        <></>
    )
}
