import React, { ReactNode } from 'react'

import {
  SimpleGrid as ChakraSimpleGrid,
  SimpleGridProps as ChakraSimpleGridProps,
} from '@chakra-ui/react'

export interface SimpleGridProps extends ChakraSimpleGridProps {
  children: ReactNode
}

export function SimpleGrid({ children, ...props }: SimpleGridProps) {
  return <ChakraSimpleGrid {...props}>{children}</ChakraSimpleGrid>
}

SimpleGrid.displayName = 'SimpleGrid'
