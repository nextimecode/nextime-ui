import React, { ReactNode } from 'react'

import {
  ListItem as ChakraListItem,
  ListItemProps as ChakraListItemProps
} from '@chakra-ui/react'

export interface ListItemProps extends ChakraListItemProps {
  children: ReactNode
}

export function ListItem({ children, ...props }: ListItemProps) {
  return <ChakraListItem {...props}>{children}</ChakraListItem>
}

ListItem.displayName = 'ListItem'
