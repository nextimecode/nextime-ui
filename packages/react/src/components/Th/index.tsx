import React, { ReactNode } from 'react'

import {
  Th as ChakraTh,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps
} from '@chakra-ui/react'

export interface TableColumnHeaderProps extends ChakraTableColumnHeaderProps {
  children: ReactNode
}

export function Th({ children, ...props }: TableColumnHeaderProps) {
  return <ChakraTh {...props}>{children}</ChakraTh>
}

Th.displayName = 'Th'
