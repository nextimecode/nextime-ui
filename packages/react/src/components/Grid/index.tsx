import React, { ReactNode } from 'react'

import {
  Grid as ChakraGrid,
  GridProps as ChakraGridProps
} from '@chakra-ui/react'

export interface GridProps extends ChakraGridProps {
  children: ReactNode
}

export function Grid({ children, ...props }: GridProps) {
  return <ChakraGrid {...props}>{children}</ChakraGrid>
}

Grid.displayName = 'Grid'
