import React, { ReactNode } from 'react'

import {
  CardHeader as ChakraCardHeader,
  CardHeaderProps as ChakraCardHeaderProps
} from '@chakra-ui/react'

export interface CardHeaderProps extends ChakraCardHeaderProps {
  children: ReactNode
}

export function CardHeader({ children, ...props }: CardHeaderProps) {
  return <ChakraCardHeader {...props}>{children}</ChakraCardHeader>
}

CardHeader.displayName = 'CardHeader'
