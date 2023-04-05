'use client'

import { TypeReadProduct } from '@features/product/type'
import { parseNumberToPrice } from '@helpers/parseNumberToPrice'

import { useCart } from '@contexts/dashboard/CartContextProvider'

export const Card = ({ id, name, price, image }: TypeReadProduct) => {
    const { cart, setCart } = useCart()

    const add = () => {
        const index = cart.items.find((item) => {
            return item.id === id
        })

        if (index) {
            const items = cart.items.map((item) => {
                if (item.id === id) {
                    item.quantity = item.quantity + 1
                }

                return item
            })

            setCart({
                ...cart,
                items: items
            })
        } else {
            setCart({
                ...cart,
                items: [
                    ...cart.items,
                    {
                        id: id,
                        name: name,
                        price: price,
                        quantity: 1
                    }
                ]
            })
        }
    }

    return (
        <button className="w-full shadow-md rounded p-4 flex gap-4" onClick={add}>
            <img className="bg-grey-200 w-28 aspect-square object-center object-cover rounded" src={image} alt={name} />
            <div className="flex flex-col gap-2 items-start">
                <h2 className="leading-tight text-start">{name}</h2>
                <p className="font-bold">{parseNumberToPrice(price)}</p>
            </div>
        </button>
    )
}
