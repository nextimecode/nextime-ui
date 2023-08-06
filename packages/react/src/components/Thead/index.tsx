import React, { ReactNode } from 'react'

import {
  Thead as ChakraThead,
  TableHeadProps as ChakraTableHeadProps,
} from '@chakra-ui/react'

export interface TableHeadProps extends ChakraTableHeadProps {
  children: ReactNode
}

export function Thead({ children, ...props }: TableHeadProps) {
  return <ChakraThead {...props}>{children}</ChakraThead>
}

Thead.displayName = 'Thead'
