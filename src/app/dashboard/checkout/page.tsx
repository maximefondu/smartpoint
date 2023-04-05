import { Count } from '@components/dashboard/sidebar/Count'
import { CartContextProvider } from '@contexts/dashboard/CartContextProvider'

export default async function Dashboard() {
    return (
        <CartContextProvider>
            <Count />
        </CartContextProvider>
    )
}
