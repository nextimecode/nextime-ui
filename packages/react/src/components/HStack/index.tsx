import React, { ReactNode } from 'react'

import {
  HStack as ChakraHStack,
  StackProps as ChakraStackProps
} from '@chakra-ui/react'

export interface StackProps extends ChakraStackProps {
  children: ReactNode
}

export function HStack({ children, ...props }: StackProps) {
  return <ChakraHStack {...props}>{children}</ChakraHStack>
}

HStack.displayName = 'HStack'
