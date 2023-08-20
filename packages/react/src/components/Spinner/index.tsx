import React, { ReactNode } from 'react'

import {
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps
} from '@chakra-ui/react'

export interface SpinnerProps extends ChakraSpinnerProps {
  children: ReactNode
}

export function Spinner({ children, ...props }: SpinnerProps) {
  return <ChakraSpinner {...props}>{children}</ChakraSpinner>
}

Spinner.displayName = 'Spinner'
