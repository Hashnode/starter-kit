'use client'
import React, { useState } from 'react'
import { ThemeProvider } from './theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default Providers