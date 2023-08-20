import React, { ReactNode } from 'react'

import {
  StatLabel as ChakraStatLabel,
  StatLabelProps as ChakraStatLabelProps
} from '@chakra-ui/react'

export interface StatLabelProps extends ChakraStatLabelProps {
  children: ReactNode
}

export function StatLabel({ children, ...props }: StatLabelProps) {
  return <ChakraStatLabel {...props}>{children}</ChakraStatLabel>
}

StatLabel.displayName = 'StatLabel'
