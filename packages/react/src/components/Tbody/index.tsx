import React, { ReactNode } from 'react'

import {
  Tbody as ChakraTbody,
  TableBodyProps as ChakraTableBodyProps
} from '@chakra-ui/react'

export interface TableBodyProps extends ChakraTableBodyProps {
  children: ReactNode
}

export function Tbody({ children, ...props }: TableBodyProps) {
  return <ChakraTbody {...props}>{children}</ChakraTbody>
}

Tbody.displayName = 'Tbody'
