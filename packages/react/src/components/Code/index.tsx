import React, { ReactNode } from 'react'

import {
  Code as ChakraCode,
  CodeProps as ChakraCodeProps,
} from '@chakra-ui/react'

export interface CodeProps extends ChakraCodeProps {
  children: ReactNode
}

export function Code({ children, ...props }: CodeProps) {
  return <ChakraCode {...props}>{children}</ChakraCode>
}

Code.displayName = 'Code'
