import React, { ReactNode } from 'react'

import {
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ChakraCheckboxGroupProps
} from '@chakra-ui/react'

export interface CheckboxGroupProps extends ChakraCheckboxGroupProps {
  children: ReactNode
}

export function CheckboxGroup({ children, ...props }: CheckboxGroupProps) {
  return <ChakraCheckboxGroup {...props}>{children}</ChakraCheckboxGroup>
}

CheckboxGroup.displayName = 'CheckboxGroup'
