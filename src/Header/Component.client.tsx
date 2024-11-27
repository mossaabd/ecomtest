'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { HydrationWrapper } from '@/components/HydrationWrapper'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  return (
    <HydrationWrapper>
      <header
        className="container relative z-20"
        suppressHydrationWarning
        {...(headerTheme ? { 'data-theme': headerTheme } : {})}
      >
        <div className="py-8 border-b border-border flex justify-between">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>
          <HeaderNav header={header} />
        </div>
      </header>
    </HydrationWrapper>
  )
}
