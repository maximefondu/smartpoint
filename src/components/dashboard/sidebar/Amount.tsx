import { useEffect } from 'react'

import { parseNumberToPrice } from '@features/helpers/parseNumberToPrice'
import { useCart } from '@contexts/dashboard/CartContextProvider'

export const Amount = () => {
    const { cart, setCart } = useCart()

    const calcul = () => {
        const total = cart.items.reduce((current, item) => {
            current += item.price * item.quantity

            return current
        }, 0)

        setCart({
            ...cart,
            total: total
        })
    }

    useEffect(() => {
        calcul()
    }, [cart.items])

    return (
        <div>
            <div className="flex justify-between items-center">
                <span className="text-grey-800 text-md">Total</span>
                <span className="font-bold text-2xl">{parseNumberToPrice(cart.total)}</span>
            </div>
        </div>
    )
}
