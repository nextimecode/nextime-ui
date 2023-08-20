import React, { ReactNode } from 'react'

import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps
} from '@chakra-ui/react'

export interface CheckboxProps extends ChakraCheckboxProps {
  children: ReactNode
}

export function Checkbox({ children, ...props }: CheckboxProps) {
  return <ChakraCheckbox {...props}>{children}</ChakraCheckbox>
}

Checkbox.displayName = 'Checkbox'
