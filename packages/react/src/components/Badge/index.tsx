import React, { ReactNode } from 'react'

import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps
} from '@chakra-ui/react'

export interface BadgeProps extends ChakraBadgeProps {
  children: ReactNode
}

export function Badge({ children, ...props }: BadgeProps) {
  return <ChakraBadge {...props}>{children}</ChakraBadge>
}

Badge.displayName = 'Badge'
