import React, { ReactNode } from 'react'

import {
  Table as ChakraTable,
  TableProps as ChakraTableProps
} from '@chakra-ui/react'

export interface TableProps extends ChakraTableProps {
  children: ReactNode
}

export function Table({ children, ...props }: TableProps) {
  return <ChakraTable {...props}>{children}</ChakraTable>
}

Table.displayName = 'Table'
