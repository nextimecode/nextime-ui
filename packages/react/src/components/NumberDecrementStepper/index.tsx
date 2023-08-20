import React, { ReactNode } from 'react'

import {
  NumberDecrementStepper as ChakraNumberDecrementStepper,
  NumberDecrementStepperProps as ChakraNumberDecrementStepperProps
} from '@chakra-ui/react'

export interface NumberDecrementStepperProps
  extends ChakraNumberDecrementStepperProps {
  children: ReactNode
}

export function NumberDecrementStepper({
  children,
  ...props
}: NumberDecrementStepperProps) {
  return (
    <ChakraNumberDecrementStepper {...props}>
      {children}
    </ChakraNumberDecrementStepper>
  )
}

NumberDecrementStepper.displayName = 'NumberDecrementStepper'
