import React, { PropsWithChildren } from 'react'

import Link from 'next/link'

import { Box } from '@chakra-ui/react'

import { NextWhatsIcon } from '../../atoms/NextWhatsIcon'
import { NextFooter } from '../../organisms/NextFooter'
import { NextHeader } from '../../organisms/NextHeader'
import { NextimeFooter } from '../../organisms/NextimeFooter'
import { NextMobileMenu } from '../../organisms/NextMobileMenu'

export interface NextCallToActionProps {
  color?: string
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  height: number
  id?: string
  image: string
  isLoading?: boolean
  text: string
  textButton?: string
  title: string
  url: string
  width: number
  priority?: boolean
}

interface Layout {
  bg: string
  description: string
  keywords: string[]
  logoAlt: string
  logoHeight: number
  logoSrc: string
  logoSubtitle?: string
  logoSubtitleColor: string
  logoWidth: number
  siteName: string
  socialImageUrl: string
  socialNetwork: string
  socialTitle: string
  title: string
  url: string
}

export interface NextHeroItem {
  title: string
  text: string
  textButton: string
  url: string
}

export interface LandingPageItems {
  hasNextCallToActionWithAnnotation?: boolean
  layout: Layout
  nextCallToActionItems: NextCallToActionProps[]
}

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
  bg?: string
  siteName?: string
  socialImageUrl?: string
  isRouterProtect?: boolean
}

export function NextLayout({
  navItems,
  children,
  logoSrc,
  logoWidth,
  logoHeight,
  logoAlt,
  logoSubtitle,
  logoSubtitleColor,
  bg
}: PropsWithChildren<NextLayoutProps>) {
  return (
    <>
      <NextHeader
        navItems={navItems}
        logoSrc={logoSrc}
        logoHeight={logoHeight}
        logoAlt={logoAlt}
        logoSubtitle={logoSubtitle}
        logoSubtitleColor={logoSubtitleColor}
        logoWidth={logoWidth}
      />

      <main>{children}</main>

      <NextFooter bg={bg} />
      <Box
        position="fixed"
        width="60px"
        height="60px"
        zIndex={100}
        bottom="20px"
        right="20px"
      >
        <Link
          href={'#'}
          target={'_blank'}
          aria-label="Faça um orçamento pelo whatsapp"
        >
          <NextWhatsIcon />
        </Link>
      </Box>

      <Box display={['none', 'block']}>
        <NextimeFooter />
      </Box>
      <Box display={['block', 'none']}>
        <NextMobileMenu />
      </Box>
    </>
  )
}
