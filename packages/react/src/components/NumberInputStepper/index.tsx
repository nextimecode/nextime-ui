import React, { ReactNode } from 'react'

import {
  NumberInputStepper as ChakraNumberInputStepper,
  NumberInputStepperProps as ChakraNumberInputStepperProps,
} from '@chakra-ui/react'

export interface NumberInputStepperProps extends ChakraNumberInputStepperProps {
  children: ReactNode
}

export function NumberInputStepper({
  children,
  ...props
}: NumberInputStepperProps) {
  return (
    <ChakraNumberInputStepper {...props}>{children}</ChakraNumberInputStepper>
  )
}

NumberInputStepper.displayName = 'NumberInputStepper'
