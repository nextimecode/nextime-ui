import React, { ReactNode } from 'react'

import {
  NumberIncrementStepper as ChakraNumberIncrementStepper,
  NumberIncrementStepperProps as ChakraNumberIncrementStepperProps,
} from '@chakra-ui/react'

export interface NumberIncrementStepperProps
  extends ChakraNumberIncrementStepperProps {
  children: ReactNode
}

export function NumberIncrementStepper({
  children,
  ...props
}: NumberIncrementStepperProps) {
  return (
    <ChakraNumberIncrementStepper {...props}>
      {children}
    </ChakraNumberIncrementStepper>
  )
}

NumberIncrementStepper.displayName = 'NumberIncrementStepper'
