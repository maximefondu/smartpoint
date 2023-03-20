export type ProductCart = {
    id: number
    name: string
    price: number
    quantity: number
}

export type Cart = {
    items: ProductCart[]
    total: number
}
