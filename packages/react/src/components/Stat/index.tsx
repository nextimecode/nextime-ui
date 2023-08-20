import React, { ReactNode } from 'react'

import {
  Stat as ChakraStat,
  StatProps as ChakraStatProps
} from '@chakra-ui/react'

export interface StatProps extends ChakraStatProps {
  children: ReactNode
}

export function Stat({ children, ...props }: StatProps) {
  return <ChakraStat {...props}>{children}</ChakraStat>
}

Stat.displayName = 'Stat'
