'use client'
import React, { PropsWithChildren } from 'react'

import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Box } from '@chakra-ui/react'

import { NavItem } from '../../../@types/LandingPageItems'
import { useAuth } from '../../../contexts/AuthContext'
import { layout } from '../../../data'
import { NextWhatsIcon } from '../../atoms/NextWhatsIcon'
import { NextFooter } from '../../organisms/NextFooter'
import { NextHeader } from '../../organisms/NextHeader'
import { NextimeFooter } from '../../organisms/NextimeFooter'
import { NextMobileMenu } from '../../organisms/NextMobileMenu'

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
  title = layout.title,
  pathname = layout.url,
  description = layout.description,
  socialNetwork = layout.socialNetwork,
  logoSrc = layout.logoSrc,
  logoWidth = layout.logoWidth,
  logoHeight = layout.logoHeight,
  logoAlt = layout.logoAlt,
  logoSubtitle = layout.logoSubtitle,
  logoSubtitleColor = layout.logoSubtitleColor,
  bg = layout.bg,
  keywords = layout.keywords,
  siteName = layout.siteName,
  socialImageUrl = layout.socialImageUrl,
  isRouterProtect = true
}: PropsWithChildren<NextLayoutProps>) {
  const router = useRouter()
  const { user } = useAuth()

  const seoConfig = {
    title: `${title} | ${layout.siteName}`,
    description,
    canonical: `${layout.url}${pathname}`,
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${layout.url}${pathname}`,
      title: `${title} ${layout.title}`,
      description,
      images: [
        {
          url: socialImageUrl,
          width: 853,
          height: 600,
          alt: title,
          type: 'image/jpeg'
        }
      ],
      siteName
    },
    twitter: {
      handle: '@phdduarte',
      cardType: 'summary_large_image'
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        href: `${layout.url}/favicon.ico`
      }
    ],
    additionalMetaTags: [
      {
        name: 'keywords',
        content: keywords?.join(', ')
      }
    ]
  }

  if (!user && isRouterProtect) {
    router.push('/login')
    return <></>
  } else {
    return (
      <>
        <NextSeo {...seoConfig} />
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

        {!user ? (
          <>
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
                href={socialNetwork}
                target={'_blank'}
                aria-label="Faça um orçamento pelo whatsapp"
              >
                <NextWhatsIcon />
              </Link>
            </Box>
          </>
        ) : (
          <>
            <Box display={['none', 'block']}>
              <NextimeFooter />
            </Box>
            <Box display={['block', 'none']}>
              <NextMobileMenu />
            </Box>
          </>
        )}
      </>
    )
  }
}
