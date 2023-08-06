import React, { ReactNode } from 'react'

import {
  Td as ChakraTd,
  TableCellProps as ChakraTableCellProps,
} from '@chakra-ui/react'

export interface TableCellProps extends ChakraTableCellProps {
  children: ReactNode
}

export function Td({ children, ...props }: TableCellProps) {
  return <ChakraTd {...props}>{children}</ChakraTd>
}

Td.displayName = 'Td'
