import React, { ReactNode } from 'react'

import {
  List as ChakraList,
  ListProps as ChakraListProps,
} from '@chakra-ui/react'

export interface ListProps extends ChakraListProps {
  children: ReactNode
}

export function List({ children, ...props }: ListProps) {
  return <ChakraList {...props}>{children}</ChakraList>
}

List.displayName = 'List'
