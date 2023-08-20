import React, { ReactNode } from 'react'

import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps as ChakraButtonGroupProps
} from '@chakra-ui/react'

export interface ButtonGroupProps extends ChakraButtonGroupProps {
  children: ReactNode
}

export function ButtonGroup({ children, ...props }: ButtonGroupProps) {
  return <ChakraButtonGroup {...props}>{children}</ChakraButtonGroup>
}

ButtonGroup.displayName = 'ButtonGroup'
