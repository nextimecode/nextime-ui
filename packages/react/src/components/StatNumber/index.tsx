import React, { ReactNode } from 'react'

import {
  StatNumber as ChakraStatNumber,
  StatNumberProps as ChakraStatNumberProps,
} from '@chakra-ui/react'

export interface StatNumberProps extends ChakraStatNumberProps {
  children: ReactNode
}

export function StatNumber({ children, ...props }: StatNumberProps) {
  return <ChakraStatNumber {...props}>{children}</ChakraStatNumber>
}

StatNumber.displayName = 'StatNumber'
