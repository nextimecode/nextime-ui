import React, { PropsWithChildren } from 'react'

export interface NavItem {
  children?: Array<NavItem>
  href: string
  label: string
  subLabel?: string
}

interface NextLayoutProps {
  navItems?: Array<NavItem>
  title?: string
  pathname?: string
  description?: string
  socialNetwork?: string
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  logoSubtitle?: string
  logoSubtitleColor?: string
  keywords?: Array<string>
  bg: string
  siteName?: string
  socialImageUrl?: string
  isRouterProtect?: boolean
}

export function NextLayout({ children }: PropsWithChildren<NextLayoutProps>) {
  return <main>{children}</main>
}
