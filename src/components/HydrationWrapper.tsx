'use client'
import { useEffect, useState } from 'react'

export function HydrationWrapper({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <div suppressHydrationWarning>{children}</div>
} 