import { readProducts } from '@features/product/queries/read-products'

export default async function Home() {
    const products = await readProducts()

    return <section></section>
}
