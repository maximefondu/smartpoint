'use client'

import { parseNumberToPrice } from '@helpers/parseNumberToPrice'
import { useCart } from '@contexts/dashboard/CartContextProvider'

import { ProductCart } from '@type/dashboard'

import DeleteIcon from '@svg/delete.svg'
import AddIcon from '@svg/add.svg'
import RemoveIcon from '@svg/remove.svg'

export const Card = ({ id, name, price, quantity }: ProductCart) => {
    const { cart, setCart } = useCart()

    const remove = () => {
        const items = cart.items.filter((item) => {
            return item.id !== id
        })

        setCart({
            ...cart,
            items: items
        })
    }

    const reduce = () => {
        const items = cart.items.map((item) => {
            if (item.id === id && item.quantity > 1) {
                item.quantity = item.quantity - 1
            }

            return item
        })

        setCart({
            ...cart,
            items: items
        })
    }

    const increase = () => {
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
    }

    return (
        <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
                <button onClick={remove}>
                    <DeleteIcon className="w-5 fill-grey-600 transition-all hover:fill-red " />
                </button>
                <h2 className="leading-tight text-start">{name}</h2>
                <p className="font-bold">{parseNumberToPrice(price)}</p>
            </div>

            <div className="flex items-center">
                <button
                    onClick={reduce}
                    className="w-8 h-8 flex justify-center items-center rounded-full border border-grey-600 flex-shrink-0  transition-all hover:border-red hover:bg-red-200 group">
                    <RemoveIcon className="w-[9px] fill-grey-600 transition-all group-hover:fill-red" />
                </button>
                <span className="text-xs min-w-[3rem] text-center">{quantity}</span>
                <button
                    onClick={increase}
                    className="w-8 h-8 flex justify-center items-center rounded-full border border-grey-600 flex-shrink-0 transition-all hover:border-green hover:bg-green-200 group">
                    <AddIcon className="w-[9px] fill-grey-600 transition-all group-hover:fill-green" />
                </button>
            </div>
        </div>
    )
}
