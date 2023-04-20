import { Button } from '@components/Button'
import { List } from '@components/dashboard/product/List'
import { Sidebar } from '@components/dashboard/sidebar/Index'
import { readProducts } from '@features/product/queries/read-products'

import { CartContextProvider } from '@contexts/dashboard/CartContextProvider'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
    const products = await readProducts()

    return (
        <CartContextProvider>
            <section className="wrap py-16">
                <div className="col gap-0">
                    <div className="col-span-8">
                        <Button href={'/'} intent="link">
                            Retour
                        </Button>
                        <List items={products} />
                    </div>
                    <div className="col-span-4">
                        <Sidebar />
                    </div>
                </div>
            </section>
        </CartContextProvider>
    )
}
