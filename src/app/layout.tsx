import { Notification } from '@components/Notification'
import { Menu } from '@components/Menu'
import { QueryClient } from '@components/QueryClient'

import '@assets/css/main.css'

export const metadata = {
    title: 'Smartpoint',
    description: 'POS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-grey-100 flex h-screen">
                <Menu />
                <main className="wrap py-8 w-full">
                    <Notification />
                    <QueryClient>{children}</QueryClient>
                </main>
            </body>
        </html>
    )
}
