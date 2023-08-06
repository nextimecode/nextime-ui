import React, { ReactNode } from 'react'

import {
  StatGroup as ChakraStatGroup,
  StatGroupProps as ChakraStatGroupProps,
} from '@chakra-ui/react'

export interface StatGroupProps extends ChakraStatGroupProps {
  children: ReactNode
}

export function StatGroup({ children, ...props }: StatGroupProps) {
  return <ChakraStatGroup {...props}>{children}</ChakraStatGroup>
}

StatGroup.displayName = 'StatGroup'
