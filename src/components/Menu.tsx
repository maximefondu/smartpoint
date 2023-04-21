'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Box } from '@components/Box'

import HomeIcon from '@svg/home.svg'
import ShopIcon from '@svg/shop.svg'
import SettingsIcon from '@svg/settings.svg'
import LeaveIcon from '@svg/leave.svg'

export const Menu = () => {
    const pathName = usePathname()
    const hideMenuOnPage = ['/']

    return hideMenuOnPage.includes(pathName) ? (
        <></>
    ) : (
        <header className="h-full sticky top-0 left-0 pl-8 py-8">
            <Box className="h-full p-8">
                <nav className="h-full flex flex-col justify-between">
                    <ul className="flex flex-col gap-10">
                        <li>
                            <Link href={'/'} className={`transition-all text-grey-600 hover:text-blue`}>
                                <HomeIcon className="w-8 fill-current" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/dashboard'}
                                className={`transition-all hover:text-blue ${pathName.includes('dashboard') ? 'text-blue' : 'text-grey-600'}`}>
                                <ShopIcon className="w-8 fill-current" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/settings'}
                                className={`transition-all hover:text-blue ${pathName.includes('settings') ? 'text-blue' : 'text-grey-600'}`}>
                                <SettingsIcon className="w-8 fill-current" />
                            </Link>
                        </li>
                    </ul>

                    <button className="text-grey-600 transition-all hover:text-blue">
                        <LeaveIcon className="w-8 fill-current" />
                    </button>
                </nav>
            </Box>
        </header>
    )
}
