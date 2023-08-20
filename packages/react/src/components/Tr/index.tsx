import React, { ReactNode } from 'react'

import {
  Tr as ChakraTr,
  TableRowProps as ChakraTableRowProps
} from '@chakra-ui/react'

export interface TableRowProps extends ChakraTableRowProps {
  children: ReactNode
}

export function Tr({ children, ...props }: TableRowProps) {
  return <ChakraTr {...props}>{children}</ChakraTr>
}

Tr.displayName = 'Tr'
