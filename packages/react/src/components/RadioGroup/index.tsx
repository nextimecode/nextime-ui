import React, { ReactNode } from 'react'

import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
} from '@chakra-ui/react'

export interface RadioGroupProps extends ChakraRadioGroupProps {
  children: ReactNode
}

export function RadioGroup({ children, ...props }: RadioGroupProps) {
  return <ChakraRadioGroup {...props}>{children}</ChakraRadioGroup>
}

RadioGroup.displayName = 'RadioGroup'
