import React, { ReactNode } from 'react'

import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'

export interface SelectProps extends ChakraSelectProps {
  children: ReactNode
}

export function Select({ children, ...props }: SelectProps) {
  return <ChakraSelect {...props}>{children}</ChakraSelect>
}

Select.displayName = 'Select'
