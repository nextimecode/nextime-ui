import React, { ReactNode } from 'react'

import {
  OrderedList as ChakraOrderedList,
  ListProps as ChakraListProps,
} from '@chakra-ui/react'

export interface ListProps extends ChakraListProps {
  children: ReactNode
}

export function OrderedList({ children, ...props }: ListProps) {
  return <ChakraOrderedList {...props}>{children}</ChakraOrderedList>
}

OrderedList.displayName = 'OrderedList'
