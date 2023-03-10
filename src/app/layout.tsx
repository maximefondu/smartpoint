import '@assets/css/main.css'

import { QueryClient } from '@components/QueryClient'

export const metadata = {
    title: 'Smartpoint',
    description: 'POS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-grey-100 p-12">
                <main>
                    <QueryClient>{children}</QueryClient>
                </main>
            </body>
        </html>
    )
}
