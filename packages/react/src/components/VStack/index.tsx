import React, { ReactNode } from 'react'

import {
  VStack as ChakraVStack,
  StackProps as ChakraStackProps,
} from '@chakra-ui/react'

export interface StackProps extends ChakraStackProps {
  children: ReactNode
}

export function VStack({ children, ...props }: StackProps) {
  return <ChakraVStack {...props}>{children}</ChakraVStack>
}

VStack.displayName = 'VStack'
