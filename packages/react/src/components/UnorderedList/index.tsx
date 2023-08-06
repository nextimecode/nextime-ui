import React, { ReactNode } from 'react'

import {
  UnorderedList as ChakraUnorderedList,
  ListProps as ChakraListProps,
} from '@chakra-ui/react'

export interface ListProps extends ChakraListProps {
  children: ReactNode
}

export function UnorderedList({ children, ...props }: ListProps) {
  return <ChakraUnorderedList {...props}>{children}</ChakraUnorderedList>
}

UnorderedList.displayName = 'UnorderedList'
