import React, { ReactNode } from 'react'

import {
  Stack as ChakraStack,
  StackProps as ChakraStackProps
} from '@chakra-ui/react'

export interface StackProps extends ChakraStackProps {
  children: ReactNode
}

export function Stack({ children, ...props }: StackProps) {
  return <ChakraStack {...props}>{children}</ChakraStack>
}

Stack.displayName = 'Stack'
