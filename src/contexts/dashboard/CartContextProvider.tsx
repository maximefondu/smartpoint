'use client'

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'

import { Cart } from '@type/dashboard'

type CartContextProvider = PropsWithChildren

type CartContextValue = {
    cart: Cart
    setCart: Dispatch<SetStateAction<Cart>>
}

const CartContext = createContext<CartContextValue | null>(null)

export const CartContextProvider = (props: CartContextProvider) => {
    const [cart, setCart] = useState<Cart>({
        items: [],
        total: 0
    })

    return <CartContext.Provider value={{ cart, setCart }} {...props} />
}

export const useCart = (): CartContextValue => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('The context call outside provider !')
    }

    return context
}
