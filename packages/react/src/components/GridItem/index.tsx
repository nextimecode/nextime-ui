import React, { ReactNode } from 'react'

import {
  GridItem as ChakraGridItem,
  GridItemProps as ChakraGridItemProps
} from '@chakra-ui/react'

export interface GridItemProps extends ChakraGridItemProps {
  children: ReactNode
}

export function GridItem({ children, ...props }: GridItemProps) {
  return <ChakraGridItem {...props}>{children}</ChakraGridItem>
}

GridItem.displayName = 'GridItem'
