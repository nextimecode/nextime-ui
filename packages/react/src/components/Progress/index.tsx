import React, { ReactNode } from 'react'

import {
  Progress as ChakraProgress,
  ProgressProps as ChakraProgressProps,
} from '@chakra-ui/react'

export interface ProgressProps extends ChakraProgressProps {
  children: ReactNode
}

export function Progress({ children, ...props }: ProgressProps) {
  return <ChakraProgress {...props}>{children}</ChakraProgress>
}

Progress.displayName = 'Progress'
