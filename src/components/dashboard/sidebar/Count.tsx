import { useCart } from '@contexts/dashboard/CartContextProvider'
import CartIcon from '@svg/cart.svg'

export const Count = () => {
    const { cart } = useCart()

    const count = () => {
        return cart.items.length
    }

    return (
        <span className="flex itms-center gap-2">
            <CartIcon className="w-6 fill-grey-600" />
            <span className="text-grey-800 text-xs">
                {count()} {count() > 1 ? 'items' : 'item'}
            </span>
        </span>
    )
}
