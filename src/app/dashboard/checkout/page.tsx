import { Count } from '@components/dashboard/sidebar/Count'
import { CartContextProvider } from '@contexts/dashboard/CartContextProvider'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
    return (
        <CartContextProvider>
            <Count />
        </CartContextProvider>
    )
}
