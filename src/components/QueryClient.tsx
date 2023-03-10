'use client'

import { PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@libs/react-query'

type QueryClientProps = PropsWithChildren

export const QueryClient = ({ children }: QueryClientProps) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
