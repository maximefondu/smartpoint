'use client'

import { Button } from '@components/Button'
import { List } from '@components/dashboard/sidebar/List'
import { Count } from '@components/dashboard/sidebar/Count'
import { Amount } from '@components/dashboard/sidebar/Amount'

export const Sidebar = () => {
    return (
        <div className="py-12 pr-12 h-full">
            <div className="bg-white rounded shadow-md p-12 h-full flex flex-col justify-between">
                <div>
                    <h2 className="font-bold text-xl">Cart</h2>

                    <Count />

                    <List />
                </div>

                <div className="flex flex-col gap-8">
                    <Amount />

                    <Button href={'/dashboard/checkout'} className="w-full">
                        Paid
                    </Button>
                </div>
            </div>
        </div>
    )
}
