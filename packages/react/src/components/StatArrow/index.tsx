import React, { ReactNode } from 'react'

import {
  StatArrow as ChakraStatArrow,
  StatArrowProps as ChakraStatArrowProps
} from '@chakra-ui/react'

export interface StatArrowProps extends ChakraStatArrowProps {
  children: ReactNode
}

export function StatArrow({ children, ...props }: StatArrowProps) {
  return <ChakraStatArrow {...props}>{children}</ChakraStatArrow>
}

StatArrow.displayName = 'StatArrow'
