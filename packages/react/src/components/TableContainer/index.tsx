import React, { ReactNode } from 'react'

import {
  TableContainer as ChakraTableContainer,
  TableContainerProps as ChakraTableContainerProps,
} from '@chakra-ui/react'

export interface TableContainerProps extends ChakraTableContainerProps {
  children: ReactNode
}

export function TableContainer({ children, ...props }: TableContainerProps) {
  return <ChakraTableContainer {...props}>{children}</ChakraTableContainer>
}

TableContainer.displayName = 'TableContainer'
