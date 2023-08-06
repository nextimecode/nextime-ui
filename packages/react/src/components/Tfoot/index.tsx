import React, { ReactNode } from 'react'

import {
  Tfoot as ChakraTfoot,
  TableFooterProps as ChakraTableFooterProps,
} from '@chakra-ui/react'

export interface TableFooterProps extends ChakraTableFooterProps {
  children: ReactNode
}

export function Tfoot({ children, ...props }: TableFooterProps) {
  return <ChakraTfoot {...props}>{children}</ChakraTfoot>
}

Tfoot.displayName = 'Tfoot'
