import React, { ReactNode } from 'react'

import {
  Card as ChakraCard,
  CardProps as ChakraCardProps
} from '@chakra-ui/react'

export interface CardProps extends ChakraCardProps {
  children: ReactNode
}

export function Card({ children, ...props }: CardProps) {
  return <ChakraCard {...props}>{children}</ChakraCard>
}

Card.displayName = 'Card'
